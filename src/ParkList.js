import React, { useState, useEffect } from "react";
import { stateCodes } from "./Util";
export function ParkList(props) {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(true);
	const [items, setItems] = useState([]);
	const [stateCode, setStateCode] = useState(undefined);

	function handleChange(event) {
		console.log(event.target.value);
		props.setCurrPark(event.target.value);
	}
	// Note: the empty deps array [] means
	// this useEffect will run once
	// similar to componentDidMount()
	useEffect(() => {
		if (stateCode) {
			fetch(
				`https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&limit=50&start=0&api_key=gRyYNgbX0OguVok1HtmebuRAJ9P5c320vsQhH1bD`
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
		}
	}, [stateCode]);

	return (
		<div>
			<select onChange={(e) => setStateCode(e.target.value)}>
				<option disable selected value>
					-- select a state --
				</option>
				{stateCodes.map((code) => (
					<option value={code.stateCode}>{code.name}</option>
				))}
			</select>
			{error && <div>Error: {error.message}</div>}
			{!isLoaded && <div>Loading...</div>}
			<ul>
				{items.map((item) => (
					<li>
						{/*add key? also the part below is huge*/}
						<button value={item.parkCode} onClick={handleChange}>
							{item.fullName}
						</button>
					</li>
				))}
			</ul>
			{props.currPark && <div>{props.currPark}</div>}
		</div>
	);
}
