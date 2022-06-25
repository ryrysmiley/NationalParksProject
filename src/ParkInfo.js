import React, { useState, useEffect } from "react";
export function ParkInfo(props) {
	// description, contact info, directions, operating hours, image
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(true);
	const [items, setItems] = useState([]);

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
	}, [props.currPark]);

	return (
		<div class="parkinfo">
			{error && <div>Error: {error.message}</div>}
			{!isLoaded && <div>Loading...</div>}
			{!items[0] && (
				<div class="defaultinfo">
					START <br></br> EXPLORING
				</div>
			)}
			{items[0] && (
				<div class="name">
					<h1>{items[0].fullName}</h1>
				</div>
			)}
			{items[0] && (
				<div class="description">
					<strong>Description: </strong>
					{items[0].description}
				</div>
			)}
			{items[0] && (
				<div class="phoneNumber">
					<strong>Phone Number: </strong>
					{items[0].contacts.phoneNumbers[0].phoneNumber}
				</div>
			)}
			{items[0] && (
				<div class="email">
					<strong>Email: </strong>
					{items[0].contacts.emailAddresses[0].emailAddress}
				</div>
			)}
			{items[0] && (
				<div class="directions">
					<strong>Directions: </strong>
					{items[0].directionsInfo}
				</div>
			)}
			{items[0] && (
				<div class="operatinghours">
					<strong>Operating Hours: </strong>
					{items[0].operatingHours[0].description}
				</div>
			)}
			{items[0] && (
				<div class="days">
					{items[0] && (
						<div>Monday: {items[0].operatingHours[0].standardHours.monday}</div>
					)}
					{items[0] && (
						<div>
							Tuesday: {items[0].operatingHours[0].standardHours.tuesday}
						</div>
					)}
					{items[0] && (
						<div>
							Wednesday: {items[0].operatingHours[0].standardHours.wednesday}
						</div>
					)}
					{items[0] && (
						<div>
							Thursday: {items[0].operatingHours[0].standardHours.thursday}
						</div>
					)}
					{items[0] && (
						<div>Friday: {items[0].operatingHours[0].standardHours.friday}</div>
					)}
					{items[0] && (
						<div>
							Saturday: {items[0].operatingHours[0].standardHours.saturday}
						</div>
					)}
					{items[0] && (
						<div>Sunday: {items[0].operatingHours[0].standardHours.sunday}</div>
					)}
				</div>
			)}
			{items[0] && (
				<div class="website">
					<strong>Official Park Website: </strong>
					<a href={items[0].url} target="blank">
						{items[0].url}
					</a>
				</div>
			)}
			{items[0] && (
				<div class="image">
					<img src={items[0].images[0].url} alt="balls"></img>
				</div>
			)}
		</div>
	);
}
