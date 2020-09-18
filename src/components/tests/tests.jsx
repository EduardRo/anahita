import React from 'react';

import TestCategory from '../testcategory/testCategory';
import { ButtonGroup } from 'react-bootstrap';

class Tests extends React.Component {
  state = {
    testcategory: [
      { id: 'ADDNUM001', title: 'Adunari', path: '/test/ADDNUM001' },
      { id: 'OPNUM002', title: 'Scaderi', path: '/test/OPNUM002' },
      { id: 'OPNUM001', title: 'Inmultiri', path: '/test/OPNUM003' },
      {
        id: 'OPPMULT0',
        title: 'Operatii cu multimi',
        path: '/test/OPPMULT0',
      },
    ],
  };

  render() {
    return (
      <div>
        <ButtonGroup vertical className='mb-3'>
          {this.state.testcategory.map((testcategory, index) => {
            return (
              <TestCategory
                key={index}
                title={testcategory.title}
                path={testcategory.path}
              />
            );
          })}
        </ButtonGroup>
      </div>
    );
  }
}

export default Tests;
