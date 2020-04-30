import React from "react";
import StationPoint from "../StationPoint";

export default function U4Lines() {
	const data = [
		{
			cx: "1037.695",
			cy: "1263.332",
			label: "Viktoria-Luise-Platz"
		},
		{
			cx: "1037.695",
			cy: "1401.998",
			label: "Rathaus Schöneberg"
		},
		{
			cx: "1037.695",
			cy: "1447.043",
			label: "Innsbrucker Platz"
		}
	];
	const stations = data.map(station => (
		<StationPoint
			cx={station.cx}
			cy={station.cy}
			label={station.label}
		/>
	));

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
			{stations}
		</>
	);
}
