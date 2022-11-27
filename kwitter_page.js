const firebaseConfig = {
      apiKey: "AIzaSyBheWNrgFY5xt6Rfq5_0ksW6pOetGlRkHI",
      authDomain: "kwitter-9352d.firebaseapp.com",
      databaseURL: "https://kwitter-9352d-default-rtdb.firebaseio.com",
      projectId: "kwitter-9352d",
      storageBucket: "kwitter-9352d.appspot.com",
      messagingSenderId: "901466628002",
      appId: "1:901466628002:web:22b40b900cb4cf08245cfb"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            likes : 0 
      });
      document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
