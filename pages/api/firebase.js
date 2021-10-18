import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlmyxFBfAzpftjz31hk4MtRN4vFESIfOk",
  authDomain: "bejamas-ae452.firebaseapp.com",
  projectId: "bejamas-ae452",
  storageBucket: "bejamas-ae452.appspot.com",
  messagingSenderId: "475978754323",
  appId: "1:475978754323:web:8fdf55cf5c2241a336d2e6",
  measurementId: "G-T0FV77PYPG",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const getProducts = async () => {
  const productsCol = collection(db, "products");
  const productSnapshot = await getDocs(productsCol);
  return productSnapshot.docs.map((doc) => doc.data());
};

export default {
  getProducts,
};
