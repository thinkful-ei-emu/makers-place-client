import React from 'react';
import ReactDOM from 'react-dom';
import ProjectFeed from './ProjectFeed';
import {MemoryRouter} from 'react-router-dom';

it('renders without crashing', () => {
  const arrProjects = [{
    id: 1,
    title: 'name',
    description: 'this is a test',
    img_url: 'url'
  }]
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><ProjectFeed arrProjects={arrProjects}/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});