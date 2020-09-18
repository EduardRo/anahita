import React from 'react';

import { Link } from 'react-router-dom';
import './testCategory.scss';
const TestCategory = (props) => {
  return (
    <div>
      <Link
        to={props.path}
        className='justify-content-md-center btn btn-primary'
      >
        {props.title}
      </Link>
    </div>
  );
};
export default TestCategory;
