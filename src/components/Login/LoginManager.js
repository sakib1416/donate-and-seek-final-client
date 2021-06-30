import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
} else{
    firebase.app();
}

export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then((result) => {
        const credential = result.credential;
        const token = credential.accessToken;
        const {displayName, email} = result.user;
        const signedInUser = {name: displayName, email};
        storeAuthToken();
        return signedInUser;
    // ...
    }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
  });

}

export const handlePasswordSignUp = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(result => {
        let user = result.user;
        updateUserName(name);
        console.log(user);
        return user;
    })
    .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        return errorMessage;
    })
}

export const handlePasswordSignIn = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(result => {
        const {displayName, email} = result.user;
        const signedInUser = {name: displayName, email};
        console.log(signedInUser);
        storeAuthToken();
        return signedInUser;
    })
    .catch(error => {
        console.log(error.message);
        const errorMessage = error.message;
        return errorMessage;
    })
}

export const handleSignOut = () => {
    return firebase.auth().signOut()
    .then(response => {
      const signedInUser = {
        name: '',
        email: ''
      };
      sessionStorage.setItem('token', '');
      return signedInUser;
    })
  }

const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        sessionStorage.setItem('token', idToken)
      }).catch(function(error) {
        // Handle error
      });
}

const updateUserName = (name) => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name
    })
    .then(response => {
        console.log("Name updated");
    })
    .catch(error => {
        console.log(error);
    })
}