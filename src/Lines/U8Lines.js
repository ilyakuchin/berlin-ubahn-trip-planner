import React from "react";
import StationPoint from "../StationPoint";

export default function U8Lines() {
	const data = [
		{
			cx: "1775.119",
			cy: "1378",
			label: "Leinestraße"
		},
		{
			cx: "1775.119",
			cy: "1313",
			label: "Boddinstraße"
		},
		{
			cx: "1775.119",
			cy: "1198",
			label: "Schönleinstraße"
		},
		{
			cx: "1363.396",
			cy: "430.602",
			label: "Pankstraße"
		},
		{
			cx: "1664.926",
			cy: "730.49",
			label: "Weinmeisterstraße"
		},
		{
			cx: "1625.318",
			cy: "690.883",
			label: "Rosenthaler Platz"
		},
		{
			cx: "1585.711",
			cy: "651.276",
			label: "Bernauer Straße"
		},
		{
			cx: "1546.104",
			cy: "611.668",
			label: "Voltastraße"
		},
		{
			cx: "1775.104",
			cy: "1073.516",
			label: "Moritzplatz"
		},
		{
			cx: "1775.104",
			cy: "1003.516",
			label: "Heinrich-Heine-Straße"
		},
		{
			cx: "1100.617",
			cy: "167.942",
			label: "Lindauer Allee"
		},
		{
			cx: "1135.973",
			cy: "203.297",
			label: "Paracelsus-Bad"
		},
		{
			cx: "1171.327",
			cy: "238.653",
			label: "Residenzstraße"
		},
		{
			cx: "1206.684",
			cy: "274.008",
			label: "Frany-Neuman-Platz"
		},
		{
			cx: "1095.313",
			cy: "81.103",
			label: "Rathaus Reinickendorf"
		},
		{
			cx: "1775.74",
			cy: "1447.043",
			label: "Hermannstraße"
		},
		{
			cx: "1082.896",
			cy: "124.44",
			label: "Karl-Bonhoeffer-Nerveklinik"
		},
		{
			cx: "1183.896",
			cy: "80.655",
			label: "Wittenau"
		},
		{
			cx: "1506.496",
			cy: "572.061",
			label: "Gesundbrunnen"
		},
		{
			cx: "1775.104",
			cy: "882",
			label: "Jannowitzbrücke"
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
				stroke="#035D96"
				stroke-width="8"
				stroke-miterlimit="10"
				points="1775.119,1447.043 1775.119,842.323 
	1083.896,151.103 1083.896,81.103 1183.896,81.103 "
			/>
			{stations}
		</>
	);
}
