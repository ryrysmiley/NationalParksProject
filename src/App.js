import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home.js";
import { Layout } from "./Layout.js";
import { Account } from "./Account";
import { UserParks } from "./UserParks.js";
import "./index.css";
import React, { useState, useEffect } from "react";
import { UserContextProvider } from "./UserUpdates.js";

function App() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(true);
	const [items, setItems] = useState([]);
	let parkDatabase = {};
	useEffect(() => {
		fetch(
			`https://developer.nps.gov/api/v1/parks?limit=500&api_key=${process.env.REACT_APP_NPS_APIKEY}`, 
		)
			.then(setIsLoaded(false))
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setItems(result.data);
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);
	for (const item of items) {
		const temp = item.states;
		const states = temp.split(",");
		for (const state of states) {
			if (!(state in parkDatabase)) {
				parkDatabase[state] = [item];
			} else {
				parkDatabase[state].push(item);
			}
		}
	}

	return (
		<UserContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element ={<Layout/>}>
						<Route index element={<Home parkDatabase={parkDatabase} error={error} isLoaded={isLoaded} />}/>
						<Route path="mysavedparks" element={<UserParks parkDatabase={parkDatabase} error={error} isLoaded={isLoaded} />} />
						<Route path="account" element={<Account />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</UserContextProvider>
	);
}

export default App;
