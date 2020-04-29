import React from 'react';
import StationLabel from './StationLabel';
import Legend from './Legend';
import UnderConstructionNote from './UnderConstructionNote';
import U2Lines from './Lines/U2Lines';
import U3Lines from './Lines/U3Lines';
import U7Lines from './Lines/U7Lines';
import U9Line from './Lines/U9Lines';
import U5Lines from './Lines/U5Lines';
import U6Lines from './Lines/U6Lines';
import U8Lines from './Lines/U8Lines';
import U1Lines from './Lines/U1Lines';
import U4Lines from './Lines/U4Lines';
import UnterDenLindenPoint from './Stations/UnterDenLindenPoint';
import HalleschesTorPoint from './Stations/HalleschesTorPoint';
import StadtmittePoint from './Stations/StadtmittePoint';
import GneisenaustrassePoint from './Stations/GneisenaustrassePoint';
import GleisdreieckPoint from './Stations/GleisdreieckPoint';
import HermannplatzPoint from './Stations/HermannplatzPoint';
import OstkreuzPoint from './Stations/OstkreuzPoint';
import BismarkstrassePoint from './Stations/BismarkstrassePoint';
import BayerischerplatzPoint from './Stations/BayerischerplatzPoint';
import KurfurstendammPoint from './Stations/KurfurstendammPoint';
import SpichernstrassePoint from './Stations/SpichernstrassePoint';
import BerlinerstrassePoint from './Stations/BerlinerstrassePoint';
import FehrbellinerPlatzPoint from './Stations/FehrbellinerPlatzPoint';
import OsloerStrassePoint from './Stations/OsloerStrassePoint';
import LeopoldplatzPoint from './Stations/LeopoldplatzPoint';
import RathausSteglitzPoint from './Stations/RathausSteglitzPoint';
import SpandauPoint from './Stations/SpandauPoint';
import ZoologischerGartenPoint from './Stations/ZoologischerGartenPoint';
import NollendorfplatzPoint from './Stations/NollendorfplatzPoint';
import AlexanderplatzPoint from './Stations/AlexanderplatzPoint';
import MockenbruckePoint from './Stations/MockenbruckePoint';
import WittenbergplatzPoint from './Stations/WittenbergplatzPoint';
const stationLabelArr = require('./labels.json');

export default function Map() {
  const stationLabelsComponent = stationLabelArr.map((label) => (
    <StationLabel transform={label.transform} label={label.label} />
  ));
  return (
    <svg
      version='1.1'
      id='圖層_1'
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='2900px'
      height='1900px'
      viewBox='0 0 2900 1900'
      enable-background='new 0 0 2900 1900'
    >
      {stationLabelsComponent}
      <U1Lines />
      <U2Lines />
      <U3Lines />
      <U4Lines />
      <U5Lines />
      <U6Lines />
      <U7Lines />
      <U8Lines />
      <U9Line />
      <Legend />
      <UnderConstructionNote />
      <UnterDenLindenPoint />
      <HalleschesTorPoint />
      <StadtmittePoint />
      <GneisenaustrassePoint />
      <GleisdreieckPoint />
      <HermannplatzPoint />
      <OstkreuzPoint />
      <BismarkstrassePoint />
      <BayerischerplatzPoint />
      <KurfurstendammPoint />
      <SpichernstrassePoint />
      <BerlinerstrassePoint />
      <FehrbellinerPlatzPoint />
      <OsloerStrassePoint />
      <LeopoldplatzPoint />
      <RathausSteglitzPoint />
      <SpandauPoint />
      <ZoologischerGartenPoint />
      <NollendorfplatzPoint />
      <AlexanderplatzPoint />
      <MockenbruckePoint />
      <WittenbergplatzPoint />
    </svg>
  );
}
