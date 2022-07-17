import React, { useState, useEffect, useContext } from "react";
import { set, ref, onValue, remove } from "firebase/database";
import { userPDatabase } from "./Util";
import { UserContext } from "./UserUpdates";

export function ParkInfo(props) {
	// description, contact info, directions, operating hours, image
	const [displayPark, setDisplayPark] = useState(undefined);
	const [saveButton, setSaveButton] = useState("Save Park");
	const [tempDis, setTempDis] = useState("");
	const user = useContext(UserContext)
	useEffect(() => {
		if (props.currPark) {
			setDisplayPark(
				props.parkDatabase[props.stateCode].find(
					(park) => park.parkCode === props.currPark
				)
			);
			//set saved or unsaved look for park in database
			onValue(ref(userPDatabase, user.uid + "/parks/" + props.currPark), (snapshot) => {
				if(snapshot.exists()){
					setSaveButton("Park Saved");
				}
				else{
					setSaveButton("Save Park");
				}
			});

		}
		// eslint-disable-next-line
	}, [props.currPark]);

	function parkExists(){
		onValue(ref(userPDatabase, user.uid + "/parks/" + props.currPark), (snapshot) => {
			if(!snapshot.exists()){
				set(ref(userPDatabase, user.uid + "/parks/" + props.currPark), {
					park_name: displayPark.fullName,
					park_state: props.stateCode
				});
				setTempDis("disabled");
				setSaveButton("Requesting...")
				setTimeout(() =>{
					setSaveButton("Park Saved");
					setTempDis("");
				}, 1000);
			}
			else{
				remove(ref(userPDatabase, user.uid + "/parks/" + props.currPark))
				.then(()=>{
					console.log("success unsave");
				})
				.catch((error)=>{
					console.log("failed unsave");
				});
				setTempDis("disabled");
				setSaveButton("Requesting...")
				setTimeout(() =>{
					setSaveButton("Save Park");
					setTempDis("");
				}, 1000);
			}
		}, {
			onlyOnce: true
		});
	}
	return (
		<div className="parkinfo">
			{!displayPark && (
				<div className="defaultinfo">
					START <br></br> EXPLORING
				</div>
			)}
			{displayPark && user && (<button onClick={parkExists} disabled={tempDis}>{saveButton}</button>)}
			{displayPark && (
				<div className="name">
					<h1>{displayPark.fullName}</h1>
				</div>
			)}
			
			{displayPark && (
				<div className="description">
					<strong>Description: </strong>
					{displayPark.description}
				</div>
			)}

			{displayPark && displayPark.contacts.phoneNumbers[0] && (
				<div className="phoneNumber">
					<strong>Phone Number: </strong>
					{displayPark.contacts.phoneNumbers[0].phoneNumber}
				</div>
			)}

			{displayPark && (
				<div className="email">
					<strong>Email: </strong>
					{displayPark.contacts.emailAddresses[0].emailAddress}
				</div>
			)}

			{displayPark && (
				<div className="directions">
					<strong>Directions: </strong>
					{displayPark.directionsInfo}
				</div>
			)}

			{displayPark && displayPark.operatingHours[0] && (
				<div className="operatinghours">
					<strong>Operating Hours: </strong>
					{displayPark.operatingHours[0].description}
				</div>
			)}

			{displayPark && displayPark.operatingHours[0] && (
				<div className="days">
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
				<div className="website">
					<strong>Official Park Website: </strong>
					<a href={displayPark.url} target="blank">
						{displayPark.url}
					</a>
				</div>
			)}

			{displayPark && (
				<div className="image">
					<img src={displayPark.images[0].url} alt="balls"></img>
				</div>
			)}
		</div>
	);
}
