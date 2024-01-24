import { boot } from 'quasar/wrappers';

import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore'; // eslint-disable-line

const firebaseConfig = {
  apiKey: 'AIzaSyDm0tUMOOozV7w2r8K7r2l7HynwJO8y4rE',
  authDomain: 'tripadvisorclone-fa0ce.firebaseapp.com',
  projectId: 'tripadvisorclone-fa0ce',
  storageBucket: 'tripadvisorclone-fa0ce.appspot.com',
  messagingSenderId: '52831156125',
  appId: '1:52831156125:web:e875ff5f572523fa1c6174',
  measurementId: 'G-0FPKBB4FPH',
};
const fapp = initializeApp(firebaseConfig);

const db = getFirestore(fapp);

export default boot(async ({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$db = db;
  // ^ ^ ^ this will allow you to use this.$db (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$Firebaseapp = fapp;
  // ^ ^ ^ this will allow you to use this.$Firebaseapp (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});
export { fapp, db };
