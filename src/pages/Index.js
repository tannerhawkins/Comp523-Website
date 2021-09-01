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
            Ancient Path Adventures (APA) values the biblical immersion of kids, 
            seeking to combine biblical stories and general education topics 
            in an Augmented Interactive Education Platform (AIEP). With AIEP, 
            APA seeks to create a new fun way for youth to engage with the Bible, 
            because the KJV translation of the Bible may be difficult to understand. 
            Ancient Path Adventures AR Education Aid is the mobile-friendly web app 
            portion of the AIEP, which is accessed by scanning a QR code. The web app 
            contains module quizzes associated with student accounts and leaderboards 
            and provides a place for facilitators to track students’ progress, 
            assign new modules, and award students through the program. Talpha 
            Harris is our client and founder of APA and wants to provide engaging 
            tools for people seeking God’s heart to understand the mysteries of 
            His Word better. 
          </p>
        </div>
      </header>
      <div className="title">
        <p>
          This site is used to display the work done by a group of UNC Computer Science students 
          on a project assigned to them in one of their upper level COMP classes. The students have been
          given a client to work with throughout the semester in an attempt to meet their software
          needs. More information on the class and project, including information on how to become
          a client for future classes, can be found <a href="https://comp523.cs.unc.edu/">here</a>
        </p>
      </div>
    </article>
  </Main>
);

export default Index;
