import React from 'react';
import ReactDOM from 'react-dom';
import AddProject from './AddProject';
import {MemoryRouter} from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><AddProject /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});