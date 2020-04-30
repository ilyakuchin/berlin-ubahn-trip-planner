import React from "react";
import StationPoint from "../StationPoint";

export default function U3Lines() {
	const data = [
		{
			cx: "378.0595",
			cy: "1724.582",
			label: "Krumme Lanke"
		},
		{
			cx: "413.415",
			cy: "1689.227",
			label: "Onkel Toms Hütte"
		},
		{
			cx: "448.77",
			cy: "1653.868",
			label: "Oskar-Helene-Heim"
		},
		{
			cx: "484.125",
			cy: "1618.516",
			label: "Thielplatz"
		},
		{
			cx: "519.48",
			cy: "1583.157",
			label: "Dahlem-Dorf"
		},
		{
			cx: "554.836",
			cy: "1547.805",
			label: "Podbielskallee"
		},
		{
			cx: "590.192",
			cy: "1512.448",
			label: "Breitenbachplatz"
		},
		{
			cx: "625.547",
			cy: "1477.094",
			label: "Rüdesheimer Platz"
		},
		{
			cx: "667.974",
			cy: "1434.666",
			label: "Heidelberger Platz"
		},
		{
			cx: "813.914",
			cy: "1290.297",
			label: "Hohenzollernplatz"
		},
		{
			cx: "910.105",
			cy: "1194.105",
			label: "Augsburger Straße"
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
				stroke="#339393"
				stroke-width="8"
				stroke-miterlimit="10"
				points="1097.695,1156.516 947.695,1156.516 
	378.844,1725.365 "
			/>
			{stations}
		</>
	);
}
