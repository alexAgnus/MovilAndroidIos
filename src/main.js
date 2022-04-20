import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';


////firebase/////
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

/////////////////////////////////////7///////// Initialize Firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlkgnVjxXOPaflRe1l4-dxodryTrRwtlM",
  authDomain: "proyecto-9f9c5.firebaseapp.com",
  databaseURL: "https://proyecto-9f9c5-default-rtdb.firebaseio.com",
  projectId: "proyecto-9f9c5",
  storageBucket: "proyecto-9f9c5.appspot.com",
  messagingSenderId: "194180136201",
  appId: "1:194180136201:web:d5c5ece396deb85f3727d8"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
//////////////////////////////////////////////////////////////////7

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(appFirebase);

  
router.isReady().then(() => {
  app.mount('#app');
});