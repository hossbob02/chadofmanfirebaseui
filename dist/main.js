
var uid
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    uid=user.uid
    var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            var phoneNumber = user.phoneNumber;
            var providerData = user.providerData;
            user.getIdToken().then(function(accessToken) {
              document.getElementById('account-details').textContent = JSON.stringify({
                displayName: displayName,
                email: email,
                emailVerified: emailVerified,
                phoneNumber: phoneNumber,
                photoURL: photoURL,
                uid: uid,
                accessToken: accessToken,
                providerData: providerData
              }, null, '  ');
            });
        // User is signed in.
    } else {
        uid=null
        window.location.replace("index.html")
    }
  });
  function logOut(){
      firebase.auth().signOut()
  }