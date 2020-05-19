import React, { useEffect, useState } from 'react';
import { INITIAL_VALUE, ReactSVGPanZoom, TOOL_AUTO } from 'react-svg-pan-zoom';

import Legend from './Legend';
import Lines from './Lines';

export default function Map() {
  const [tool, setTool] = useState(TOOL_AUTO);
  const [value, setValue] = useState(INITIAL_VALUE);

  let Viewer = null;

  useEffect(() => {
    Viewer.fitToViewer();
  }, [Viewer]);

  const svg = (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width='2900'
      height='1900'
      viewBox='0 0 2900 1900'
    >
      <Lines />
      <Legend />
    </svg>
  );

  return (
    <div>
      <ReactSVGPanZoom
        background='#FFFFFF'
        width={window.innerWidth}
        height={window.innerHeight}
        ref={(newViewer) => (Viewer = newViewer)}
        tool={tool}
        onChangeTool={(nextTool) => setTool(nextTool)}
        value={value}
        onChangeValue={(nextValue) => setValue(nextValue)}
        miniatureProps={{ position: 'none' }}
        detectPinchGesture
        scaleFactorOnWheel={1.02}
        disableDoubleClickZoomWithToolAuto
        toolbarProps={{ position: 'none' }}
      >
        {svg}
      </ReactSVGPanZoom>
    </div>
  );
}
