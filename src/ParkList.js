import { stateCodes } from "./Util";
export function ParkList(props) {
	function handleChange(event) {
		props.setCurrPark(event.target.value);
	}

	return (
		<div className="parklist">
			<select
				className="stateselect"
				disabled={!props.isLoaded || props.error}
				defaultValue={"default"}
				onChange={(e) => props.setStateCode(e.target.value)}
			>
				<option className="defaulted" value="default" disabled>
					-- select a state --
				</option>
				{stateCodes.map((code) => (
					<option key={code.stateCode} value={code.stateCode}>{code.name}</option>
				))}
			</select>
			{props.error && (
				<div className="casehandling">Error: {props.error.message}</div>
			)}
			{!props.isLoaded && <div className="casehandling">Loading...</div>}
			{props.stateCode && (
				<ul className="parklist">
					{props.parkDatabase[props.stateCode].map((item) => (
						<li className="parklist" key={item.parkCode}>
							<button className="park" value={item.parkCode} onClick={handleChange}>
								{item.fullName}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
