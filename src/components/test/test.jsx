import React from 'react';
import * as TESTS from '../../tests/indexteste';

const Test = (props) => {
  console.log(props);
  let id = props.match.params.id;

  //console.log(id);
  function selectedComponent(id) {
    let component = 'T' + id;
    const Comp = TESTS[component];
    console.log(component);
    //console.log(id);
    return <Comp />;
  }
  return <div>{selectedComponent(id)}</div>;
};
export default Test;
