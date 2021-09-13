import React from 'react';

import Main from '../layouts/Main';


const Deliverables = () => (
  <Main
    title="Deliverables"
    description="List of Deliverables from this project."
  >
    <article className="post" id="deliverables">
      <header>
        <div className="title">
          <h2 data-testid="heading">Deliverables</h2>
          <div id="A2">
            <h1>A2</h1>
            <a href="https://docs.google.com/document/d/1ma1AJjDJovXjW-I3BdnjPWXQB0medpdWcAIbuY7OISg/edit" target="_blank">Project Management Approach Document</a>
            <br />
            <a href="https://trello.com/b/4nNKBU7E/ancient-path-adventures" target="_blank">Trello Board (Not Public)</a>
          </div>
          <br />
          <div id="A3">
            <h1>A3</h1>
            <a href="https://docs.google.com/document/d/1PwwCmWCmW8LwELKLi3nnJBy8uHPHIHD4AveVrGhQAhM/edit?usp=sharing" target="_blank">User Stories</a>
            <br />
          </div>
        </div>
      </header>

    </article>
  </Main>
);

export default Deliverables;
