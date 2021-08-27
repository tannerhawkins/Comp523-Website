import React from 'react';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Project Description Homepage"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading" href={`#description`}>Project Description</h2>
          <p>
            *** Project Decription Here ***
          </p>
        </div>
      </header>
    </article>
  </Main>
);

export default Index;
