//YOUR FIREBASE LINKS
//ADD YOUR FIREBASE LINKS HERE
 var firebaseConfig = {
      apiKey: "AIzaSyByO-_tYEleMc58qOBOKleH1_dmO1fjXRM",
      authDomain: "chatter-b05f3.firebaseapp.com",
      projectId: "chatter-b05f3",
      storageBucket: "chatter-b05f3.appspot.com",
      messagingSenderId: "622051498684",
      appId: "1:622051498684:web:62ce616baa44b11c6c4eb9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
}