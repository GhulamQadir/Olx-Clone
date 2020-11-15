// import Firebase from '../../config/firebase';
// import firebase from 'firebase';
// import { createStore } from 'redux';
// import { render } from '@testing-library/react';

// const set_data = () =>{
//     return(dispatch) => {
//     console.log("running  ....")
//     dispatch({ type: "SETDATA", user: {name: "GQ", email: "GhulamQadir@gmail.com" }})
//     }
// }

// const facebook_login = (history) =>{
//  return(dispatch) => {
//     var provider = new firebase.auth.FacebookAuthProvider();
//     firebase.auth().signInWithPopup(provider)
//     .then(function(result) {
//         var token = result.credential.accessToken;
//         var user = result.user;
      
//         let create_user = {
//             name: user.displayName,
//             emaiil: user.email,
//             profile: user.photoURL,
//             uid: user.uid
//         }

//         firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
//         .then(() =>{
//             dispatch({ type: "SETUSER", payload: create_user })
//             alert('User login successfully')
//             history.push('/mainpage')
//         })

//     }).catch(function(error) {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         console.log(errorMessage)
//       });
//  }
// }

// // const post_ad = () =>{
//     // return(dispatch) => {
//         // console.log("running...")
//     // dispatch({type: "SETUSER", data: "Ghulam Qadir"})     
//     // }
// // }

// const post_ad = () =>{
//     return(dispatch) => {
//     console.log("running  ....")
//     dispatch({ type: "Product", users: {name: "Samsung", price: "3000" }})
//     }
// }

// export{
//     set_data,
//     facebook_login,
//     post_ad
// } 


import Firebase from '../../config/firebase';
import firebase from 'firebase';
import { createStore } from 'redux';
import { render } from '@testing-library/react';

const set_data = () =>{
    return(dispatch) => {
    console.log("running  ....")
    dispatch({ type: "SETDATA", user: {name: "GQ", email: "GhulamQadir@gmail.com" }})
    }
}

const facebook_login = (history) =>{
 return(dispatch) => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
      let create_user = {
            name: user.displayName,
            emaiil: user.email,
            profile: user.photoURL,
            uid: user.uid
        }

        firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
        .then(() =>{
            dispatch({ type: "SETUSER", payload: create_user })
            alert('User login successfully')
            history.push('/mainpage')
        })

    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
      });
 }
}
export{
    set_data,
    facebook_login
} 