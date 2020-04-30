import React from "react";
import StationPoint from "../StationPoint";

export default function U5Lines() {
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
			<StationPoint
				cx="1335.721"
				cy="847"
				label="Bundestag"
			/>
			<StationPoint
				cx="1823.824"
				cy="818.282"
				label="Schillingstraße"
			/>
			<StationPoint
				cx="1872.966"
				cy="832.285"
				label="Strausberger Platz"
			/>
			<StationPoint
				cx="1908.321"
				cy="867.644"
				label="Weberwiese"
			/>
			<StationPoint
				cx="1943.677"
				cy="902.996"
				label="Frankfurter Tor"
			/>
			<StationPoint
				cx="1979.032"
				cy="938.354"
				label="Samariterstraße"
			/>
			<StationPoint
				cx="2160.488"
				cy="959.567"
				label="Magdalenenstraße"
			/>
			<StationPoint
				cx="2325.066"
				cy="959.567"
				label="Friedrichsfelde"
			/>
			<StationPoint
				cx="2365.555"
				cy="986.211"
				label="Tierpark"
			/>
			<StationPoint
				cx="2448.754"
				cy="986.534"
				label="Biesdorf-Süd"
			/>
			<StationPoint
				cx="2491.181"
				cy="944.11"
				label="Elsterwerdaer Platz"
			/>
			<StationPoint
				cx="2568.963"
				cy="866.325"
				label="Kaulsdorf-Nord"
			/>
			<StationPoint
				cx="2604.318"
				cy="830.973"
				label="Neue Grottkauer Straße"
			/>
			<StationPoint
				cx="2639.674"
				cy="795.615"
				label="Cottbusser Platz"
			/>
			<StationPoint
				cx="2675.029"
				cy="760.262"
				label="Hellersdorf"
			/>
			<StationPoint
				cx="2710.385"
				cy="724.906"
				label="Louis-Lewin-Straße"
			/>
			<StationPoint cx="2745.7405" cy="689.5" label="Hönow" />
			<StationPoint
				cx="2090.488"
				cy="959.219"
				label="Frankfurter Allee"
			/>
			<StationPoint
				cx="2240.488"
				cy="959.954"
				label="Lichtenberg"
			/>
			<StationPoint
				cx="2533.607"
				cy="901.684"
				label="Wuhletal"
			/>
			<StationPoint
				cx="1455.102"
				cy="875.743"
				label="Brandenburger Tor"
			/>
			<StationPoint
				cx="1335.721"
				cy="776.054"
				label="Hauptbahnhof"
			/>
			<StationPoint
				isUnderConstruction
				label="Museuminsel"
				cx="1601"
				cy="876.743"
			/>
			<StationPoint
				isUnderConstruction
				label="Berliner Rathaus"
				cy="851.262"
				r="8.5"
			/>
		</>
	);
}
