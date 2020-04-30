import React from "react";
import StationPoint from "../StationPoint";

export default function U2Lines() {
	const data = [
		{
			cx: "1308.72",
			cy: "1033.5",
			label: "Mendelssohn-Bartholdz-Park"
		},
		{
			cx: "1190",
			cy: "1169.516",
			label: "Bülowstraße"
		},
		{
			cx: "1443.721",
			cy: "1018.5",
			label: "Mohrenstraße"
		},
		{
			cx: "1591.498",
			cy: "1018.5",
			label: "Hausvogteiplatz"
		},
		{
			cx: "1651.498",
			cy: "1018.5",
			label: "Spittelmarkt"
		},
		{
			cx: "1678.075",
			cy: "1009.146",
			label: "Märkisches Museum"
		},
		{
			cx: "1720.502",
			cy: "966.719",
			label: "Klosterstraße"
		},
		{
			cx: "1728.824",
			cy: "723.5",
			label: "Rosa-Luxemburg-Platz"
		},
		{
			cx: "1728.824",
			cy: "668.5",
			label: "Senefeldplatz"
		},
		{
			cx: "1728.824",
			cy: "613.5",
			label: "Eberswalder Straße"
		},
		{
			cx: "1728.824",
			cy: "433.5",
			label: "Vinetastraße"
		},
		{
			cx: "808.61",
			cy: "990.431",
			label: "Ernst-Reuter-Platz"
		},
		{
			cx: "750.918",
			cy: "965.239",
			label: "Deutsche Oper"
		},
		{
			cx: "617.105",
			cy: "965.239",
			label: "Sophie-Charlotte-Platz"
		},
		{
			cx: "445.918",
			cy: "965.239",
			label: "Theodor-Heuss-Platz"
		},
		{
			cx: "395.645",
			cy: "929.884",
			label: "Neu-Westend"
		},
		{
			cx: "360.289",
			cy: "894.528",
			label: "Olympiastadion"
		},
		{
			cx: "324.9335",
			cy: "859.1725",
			label: "Ruhleben"
		},
		{
			cx: "536.533",
			cy: "967.067",
			label: "Kaiserdamm"
		},
		{
			cx: "1728.824",
			cy: "559",
			label: "Schönhauser Allee"
		},
		{
			cx: "1728.824",
			cy: "278.344",
			label: "Pankow"
		},
		{
			cx: "1348.721",
			cy: "1017.5",
			label: "Potsdamer Platz"
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
				stroke="#E02021"
				stroke-width="8"
				stroke-miterlimit="10"
				points="1728.824,278.344 1728.824,958.396 
	1668.721,1018.5 1308.72,1018.805 1308.72,1098.805 1238.01,1169.516 987.695,1169.516 783.5,965.239 431,965.239 324.934,859.173 
	"
			/>
			{stations}
		</>
	);
}
