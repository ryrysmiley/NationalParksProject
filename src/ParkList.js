import React, { useState, useEffect, useRef } from "react";
import { stateCodes } from "./Util";
export function ParkList() {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [items, setItems] = useState([]);
	const [stateCode, setStateCode] = useState(undefined);
	const stateList = useRef(null);

	// Note: the empty deps array [] means
	// this useEffect will run once
	// similar to componentDidMount()
	useEffect(() => {
		if (stateCode) {
			fetch(
				`https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&limit=50&start=0&api_key=gRyYNgbX0OguVok1HtmebuRAJ9P5c320vsQhH1bD`
			)
				.then((res) => res.json())
				.then(
					(result) => {
						setIsLoading(true);
						setItems(result.data);
					},
					// Note: it's important to handle errors here
					// instead of a catch() block so that we don't swallow
					// exceptions from actual bugs in components.
					(error) => {
						setIsLoading(true);
						setError(error);
					}
				);
		}
	}, [stateCode]);

	function handleChange(event) {
		setStateCode(stateList.value);
		console.log(stateList.value);
	}

	return (
		<div>
			<select ref={stateList} onChange={handleChange}>
				<option disabled selected value>
					-- select a state --
				</option>
				{stateCodes.map((code) => (
					<option value={code.stateCode}>{code.name}</option>
				))}
			</select>
			{error && <div>Error: {error.message}</div>}
			{!isLoading && <div>Loading...</div>}
			<ul>
				{items.map((item) => (
					<li>{item.fullName}</li>
				))}
			</ul>
		</div>
	);

	/*
	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<ul>
				{items.map((item) => (
					<li>{item.fullName}</li>
				))}
			</ul>
		);
	}
	*/
}
