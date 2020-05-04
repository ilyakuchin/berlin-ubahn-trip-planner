import React from "react";
import { connect } from "react-redux";
import { setStartStation, setDestinationStation } from "./redux/actions/route";

export function Station({
	cx,
	cy,
	id,
	isUnderConstruction,
	label,
	transform,
	startStation,
	destinationStation,
	setStartStation,
	setDestinationStation
}) {
	return (
		<>
			<circle
				onClick={() => {
					if (startStation === "") {
						setStartStation(id);
					} else if (destinationStation === "") {
						setDestinationStation(id);
					} else {
						setStartStation(id);
					}
				}}
				opacity={isUnderConstruction ? "0.5" : "1"}
				fill={
					startStation === id ||
					destinationStation === id
						? "#000000"
						: "#FFFFFF"
				}
				stroke="#000000"
				strokeWidth="2"
				strokeMiterlimit="10"
				cx={cx}
				cy={cy}
				r="8.5"
			/>
			<text
				transform={transform}
				fontFamily="'TrebuchetMS'"
				fontSize="14"
			>
				{label}
			</text>
		</>
	);
}

const mapStateToProps = state => {
	return {
		startStation: state.route.startStation,
		destinationStation: state.route.destinationStation
	};
};

const dispatchToProps = dipatch => {
	return {
		setStartStation: stationName =>
			dipatch(setStartStation(stationName)),
		setDestinationStation: stationName =>
			dipatch(setDestinationStation(stationName))
	};
};

const ConnectedStation = connect(mapStateToProps, dispatchToProps)(Station);

export default ConnectedStation;
