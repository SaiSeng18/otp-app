import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
	apiKey: "AIzaSyCzcTxb6cGib_JMtSJMxM171by1MplAX94",
	authDomain: "opt-app-825cc.firebaseapp.com",
	projectId: "opt-app-825cc",
	storageBucket: "opt-app-825cc.appspot.com",
	messagingSenderId: "311057455107",
	appId: "1:311057455107:web:354868a4f099eee50bd636",
	measurementId: "G-WQ6GLTWM16"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
