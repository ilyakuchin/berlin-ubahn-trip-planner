import React from "react";
import StationPoint from "../StationPoint";

export default function U9Lines() {
	const data = [
		{
			cx: "854.695",
			cy: "1657.031",
			label: "Schloßstraße"
		},
		{
			cx: "854.695",
			cy: "1587.031",
			label: "Walther-Schreiber-Platz"
		},
		{
			cx: "854.695",
			cy: "1517.031",
			label: "Friedrich-Wilhelm-Platz"
		},
		{
			cx: "854.695",
			cy: "1447.031",
			label: "Bundesplatz"
		},
		{
			cx: "1193.386",
			cy: "358.386",
			label: "Nauener Platz"
		},
		{
			cx: "1064.612",
			cy: "487.156",
			label: "Amrumer Straße"
		},
		{
			cx: "854.695",
			cy: "1290.516",
			label: "Güntzelstraße"
		},
		{
			cx: "984.25",
			cy: "948.961",
			label: "Hansaplatz"
		},
		{
			cx: "1004.953",
			cy: "767.554",
			label: "Turmstraße"
		},
		{
			cx: "1004.953",
			cy: "667.554",
			label: "Birkenstraße"
		},
		{
			cx: "1004.453",
			cy: "572.061",
			label: "Westhafen"
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
				stroke="#EC651A"
				stroke-width="8"
				stroke-miterlimit="10"
				points="854.695,1733.486 854.695,1078.516 
1004.953,928.258 1004.953,546.819 1239.175,312.597 "
			/>
			{stations}
		</>
	);
}
