import { ParkList } from "./ParkList";
import { ParkInfo } from "./ParkInfo";
import { useState } from "react";
//state variable here
export function Home() {
	const [currPark, setCurrPark] = useState(undefined);
	return (
		<div class="home">
			<ParkList currPark={currPark} setCurrPark={setCurrPark} />
			<ParkInfo currPark={currPark} />
		</div>
	);
}
