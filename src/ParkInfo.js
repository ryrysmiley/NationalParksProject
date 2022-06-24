import React, { useState, useEffect } from "react";
export function ParkInfo(props) {
	// description, contact info, entrance fees, directions, operating hours, image
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(true);
	const [item, setItem] = useState([]);

	useEffect(() => {
		if (props.currPark) {
			fetch(
				`https://developer.nps.gov/api/v1/parks?parkCode=${props.currPark}&limit=1&api_key=gRyYNgbX0OguVok1HtmebuRAJ9P5c320vsQhH1bD`
			)
				.then(setIsLoaded(false))
				.then((res) => res.json())
				.then(
					(result) => {
						setIsLoaded(true);
						setItem(result.data);
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
	}, [props.currPark]);

	return (
		<div>
			<h1>{props.currPark}</h1>
			{error && <div>Error: {error.message}</div>}
			{!isLoaded && <div>Loading...</div>}
			<h2>{item.indexOf(0).description}</h2>
		</div>
	);
}
