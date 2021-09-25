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
          <div id="A3">
            <h1>A3</h1>
            <a href="https://docs.google.com/document/d/1PwwCmWCmW8LwELKLi3nnJBy8uHPHIHD4AveVrGhQAhM/edit?usp=sharing" target="_blank">User Stories</a>
          </div>
          <div id="A4">
            <h1>A4</h1>
            <a href="https://www.figma.com/file/YLEBbme9ObkOJce7odGgNL/COMP-523-TEAM-draft?node-id=0%3A1" target="_blank">Clickable Prototype</a>
          </div>
          <div id="A5">
            <h1>A5</h1>
            <a href="https://docs.google.com/document/d/1KW-e0Sv6BXNhevC3NhjRL9yJNLLhPKCf0FbBOyaoFXY/edit?usp=sharing">APPLES Reflection</a>
          </div>
        </div>
      </header>

    </article>
  </Main>
);

export default Deliverables;
