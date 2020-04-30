import React from "react";
import StationPoint from "../StationPoint";

export default function U5Lines() {
	const data = [
		{
			cx: "1335.721",
			cy: "847",
			label: "Bundestag"
		},
		{
			cx: "1823.824",
			cy: "818.282",
			label: "Schillingstraße"
		},
		{
			cx: "1872.966",
			cy: "832.285",
			label: "Strausberger Platz"
		},
		{
			cx: "1908.321",
			cy: "867.644",
			label: "Weberwiese"
		},
		{
			cx: "1943.677",
			cy: "902.996",
			label: "Frankfurter Tor"
		},
		{
			cx: "1979.032",
			cy: "938.354",
			label: "Samariterstraße"
		},
		{
			cx: "2160.488",
			cy: "959.567",
			label: "Magdalenenstraße"
		},
		{
			cx: "2325.066",
			cy: "959.567",
			label: "Friedrichsfelde"
		},
		{
			cx: "2365.555",
			cy: "986.211",
			label: "Tierpark"
		},
		{
			cx: "2448.754",
			cy: "986.534",
			label: "Biesdorf-Süd"
		},
		{
			cx: "2491.181",
			cy: "944.11",
			label: "Elsterwerdaer Platz"
		},
		{
			cx: "2568.963",
			cy: "866.325",
			label: "Kaulsdorf-Nord"
		},
		{
			cx: "2604.318",
			cy: "830.973",
			label: "Neue Grottkauer Straße"
		},
		{
			cx: "2639.674",
			cy: "795.615",
			label: "Cottbusser Platz"
		},
		{
			cx: "2675.029",
			cy: "760.262",
			label: "Hellersdorf"
		},
		{
			cx: "2710.385",
			cy: "724.906",
			label: "Louis-Lewin-Straße"
		},
		{
			cx: "2745.7405",
			cy: "689.5",
			label: "Hönow"
		},
		{
			cx: "2090.488",
			cy: "959.219",
			label: "Frankfurter Allee"
		},
		{
			cx: "2240.488",
			cy: "959.954",
			label: "Lichtenberg"
		},
		{
			cx: "2533.607",
			cy: "901.684",
			label: "Wuhletal"
		},
		{
			cx: "1455.102",
			cy: "875.743",
			label: "Brandenburger Tor"
		},
		{
			cx: "1335.721",
			cy: "776.054",
			label: "Hauptbahnhof"
		},
		{
			cx: "1601",
			cy: "876.743",
			label: "Museuminsel"
		},
		{
			cy: "851.262",
			r: "8.5",
			label: "Berliner Rathaus"
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
				stroke="#89592D"
				stroke-width="8"
				stroke-miterlimit="10"
				points="2745.74,689.551 2422.316,1012.974 
	2392.316,1012.974 2338.911,959.567 2000.246,959.567 1858.824,818.146 1728.824,818.146 "
			/>
			<polyline
				fill="none"
				stroke="#89592D"
				stroke-width="8"
				stroke-miterlimit="10"
				points="1455.102,875.743 1335.721,875.743 
	1335.721,776.054 "
			/>
			<polyline
				opacity="0.5"
				fill="none"
				stroke="#89592D"
				stroke-width="8"
				stroke-miterlimit="10"
				enable-background="new    "
				points="
	1455.102,875.743 1672,875.743 1730.213,817.496 "
			/>
			{stations}
		</>
	);
}
