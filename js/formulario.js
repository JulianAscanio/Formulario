// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBDbp6knaJgePUGOUkXsfwIj5WplDbMXZw",
  authDomain: "login-ff619.firebaseapp.com",
  projectId: "login-ff619",
  storageBucket: "login-ff619.appspot.com",
  messagingSenderId: "141826049864",
  appId: "1:141826049864:web:75e263078f28d874c7557d",
  measurementId: "G-CF722H8Y8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const button = document.getElementById('enviar');

button.addEventListener("click", (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Creando Usuario...")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
      });
  });


































/*const form = document.forms["loginForm"];

form.addEventListener("submit", function handFormSubmit(event) {
  event.preventDefault();

  const email = form["email"].value;
  const password = form["password"].value;
  const crearCuenta = form["createUser"].checked;

  if (crearCuenta) {
    createUser(email, password);
  } else { loginUser(email, password); }
});

function loginUser(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function (userCredential) {
      const user = userCredential.user;
      console.log('Credenciales correctas, ¡bienvenido! ' + user.email);
      localStorage.setItem('user', JSON.stringify(user));
    })
    .catch(function (error) {
      console.log(error);
    });
}

function createUser(email, password) {
  console.log("Creando al usurio con el email " + email);

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function (userCredential) {
      const user = userCredential.user;
      console.log("Se creo al usuario correctamente" + user.email);
      localStorage.setItem("user", JSON.stringify(user));
    })
    .catch(function (error) {
      console.log(error);
      if (error.code === 'auth/email-already-in-use') {
        console.log("La dirección de correo electrónico ya está en uso");
      }
    });
}*/