import React from "react";
import StationPoint from "../StationPoint";

export default function U9Lines() {
	return (
		<>
			<polyline
				fill="none"
				stroke="#EC651A"
				stroke-width="8"
				stroke-miterlimit="10"
				points="854.695,1733.486 854.695,1078.516 
1004.953,928.258 1004.953,546.819 1239.175,312.597 "
			/>
			<StationPoint
				cx="854.695"
				cy="1657.031"
				label="Schloßstraße"
			/>
			<StationPoint
				cx="854.695"
				cy="1587.031"
				label="Walther-Schreiber-Platz"
			/>
			<StationPoint
				cx="854.695"
				cy="1517.031"
				label="Friedrich-Wilhelm-Platz"
			/>
			<StationPoint
				cx="854.695"
				cy="1447.031"
				label="Bundesplatz"
			/>
			<StationPoint
				cx="1193.386"
				cy="358.386"
				label="Nauener Platz"
			/>
			<StationPoint
				cx="1064.612"
				cy="487.156"
				label="Amrumer Straße"
			/>
			<StationPoint
				cx="854.695"
				cy="1290.516"
				label="Güntzelstraße"
			/>
			<StationPoint
				cx="984.25"
				cy="948.961"
				label="Hansaplatz"
			/>
			<StationPoint
				cx="1004.953"
				cy="767.554"
				label="Turmstraße"
			/>
			<StationPoint
				cx="1004.953"
				cy="667.554"
				label="Birkenstraße"
			/>
			<StationPoint
				cx="1004.453"
				cy="572.061"
				label="Westhafen"
			/>
		</>
	);
}
