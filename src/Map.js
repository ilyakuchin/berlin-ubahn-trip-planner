import React from 'react';
import StationLabel from './StationLabel';
import Legend from './Legend';
import UnderConstructionNote from './UnderConstructionNote';
import U2Lines from './U2Lines';
import U3Lines from './U3Lines';
import U7Lines from './U7Lines';
import U9Line from './U9Lines';
import U5Lines from './U5Lines';
import U6Lines from './U6Lines';
import U8Lines from './U8Lines';
import U1Lines from './U1Lines';
import U4Lines from './U4Lines';
import UnterDenLindenPoint from './UnterDenLindenPoint';
import HalleschesTorPoint from './HalleschesTorPoint';
import StadtmittePoint from './StadtmittePoint';
import GneisenaustrassePoint from './GneisenaustrassePoint';
import GleisdreieckPoint from './GleisdreieckPoint';
import HermannplatzPoint from './HermannplatzPoint';
import OstkreuzPoint from './OstkreuzPoint';
import BismarkstrassePoint from './BismarkstrassePoint';
import BayerischerplatzPoint from './BayerischerplatzPoint';
import KurfurstendammPoint from './KurfurstendammPoint';
import SpichernstrassePoint from './SpichernstrassePoint';
import BerlinerstrassePoint from './BerlinerstrassePoint';
import FehrbellinerPlatzPoint from './FehrbellinerPlatzPoint';
import OsloerStrassePoint from './OsloerStrassePoint';
import LeopoldplatzPoint from './LeopoldplatzPoint';
import RathausSteglitzPoint from './RathausSteglitzPoint';
import SpandauPoint from './SpandauPoint';
import ZoologischerGartenPoint from './ZoologischerGartenPoint';
import NollendorfplatzPoint from './NollendorfplatzPoint';
import AlexanderplatzPoint from './AlexanderplatzPoint';
import MockenbruckePoint from './MockenbruckePoint';
import WittenbergplatzPoint from './WittenbergplatzPoint';
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
