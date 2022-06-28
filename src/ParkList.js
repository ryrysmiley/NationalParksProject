import { stateCodes } from "./Util";
export function ParkList(props) {
	function handleChange(event) {
		props.setCurrPark(event.target.value);
	}

	return (
		<div class="parklist">
			<select
				class="stateselect"
				onChange={(e) => props.setStateCode(e.target.value)}
			>
				<option class="defaulted" disabled selected>
					-- select a state --
				</option>
				{stateCodes.map((code) => (
					<option value={code.stateCode}>{code.name}</option>
				))}
			</select>
			{props.error && (
				<div class="casehandling">Error: {props.error.message}</div>
			)}
			{!props.isLoaded && <div class="casehandling">Loading...</div>}
			{props.stateCode && (
				<ul class="parklist">
					{props.parkDatabase[props.stateCode].map((item, i) => (
						<li class="parklist" key={i}>
							<button class="park" value={item.parkCode} onClick={handleChange}>
								{item.fullName}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
