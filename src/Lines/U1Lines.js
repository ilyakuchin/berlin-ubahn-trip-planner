import React from "react";
import StationPoint from "../StationPoint";
export default function U1Lines() {
	const data = [
		{
			cx: "784.695",
			cy: "1143.516",
			label: "Uhland-straße"
		},
		{
			cx: "1189.695",
			cy: "1143.516",
			label: "Kurfürstenstraße"
		},
		{
			cx: "1648.301",
			cy: "1143.516",
			label: "Prinzenstraße"
		},
		{
			cx: "1825.104",
			cy: "1143.516",
			label: "Görlitzer Bahnhof"
		},
		{
			cx: "1918.928",
			cy: "1143.516",
			label: "Schlesisches Tor"
		},
		{
			cx: "1991.5065",
			cy: "1080.7995",
			label: "Warschauer Straße"
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
				stroke="#53A947"
				stroke-width="8"
				stroke-miterlimit="10"
				points="786.015,1143.516 1931.229,1143.516 
	1992.727,1082.02 "
			/>
			{stations}
		</>
	);
}
