import React from "react";
import StationPoint from "../StationPoint";

export default function U4Lines() {
	return (
		<>
			<polyline
				fill="none"
				stroke="#F5D021"
				stroke-width="8"
				stroke-miterlimit="10"
				points="1097.695,1182.516 1037.695,1182.516 
	1037.695,1447.031 "
			/>
			<StationPoint
				cx="1037.695"
				cy="1263.332"
				label="Viktoria-Luise-Platz"
			/>
			<StationPoint
				cx="1037.695"
				cy="1401.998"
				label="Rathaus Schöneberg"
			/>
			<StationPoint
				cx="1037.695"
				cy="1447.043"
				label="Innsbrucker Platz"
			/>
		</>
	);
}
