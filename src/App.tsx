import React from 'react';

import './styles.scss';

export const App = (props: { num: number }) => (
  <div>
    <h2>Your Angular App</h2>
    <h3>Sum is {props.num}</h3>
  </div>
)
