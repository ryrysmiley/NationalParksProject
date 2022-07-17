import { ParkList } from "./ParkList";
import { ParkInfo } from "./ParkInfo";
import { useState } from "react";

export function Home(props) {
	const [currPark, setCurrPark] = useState(undefined);
	const [stateCode, setStateCode] = useState(undefined);
	return (
		<div className="home">
			<ParkList
				parkDatabase={props.parkDatabase}
				error={props.error}
				isLoaded={props.isLoaded}
				currPark={currPark}
				setCurrPark={setCurrPark}
				stateCode={stateCode}
				setStateCode={setStateCode}
			/>
			<ParkInfo
				parkDatabase={props.parkDatabase}
				currPark={currPark}
				stateCode={stateCode}
			/>
		</div>
	);
}
