import React from 'react';
import { render } from 'react-dom';
import Form from './src/components/Controlled.jsx';
import Uncontrolled from './src/components/Uncontrolled.jsx';
import Ejemplo from './src/components/Ejemplo.jsx';
import DynamicInputs from './src/components/DynamicInputs.jsx';

render(<div>
  <h2>Form</h2>
  <Form />
</div>, document.getElementById('app'));
