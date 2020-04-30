import React from "react";
import StationPoint from "../StationPoint";
export default function U1Lines() {
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
			<StationPoint
				cx="784.695"
				cy="1143.516"
				label="Uhland-straße"
			/>
			<StationPoint
				cx="1189.695"
				cy="1143.516"
				label="Kurfürstenstraße"
			/>
			<StationPoint
				cx="1648.301"
				cy="1143.516"
				label="Prinzenstraße"
			/>
			<StationPoint
				cx="1825.104"
				cy="1143.516"
				label="Görlitzer Bahnhof"
			/>
			<StationPoint
				cx="1918.928"
				cy="1143.516"
				label="Schlesisches Tor"
			/>
			<StationPoint
				cx="1991.5065"
				cy="1080.7995"
				label="Warschauer Straße"
			/>
		</>
	);
}
