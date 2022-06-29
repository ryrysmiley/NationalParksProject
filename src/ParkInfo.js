import React, { useState, useEffect } from "react";
export function ParkInfo(props) {
	// description, contact info, directions, operating hours, image
	const [displayPark, setDisplayPark] = useState(undefined);
	useEffect(() => {
		if (props.currPark) {
			setDisplayPark(
				props.parkDatabase[props.stateCode].find(
					(park) => park.parkCode === props.currPark
				)
			);
		}
		// eslint-disable-next-line
	}, [props.currPark]);

	return (
		<div class="parkinfo">
			{!displayPark && (
				<div class="defaultinfo">
					START <br></br> EXPLORING
				</div>
			)}
			{displayPark && (
				<div class="name">
					<h1>{displayPark.fullName}</h1>
				</div>
			)}
			{displayPark && (
				<div class="description">
					<strong>Description: </strong>
					{displayPark.description}
				</div>
			)}
			{displayPark && (
				<div class="phoneNumber">
					<strong>Phone Number: </strong>
					{displayPark.contacts.phoneNumbers[0].phoneNumber}
				</div>
			)}
			{displayPark && (
				<div class="email">
					<strong>Email: </strong>
					{displayPark.contacts.emailAddresses[0].emailAddress}
				</div>
			)}
			{displayPark && (
				<div class="directions">
					<strong>Directions: </strong>
					{displayPark.directionsInfo}
				</div>
			)}
			{displayPark && (
				<div class="operatinghours">
					<strong>Operating Hours: </strong>
					{displayPark.operatingHours[0].description}
				</div>
			)}
			{displayPark && (
				<div class="days">
					{displayPark && (
						<div>
							Monday: {displayPark.operatingHours[0].standardHours.monday}
						</div>
					)}
					{displayPark && (
						<div>
							Tuesday: {displayPark.operatingHours[0].standardHours.tuesday}
						</div>
					)}
					{displayPark && (
						<div>
							Wednesday: {displayPark.operatingHours[0].standardHours.wednesday}
						</div>
					)}
					{displayPark && (
						<div>
							Thursday: {displayPark.operatingHours[0].standardHours.thursday}
						</div>
					)}
					{displayPark && (
						<div>
							Friday: {displayPark.operatingHours[0].standardHours.friday}
						</div>
					)}
					{displayPark && (
						<div>
							Saturday: {displayPark.operatingHours[0].standardHours.saturday}
						</div>
					)}
					{displayPark && (
						<div>
							Sunday: {displayPark.operatingHours[0].standardHours.sunday}
						</div>
					)}
				</div>
			)}
			{displayPark && (
				<div class="website">
					<strong>Official Park Website: </strong>
					<a href={displayPark.url} target="blank">
						{displayPark.url}
					</a>
				</div>
			)}
			{displayPark && (
				<div class="image">
					<img src={displayPark.images[0].url} alt="balls"></img>
				</div>
			)}
		</div>
	);
}
