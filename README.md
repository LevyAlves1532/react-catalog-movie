<h1>Welcome to Catalog Movies</h1>

<p>This is an app built on React + Typescript, I used technologies like Tailwindcss to compose the
app style and the google firestore database to be the backend.</p>

<h3>How to begin?</h3>

<ol>
  <li>first - use <code>npm i</code> or <code>yarn</code> command in your terminal</li>
  <li>second - create database in google firestore with name "movies"</li>
  <li>third - go to "config.ts" which is located in "src/utils/firebase" and fill in the following information:</li>
  <code>
    import { getFirestore } from "firebase/firestore";

    const firebaseConfig = {
      apiKey: "",
      authDomain: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: "",
    };

    const app = initializeApp(firebaseConfig);
  </code>
</ol>

<strong>Now you can start the app with <code>npm start</code>!</strong>