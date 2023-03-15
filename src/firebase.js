import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUy4YYYipPnvXqHEPq2zT1jKW4mvy2E_0",
  authDomain: "my-first-project-27296.firebaseapp.com",
  databaseURL: "https://my-first-project-27296-default-rtdb.firebaseio.com",
  projectId: "my-first-project-27296",
  storageBucket: "my-first-project-27296.appspot.com",
  messagingSenderId: "1052509475399",
  appId: "1:1052509475399:web:1e4f3aeb29851082519762"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
