import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
export const stateCodes = [
	{ name: "Alabama", stateCode: "AL" },
	{ name: "Alaska", stateCode: "AK" },
	{ name: "Arizona", stateCode: "AZ" },
	{ name: "Arkansas", stateCode: "AR" },
	{ name: "California", stateCode: "CA" },
	{ name: "Colorado", stateCode: "CO" },
	{ name: "Connecticut", stateCode: "CT" },
	{ name: "Delaware", stateCode: "DE" },
	{ name: "Florida", stateCode: "FL" },
	{ name: "Georgia", stateCode: "GA" },
	{ name: "Hawaii", stateCode: "HI" },
	{ name: "Idaho", stateCode: "ID" },
	{ name: "Illinois", stateCode: "IL" },
	{ name: "Indiana", stateCode: "IN" },
	{ name: "Iowa", stateCode: "IA" },
	{ name: "Kansas", stateCode: "KS" },
	{ name: "Kentucky", stateCode: "KY" },
	{ name: "Louisiana", stateCode: "LA" },
	{ name: "Maine", stateCode: "ME" },
	{ name: "Maryland", stateCode: "MD" },
	{ name: "Massachusetts", stateCode: "MA" },
	{ name: "Michigan", stateCode: "MI" },
	{ name: "Minnesota", stateCode: "MN" },
	{ name: "Mississippi", stateCode: "MS" },
	{ name: "Missouri", stateCode: "MO" },
	{ name: "Montana", stateCode: "MT" },
	{ name: "Nebraska", stateCode: "NE" },
	{ name: "Nevada", stateCode: "NV" },
	{ name: "New Hampshire", stateCode: "NH" },
	{ name: "New Jersey", stateCode: "NJ" },
	{ name: "New Mexico", stateCode: "NM" },
	{ name: "New York", stateCode: "NY" },
	{ name: "North Carolina", stateCode: "NC" },
	{ name: "North Dakota", stateCode: "ND" },
	{ name: "Ohio", stateCode: "OH" },
	{ name: "Oklahoma", stateCode: "OK" },
	{ name: "Oregon", stateCode: "OR" },
	{ name: "Pennsylvania", stateCode: "PA" },
	{ name: "Rhode Island", stateCode: "RI" },
	{ name: "South Carolina", stateCode: "SC" },
	{ name: "South Dakota", stateCode: "SD" },
	{ name: "Tennessee", stateCode: "TN" },
	{ name: "Texas", stateCode: "TX" },
	{ name: "Utah", stateCode: "UT" },
	{ name: "Vermont", stateCode: "VT" },
	{ name: "Virginia", stateCode: "VA" },
	{ name: "Washington", stateCode: "WA" },
	{ name: "West Virginia", stateCode: "WV" },
	{ name: "Wisconsin", stateCode: "WI" },
	{ name: "Wyoming", stateCode: "WY" },
];

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
	appId: process.env.REACT_APP_FIREBASE_APPID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL
};
	
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const userPDatabase = getDatabase(app);