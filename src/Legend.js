import React from 'react';
import {
  fontFamily,
  legendFontSize,
  instructionsFontSize,
  creditsFontSize,
} from './TextSettings';

export default function Legend() {
  return (
    <>
      <rect
        x='2269.881'
        y='65.655'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        width='451.119'
        height='544.346'
      />
      <text
        transform='matrix(1 0 0 1 2454.7891 94.6213)'
        fontFamily={fontFamily}
        fontSize={legendFontSize}
      >
        Legend
      </text>
      <line
        fill='none'
        stroke='#53A947'
        strokeWidth='8'
        strokeMiterlimit='10'
        x1='2403.5'
        y1='115'
        x2='2554.5'
        y2='115'
      />
      <text
        transform='matrix(1 0 0 1 2594.5 121.0002)'
        fontFamily={fontFamily}
        fontSize={legendFontSize}
      >
        U1
      </text>
      <line
        fill='none'
        stroke='#E02021'
        strokeWidth='8'
        strokeMiterlimit='10'
        x1='2403.5'
        y1='145'
        x2='2554.5'
        y2='145'
      />
      <text
        transform='matrix(1 0 0 1 2594.5 151.0002)'
        fontFamily={fontFamily}
        fontSize={legendFontSize}
      >
        U2
      </text>
      <line
        fill='none'
        stroke='#339393'
        strokeWidth='8'
        strokeMiterlimit='10'
        x1='2403.5'
        y1='175'
        x2='2554.5'
        y2='175'
      />
      <text
        transform='matrix(1 0 0 1 2594.5 181.0002)'
        fontFamily={fontFamily}
        fontSize={legendFontSize}
      >
        U3
      </text>
      <line
        fill='none'
        stroke='#F5D021'
        strokeWidth='8'
        strokeMiterlimit='10'
        x1='2403.5'
        y1='205'
        x2='2554.5'
        y2='205'
      />
      <text
        transform='matrix(1 0 0 1 2594.5 211.0002)'
        fontFamily={fontFamily}
        fontSize={legendFontSize}
      >
        U4
      </text>
      <line
        fill='none'
        stroke='#89592D'
        strokeWidth='8'
        strokeMiterlimit='10'
        x1='2403.5'
        y1='235'
        x2='2554.5'
        y2='235'
      />
      <text
        transform='matrix(1 0 0 1 2574.5 241.0002)'
        fontFamily={fontFamily}
        fontSize={legendFontSize}
      >
        U5/U55
      </text>
      <line
        fill='none'
        stroke='#7C6CA4'
        strokeWidth='8'
        strokeMiterlimit='10'
        x1='2403.5'
        y1='265'
        x2='2554.5'
        y2='265'
      />
      <text
        transform='matrix(1 0 0 1 2594.5 271.0002)'
        fontFamily={fontFamily}
        fontSize={legendFontSize}
      >
        U6
      </text>
      <line
        fill='none'
        stroke='#1793C5'
        strokeWidth='8'
        strokeMiterlimit='10'
        x1='2403.5'
        y1='295'
        x2='2554.5'
        y2='295'
      />
      <text
        transform='matrix(1 0 0 1 2594.5 301.0002)'
        fontFamily={fontFamily}
        fontSize={legendFontSize}
      >
        U7
      </text>
      <line
        fill='none'
        stroke='#035D96'
        strokeWidth='8'
        strokeMiterlimit='10'
        x1='2403.5'
        y1='325'
        x2='2554.5'
        y2='325'
      />
      <text
        transform='matrix(1 0 0 1 2594.5 331.0002)'
        fontFamily={fontFamily}
        fontSize={legendFontSize}
      >
        U8
      </text>
      <line
        fill='none'
        stroke='#EC651A'
        strokeWidth='8'
        strokeMiterlimit='10'
        x1='2403.5'
        y1='355'
        x2='2554.5'
        y2='355'
      />
      <text
        transform='matrix(1 0 0 1 2594.5 361.0002)'
        fontFamily={fontFamily}
        fontSize={legendFontSize}
      >
        U9
      </text>
      <text
        fontFamily={fontFamily}
        fontSize='22'
        font-weight='bold'
        x='2498.5'
        y='401.0002'
        text-anchor='middle'
      >
        Instructions:
      </text>
      <text
        fontFamily={fontFamily}
        fontSize={instructionsFontSize}
        x='2498.5'
        y='421.0002'
        text-anchor='middle'
      >
        Select departure station and destination
      </text>
      <text
        fontFamily={fontFamily}
        fontSize={instructionsFontSize}
        x='2498.5'
        y='441.0002'
        text-anchor='middle'
      >
        station with a click to build a route
      </text>
      <text
        fontFamily={fontFamily}
        fontSize={instructionsFontSize}
        x='2498.5'
        y='461.0002'
        text-anchor='middle'
      >
        Hold mouse button to move the map
      </text>
      <text
        fontFamily={fontFamily}
        fontSize={instructionsFontSize}
        x='2498.5'
        y='481.0002'
        text-anchor='middle'
      >
        Scroll to zoom the map
      </text>
      <text
        fontFamily={fontFamily}
        fontSize={creditsFontSize}
        x='2504.5'
        y='521.0002'
        text-anchor='middle'
      >
        App By Ilya Kuchin (GPL-3.0)
      </text>
      <a href='https://github.com/ilyakuchin/berlin-ubahn-trip-planner'>
        <text
          fontFamily={fontFamily}
          fontSize={creditsFontSize}
          x='2504.5'
          y='541.0002'
          text-anchor='middle'
        >
          GitHub
        </text>
      </a>

      <text
        fontFamily={fontFamily}
        fontSize={creditsFontSize}
        x='2504.5'
        y='561.0002'
        text-anchor='middle'
      >
        Based On The Map By Mahogany115
      </text>
      <text
        fontFamily={fontFamily}
        fontSize={creditsFontSize}
        x='2504.5'
        y='581.0002'
        text-anchor='middle'
      >
        (CC-BY-SA 4.0)
      </text>
      <a href='https://commons.wikimedia.org/wiki/File:Berlin_Underground.svg'>
        <text
          fontFamily={fontFamily}
          fontSize={creditsFontSize}
          x='2504.5'
          y='601.0002'
          text-anchor='middle'
        >
          Wikimedia
        </text>
      </a>
    </>
  );
}
