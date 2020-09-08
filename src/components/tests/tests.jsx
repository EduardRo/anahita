import React from 'react';

import TestCategory from '../testcategory/testCategory';

class Tests extends React.Component {
  state = {
    testcategory: [
      { id: 'OPNUM001', title: 'Adunari' },
      { id: 'OPNUM002', title: 'Scaderi' },
      { id: 'OPNUM001', title: 'Inmultiri' },
    ],
  };

  render() {
    return (
      <div>
        {this.state.testcategory.map((testcategory, index) => {
          return <TestCategory key={index} title={testcategory.title} />;
        })}
      </div>
    );
  }
}

export default Tests;
