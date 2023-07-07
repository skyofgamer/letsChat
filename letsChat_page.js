const firebaseConfig = {

    apiKey: "AIzaSyC_XCNo5DTHtoocglHkT8IZ5r8l8Ls7D00",
  
    authDomain: "kwitter-6cf8e.firebaseapp.com",
  
    databaseURL: "https://kwitter-6cf8e-default-rtdb.firebaseio.com",
  
    projectId: "kwitter-6cf8e",
  
    storageBucket: "kwitter-6cf8e.appspot.com",
  
    messagingSenderId: "196481846409",
  
    appId: "1:196481846409:web:84aa41264c3a7e09470a58"
  
  };
  
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("user_name")
room_name = localStorage.getItem("room_name")

function send(){
    msg = document.getElementById("msg").value ;
    firebase.database().ref(room_name).push({
        like:0,
        name:username,
        msg:msg 
    })
    document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

} });  }); }

    function logout(){
        localStorage.removeItem("room_name")
        localStorage.removeItem("user_name")
        window.location = "index.html"
  }