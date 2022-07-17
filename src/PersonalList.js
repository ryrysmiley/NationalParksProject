import { userPDatabase } from "./Util";
import { onValue, ref } from "firebase/database";
import { useContext, useEffect, useState } from "react";
import { UserContext} from "./UserUpdates";

export function PersonalList(props) {
	const user = useContext(UserContext);
	const [userList, setUserList] = useState([]);
	function handleChange(event) {
		props.setCurrPark(event.target.value);
		props.setStateCode(event.target.id);
	}

	useEffect(() => {
		const tempList = [];
		onValue(ref(userPDatabase, user.uid + "/parks"), (snapshot) => {
			snapshot.forEach((park) => {
				tempList.push({
					parkCode: park.key,
					fullName: park.val().park_name,
					parkState: park.val().park_state
				});
			})
		}, {
			onlyOnce: true
		});
		setUserList(tempList);
		// eslint-disable-next-line
	}, []);

	return (
		<div className="parklist">
			{props.error && (
				<div className="casehandling">Error: {props.error.message}</div>
			)}
			{!props.isLoaded && <div className="casehandling">Loading...</div>}
            <ul className="parklist">
                {userList.map((item) => (
                    <li className="parklist" key={item.parkCode}>
                        <button className="park" value={item.parkCode} id={item.parkState} onClick={handleChange}>
                            {item.fullName}
                        </button>
                    </li>
                ))}
            </ul>
		</div>
	);
}
