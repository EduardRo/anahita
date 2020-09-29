import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const ProgBar = (props) => {
  const now = props.now;
  const progressInstance = <ProgressBar animated now={now} label={`${now}%`} />;
  return progressInstance;
};

export default ProgBar;
