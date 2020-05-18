import React, { useEffect, useState } from 'react';
import { INITIAL_VALUE, ReactSVGPanZoom, TOOL_NONE } from 'react-svg-pan-zoom';

import Legend from './Legend';
import Lines from './Lines';

export default function Map() {
  const [tool, setTool] = useState(TOOL_NONE);
  const [value, setValue] = useState(INITIAL_VALUE);

  let Viewer = null;

  const fitToViewer = () => {
    Viewer.fitToViewer();
  };

  const fitSelection = () => {
    Viewer.fitSelection(40, 40, 200, 200);
  };

  const zoomOnViewerCenter = () => {
    Viewer.zoomOnViewerCenter(1.1);
  };

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
      <button className='btn' onClick={() => zoomOnViewerCenter()}>
        Zoom in
      </button>
      <button className='btn' onClick={() => fitSelection()}>
        Zoom area 200x200
      </button>
      <button className='btn' onClick={() => fitToViewer()}>
        Fit
      </button>
      <ReactSVGPanZoom
        width={window.innerWidth}
        height={window.innerHeight}
        ref={(newViewer) => (Viewer = newViewer)}
        tool={tool}
        onChangeTool={(nextTool) => setTool(nextTool)}
        value={value}
        onChangeValue={(nextValue) => setValue(nextValue)}
      >
        {svg}
      </ReactSVGPanZoom>
    </div>
  );
}
