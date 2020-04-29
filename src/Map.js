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
      <U2Lines />
      <U3Lines />
      <U7Lines />
      <U9Line />
      <U5Lines />
      <U6Lines />
      <U8Lines />
      <U1Lines />
      <line
        fill='none'
        stroke='#040000'
        stroke-width='8'
        stroke-miterlimit='10'
        x1='208.387'
        y1='640.948'
        x2='208.387'
        y2='640.948'
      />

      <path
        fill='none'
        stroke='#040000'
        stroke-width='8'
        stroke-miterlimit='10'
        d='M1647.398,542.598'
      />

      <circle
        opacity='0.5'
        fill='#FFFFFF'
        stroke='#000000'
        stroke-width='2'
        stroke-miterlimit='10'
        enable-background='new    '
        cx='1536.498'
        cy='875.743'
        r='8.5'
      />

      <path
        fill='#FFFFFF'
        stroke='#000000'
        stroke-width='2'
        stroke-miterlimit='10'
        d='M1021.195,1169.516v-26
	c0-4.694-3.808-8.5-8.5-8.5c-4.695,0-8.5,3.806-8.5,8.5v26c0,4.693,3.805,8.5,8.5,8.5
	C1017.39,1178.016,1021.195,1174.209,1021.195,1169.516'
      />
      <path
        fill='#FFFFFF'
        stroke='#000000'
        stroke-width='8'
        stroke-miterlimit='10'
        d='M1106.195,1169.516'
      />
      <path
        fill='#FFFFFF'
        stroke='#000000'
        stroke-width='8'
        stroke-miterlimit='10'
        d='M1089.195,1182.516'
      />
      <path
        fill='#FFFFFF'
        stroke='#000000'
        stroke-width='8'
        stroke-miterlimit='10'
        d='M1106.195,1182.516'
      />

      <circle
        fill='#FFFFFF'
        stroke='#000000'
        stroke-width='2'
        stroke-miterlimit='10'
        cx='1264.695'
        cy='1143.516'
        r='8.5'
      />
      <path
        fill='#FFFFFF'
        stroke='#000000'
        stroke-width='2'
        stroke-miterlimit='10'
        d='M1433.195,1156.516v-13
	c0-4.694-3.808-8.5-8.5-8.5c-4.695,0-8.5,3.806-8.5,8.5v13c0,4.693,3.805,8.5,8.5,8.5
	C1429.39,1165.016,1433.195,1161.209,1433.195,1156.516'
      />

      <circle
        fill='#FFFFFF'
        stroke='#000000'
        stroke-width='2'
        stroke-miterlimit='10'
        cx='1536.498'
        cy='1143.864'
        r='8.5'
      />
      <circle
        fill='#FFFFFF'
        stroke='#000000'
        stroke-width='2'
        stroke-miterlimit='10'
        cx='1775.104'
        cy='1254.016'
        r='8.5'
      />
      <circle
        fill='#FFFFFF'
        stroke='#000000'
        stroke-width='2'
        stroke-miterlimit='10'
        cx='1775.104'
        cy='1143.516'
        r='8.5'
      />

      <circle
        fill='#FFFFFF'
        stroke='#000000'
        stroke-width='2'
        stroke-miterlimit='10'
        cx='1536.498'
        cy='1018.5'
        r='8.5'
      />

      <path
        fill='#FFFFFF'
        stroke='#000000'
        stroke-width='2'
        stroke-miterlimit='10'
        d='M1737.324,794.731c0-4.694-3.805-8.5-8.5-8.5
	s-8.5,3.806-8.5,8.5v34.107c0,4.691,3.805,8.5,8.5,8.5s8.5-3.809,8.5-8.5V794.731z'
      />

      <circle
        fill='#FFFFFF'
        stroke='#000000'
        stroke-width='2'
        stroke-miterlimit='10'
        cx='691.474'
        cy='965.239'
        r='8.5'
      />
      <polyline
        fill='none'
        stroke='#F5D021'
        stroke-width='8'
        stroke-miterlimit='10'
        points='1097.695,1182.516 1037.695,1182.516 
	1037.695,1447.031 '
      />
      <circle
        fill='#FFFFFF'
        stroke='#000000'
        stroke-width='2'
        stroke-miterlimit='10'
        cx='1037.695'
        cy='1340.516'
        r='8.5'
      />
      <path
        fill='#FFFFFF'
        stroke='#000000'
        stroke-width='2'
        stroke-miterlimit='10'
        d='M1106.195,1182.516c0,4.693-3.808,8.5-8.5,8.5
	c-4.695,0-8.5-3.807-8.5-8.5v-39c0-4.694,3.805-8.5,8.5-8.5c4.692,0,8.5,3.806,8.5,8.5V1182.516z'
      />
      <circle
        fill='#FFFFFF'
        stroke='#000000'
        stroke-width='2'
        stroke-miterlimit='10'
        cx='1536.498'
        cy='1222'
        r='8.5'
      />

      <circle
        fill='#FFFFFF'
        stroke='#000000'
        stroke-width='2'
        stroke-miterlimit='10'
        cx='854.695'
        cy='1143.516'
        r='8.5'
      />
      <path
        fill='#FFFFFF'
        stroke='#000000'
        stroke-width='2'
        stroke-miterlimit='10'
        d='M881.801,1050.486l-9.189-9.192
	c-3.319-3.316-8.701-3.316-12.021,0c-3.318,3.319-3.316,8.701,0,12.021l9.192,9.192c3.317,3.316,8.7,3.317,12.021,0
	C885.122,1059.188,885.121,1053.806,881.801,1050.486'
      />
      <circle
        fill='#FFFFFF'
        stroke='#000000'
        stroke-width='2'
        stroke-miterlimit='10'
        cx='854.695'
        cy='1249.016'
        r='8.5'
      />
      <circle
        fill='#FFFFFF'
        stroke='#000000'
        stroke-width='2'
        stroke-miterlimit='10'
        cx='854.695'
        cy='1340.688'
        r='8.5'
      />

      <circle
        fill='#FFFFFF'
        stroke='#000000'
        stroke-width='2'
        stroke-miterlimit='10'
        cx='769'
        cy='1332.188'
        r='8.5'
      />

      <line
        fill='none'
        stroke='#F5D021'
        stroke-width='8'
        stroke-miterlimit='10'
        x1='1037.695'
        y1='1263.332'
        x2='1052.695'
        y2='1263.332'
      />
      <line
        fill='none'
        stroke='#F5D021'
        stroke-width='8'
        stroke-miterlimit='10'
        x1='1022.695'
        y1='1401.998'
        x2='1037.695'
        y2='1401.998'
      />
      <circle
        fill='#FFFFFF'
        stroke='#000000'
        stroke-width='2'
        stroke-miterlimit='10'
        cx='1241.5'
        cy='310'
        r='8.5'
      />
      <circle
        fill='#FFFFFF'
        stroke='#000000'
        stroke-width='2'
        stroke-miterlimit='10'
        cx='1141.5'
        cy='411.5'
        r='8.5'
      />
      <circle
        fill='#FFFFFF'
        stroke='#000000'
        stroke-width='2'
        stroke-miterlimit='10'
        cx='854.695'
        cy='1733.486'
        r='8.5'
      />

      <path
        fill='#FFFFFF'
        stroke='#000000'
        stroke-width='2'
        stroke-miterlimit='10'
        d='M211.345,657.127
	c1.023,0.414,1.982,1.034,2.813,1.864c3.32,3.32,3.318,8.702,0,12.021c-3.32,3.319-8.701,3.319-12.021,0
	c-3.319-3.319-3.32-8.701,0-12.021c1.055-1.056,2.319-1.772,3.661-2.156l-0.003-8.334c-1.161-0.409-2.25-1.078-3.179-2.009
	c-3.319-3.316-3.319-8.698,0-12.021c3.32-3.319,8.701-3.32,12.021,0c3.319,3.317,3.319,8.701,0,12.021
	c-0.929,0.933-2.021,1.601-3.182,2.01L211.345,657.127z'
      />
      <path
        fill='none'
        stroke='#040000'
        stroke-width='8'
        stroke-miterlimit='10'
        d='M1963.209,1447.031'
      />
      <line
        fill='none'
        stroke='#F5D021'
        stroke-width='8'
        stroke-miterlimit='10'
        x1='1022.695'
        y1='1447.043'
        x2='1052.695'
        y2='1447.043'
      />
      <Legend />
      <UnderConstructionNote />
    </svg>
  );
}
