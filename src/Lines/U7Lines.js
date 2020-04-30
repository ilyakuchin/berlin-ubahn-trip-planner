import React from "react";
import StationPoint from "../StationPoint";

export default function U7Lines() {
	const data = [
		{
			cx: "223.387",
			cy: "590.948",
			label: "Altstadt Spandau"
		},
		{
			cx: "273.387",
			cy: "590.948",
			label: "Zitadelle"
		},
		{
			cx: "323.387",
			cy: "590.948",
			label: "Haselhorst"
		},
		{
			cx: "373.387",
			cy: "590.948",
			label: "Paulsternstraße"
		},
		{
			cx: "423.387",
			cy: "590.948",
			label: "Rohrdamm"
		},
		{
			cx: "473.387",
			cy: "590.948",
			label: "Siemensdamm"
		},
		{
			cx: "523.387",
			cy: "590.948",
			label: "Halemweg"
		},
		{
			cx: "573.387",
			cy: "590.948",
			label: "Jakob-Kaiser-Platz"
		},
		{
			cx: "2043.1185",
			cy: "1854.012",
			label: "Rudow"
		},
		{
			cx: "2007.763",
			cy: "1818.656",
			label: "Zwickauer Damm"
		},
		{
			cx: "1972.407",
			cy: "1783.304",
			label: "Wutzkyallee"
		},
		{
			cx: "1937.052",
			cy: "1747.948",
			label: "Lipschitzallee"
		},
		{
			cx: "1912.104",
			cy: "1355.688",
			label: "Karl-Marx-Straße"
		},
		{
			cx: "1881.422",
			cy: "1283.575",
			label: "Rathaus Neukölln"
		},
		{
			cx: "1694",
			cy: "1254.016",
			label: "Südstern"
		},
		{
			cx: "1619",
			cy: "1254.016",
			label: "Gneisenaustraße"
		},
		{
			cx: "1912.104",
			cy: "1697.031",
			label: "Johannisthaler Chausee"
		},
		{
			cx: "1912.104",
			cy: "1647.031",
			label: "Britz-Süd"
		},
		{
			cx: "1912.104",
			cy: "1597.031",
			label: "Parachimer Allee"
		},
		{
			cx: "1912.104",
			cy: "1547.031",
			label: "Blaschkoallee"
		},
		{
			cx: "1912.104",
			cy: "1497.031",
			label: "Grenzallee"
		},
		{
			cx: "692",
			cy: "753.5",
			label: "Mierendorffplatz"
		},
		{
			cx: "692",
			cy: "867.644",
			label: "Richard-Wagner-Platz"
		},
		{
			cx: "691.474",
			cy: "1175.332",
			label: "Adenauer-platz"
		},
		{
			cx: "713.02",
			cy: "1276.981",
			label: "Konstanzer Straße"
		},
		{
			cx: "813.914",
			cy: "1340.516",
			label: "Blisse-straße"
		},
		{
			cx: "1106.195",
			cy: "1340.688",
			label: "Eisenacher Straße"
		},
		{
			cx: "1190",
			cy: "1340.688",
			label: "Kleistpark"
		},
		{
			cx: "691.632",
			cy: "1060.4",
			label: "Wilmerdorfer Straße"
		},
		{
			cx: "1912.104",
			cy: "1450.819",
			label: "Neukölln"
		},
		{
			cx: "622.667",
			cy: "625.303",
			label: "Jungfernheide"
		},
		{
			cx: "1334.146",
			cy: "1235.803",
			label: "Yorckstraße"
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
				stroke="#1793C5"
				stroke-width="8"
				stroke-miterlimit="10"
				points="2045.559,1856.452 1912.104,1723 
	1912.104,1314.26 1852,1254.155 1569.359,1254.155 1471.721,1156.516 1361.721,1156.516 1361.721,1208 1229.333,1340.516 
	776.667,1340.516 692,1256 692,694.561 588.387,590.948 208.387,590.948 208.387,640.948 "
			/>
			{stations}
		</>
	);
}
