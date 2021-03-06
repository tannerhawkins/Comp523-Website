import React from "react";
import styled from "styled-components";
import APALogo from "../images/APA Logo.png";
import Main from "../layouts/Main";

const Index = () => (
  <Main description={"Project Description Homepage"}>
    <article className="post" id="index">
      <header>
        <div className="title">
          <StyledImage src={APALogo} />
          <h2 data-testid="heading" href={`#description`}>
            Project Description
          </h2>
          <p>
            Ancient Path Adventures (APA) values the biblical immersion of kids,
            seeking to combine biblical stories and general education topics in
            an Augmented Interactive Education Platform (AIEP). With AIEP, APA
            seeks to create a new, fun way for youth to engage with the Bible,
            because the KJV translation of the Bible may be difficult for them
            to understand. Ancient Path Adventures AR Education Aid is the
            mobile-friendly web app portion of the AIEP, which is accessed by
            scanning a QR code. The web app contains module quizzes associated
            with student accounts and leaderboards and provides a place for
            facilitators to track students’ progress, assign new modules, and
            award students through the program. Talpha Harris, our client and
            founder of APA, wants to provide engaging tools for people seeking
            God’s heart to understand the mysteries of His Word better. This
            project carries the important message of the Gospel: that Jesus
            Christ, the Son of God, took upon flesh and came down from heaven to
            reunite us with him by taking upon our punishment of death, thus
            ultimately defeating sin through dying on the cross. This message is
            important to all, including children. The primary goals of the
            Ancient Path Adventures AR Education Aid is to produce a website
            that will connect the books APA creates with their online quizzes
            and videos. The web app, based on subscription tier, will also allow
            teachers to create/modify their own modules to cater the content
            towards their needs.
          </p>
        </div>
      </header>
      <div className="title">
        <p>
          This site is used to display the work done by a group of UNC Computer
          Science students on a project assigned to them in one of their upper
          level COMP classes. The students have been given a client to work with
          throughout the semester in an attempt to meet their software needs.
          More information on the class and project, including information on
          how to become a client for future classes, can be found{" "}
          <a href="https://comp523.cs.unc.edu/">here</a>
        </p>
      </div>
    </article>
  </Main>
);

const StyledImage = styled.img`
  width: 50%;
  display: block;
  margin: 0 auto;
`;

export default Index;
