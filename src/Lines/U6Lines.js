import React from "react";
import StationPoint from "../StationPoint";

export default function U6Lines() {
	const data = [
		{
			cx: "1537.104",
			cy: "1378",
			label: "Paradestraße"
		},
		{
			cx: "1537.104",
			cy: "1313",
			label: "Platz de Luftbrücke"
		},
		{
			cx: "1536.498",
			cy: "1697.031",
			label: "Alt-Mariendorf"
		},
		{
			cx: "1537.104",
			cy: "1647.031",
			label: "Westphalweg"
		},
		{
			cx: "1537.104",
			cy: "1597.031",
			label: "Ullsteinstraße"
		},
		{
			cx: "1537.104",
			cy: "1547.031",
			label: "Kaiserin-Augusta-Straße"
		},
		{
			cx: "1537.104",
			cy: "1497.031",
			label: "Alt-Tempelhof"
		},
		{
			cx: "1536.498",
			cy: "943.354",
			label: "Französische Straße"
		},
		{
			cx: "858.079",
			cy: "127.637",
			label: "Borsigwerke"
		},
		{
			cx: "999.5",
			cy: "269.059",
			label: "Kurt-Schumacher-Platz"
		},
		{
			cx: "893.434",
			cy: "162.99",
			label: "Holzhauser Straße"
		},
		{
			cx: "928.79",
			cy: "198.348",
			label: "Otisstraße"
		},
		{
			cx: "964.145",
			cy: "233.703",
			label: "Scharnweberstraße"
		},
		{
			cx: "1034.855",
			cy: "304.411",
			label: "Afrikanische Straße"
		},
		{
			cx: "1070.211",
			cy: "339.769",
			label: "Rehberge"
		},
		{
			cx: "1105.566",
			cy: "375.125",
			label: "Seestraße"
		},
		{
			cx: "1449.928",
			cy: "719.486",
			label: "Oranienburger Tor"
		},
		{
			cx: "1343.861",
			cy: "613.419",
			label: "Reinickendorfer Straße"
		},
		{
			cx: "1379.217",
			cy: "648.775",
			label: "Schwartzkopffstraße"
		},
		{
			cx: "1414.572",
			cy: "684.13",
			label: "Naturkundemuseum"
		},
		{
			cx: "1538.102",
			cy: "1447.031",
			label: "Tempelhof"
		},
		{
			cx: "823.569",
			cy: "94.6225",
			label: "Alt-tegel"
		},
		{
			cx: "1506.496",
			cy: "775.625",
			label: "Friedrichstraße"
		},
		{
			cx: "1303",
			cy: "570.554",
			label: "Wedding"
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
				stroke="#7C6CA4"
				stroke-width="8"
				stroke-miterlimit="10"
				points="1536.498,1697.031 1536.498,806.33 
	824.224,94.059 "
			/>
			{stations}
		</>
	);
}
