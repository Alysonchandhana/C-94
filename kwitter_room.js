
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCTJCldjCU91yH5fVH7FflHIzx4zbTm33Y",
      authDomain: "kwitter-66e9c.firebaseapp.com",
      projectId: "kwitter-66e9c",
      storageBucket: "kwitter-66e9c.appspot.com",
      messagingSenderId: "1062462089902",
      appId: "1:1062462089902:web:3581e12d2c8ea728ff9b3f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

    function addRoom() {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
 
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
      function redirectToRoomName(name){
            console.log(name);
            localStorage.setItem("room_name",name);
            window.location="kwitter_page.html";
      }
getData();
