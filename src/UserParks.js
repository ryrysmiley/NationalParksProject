import { useContext, useState } from "react";
import { ParkInfo } from "./ParkInfo.js";
import { PersonalList } from "./PersonalList.js";
import { UserContext } from "./UserUpdates.js";
//left side list of personal parks
//right side park info
export function UserParks(props){
	const [currPark, setCurrPark] = useState(undefined);
	const [stateCode, setStateCode] = useState(undefined);
	const user = useContext(UserContext);
    return(
		<>
			{!user && (<div>You are not signed in</div>)}
			{user && (<div className="home">
				<PersonalList 
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
			</div>)}
		</>
    )
}