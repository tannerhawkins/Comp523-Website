import React from "react";
import { useHistory } from "react-router";

import Main from "../layouts/Main";

const Deliverables = () => {
  const history = useHistory();
  return (
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
              <a
                href="https://docs.google.com/document/d/1ma1AJjDJovXjW-I3BdnjPWXQB0medpdWcAIbuY7OISg/edit"
                target="_blank"
              >
                Project Management Approach Document
              </a>
              <br />
              <a
                href="https://trello.com/b/4nNKBU7E/ancient-path-adventures"
                target="_blank"
              >
                Trello Board (Not Public)
              </a>
            </div>
            <div id="A3">
              <h1>A3</h1>
              <a
                href="https://docs.google.com/document/d/1PwwCmWCmW8LwELKLi3nnJBy8uHPHIHD4AveVrGhQAhM/edit?usp=sharing"
                target="_blank"
              >
                User Stories
              </a>
            </div>
            <div id="A4">
              <h1>A4</h1>
              <a
                href="https://www.figma.com/file/YLEBbme9ObkOJce7odGgNL/COMP-523-TEAM-draft?node-id=0%3A1"
                target="_blank"
              >
                Clickable Prototype
              </a>
            </div>
            <div id="A5">
              <h1>A5</h1>
              <a
                href="https://docs.google.com/document/d/1KW-e0Sv6BXNhevC3NhjRL9yJNLLhPKCf0FbBOyaoFXY/edit?usp=sharing"
                target="_blank"
              >
                APPLES Reflection
              </a>
            </div>
            <div id="A6">
              <h1>A6</h1>
              <a
                href="https://docs.google.com/document/d/1A_judnnSh99EP8TB0vLDQeRYbizPc3_EPZ5PSroOOi0/edit?usp=sharing"
                target="_blank"
              >
                Application Architecture
              </a>
            </div>
            <div id="A7">
              <h1>A7</h1>
              <a
                href="https://docs.google.com/presentation/d/1NrMkBQM_o7tQsAnEy7AK6Jq20YtF2SHbs3ElE6equC0/edit?usp=sharing"
                target="_blank"
              >
                Architecture Diagram
              </a>
            </div>
            <div id="A8">
              <h1>A8</h1>
              <a
                href="https://apa-walking-skeleton.herokuapp.com/home"
                target="_blank"
              >
                Walking Skeleton
              </a>
            </div>
            <div id="videos">
              <h1>Videos</h1>
              <a href="https://youtu.be/7WRlfLOx2FE" target="_blank">
                10/31
              </a>
              <br />
              <a href="https://youtu.be/FQ2dJlZAuII" target="_blank">
                11/7
              </a>
              <br />
              <a href="https://youtu.be/aq6R8KW6e6s" target="_blank">
                11/15
              </a>
              <br />
              <a href="https://youtu.be/CDSp80ux3CA" target="_blank">
                11/22
              </a>
            </div>
            <div id="A9">
              <h1>A9</h1>
              <a
                href="https://docs.google.com/presentation/d/1fzmiAMTy66MJ1VM8p-Fo4ryq5dkVzhUrRfqa7Z5Gp3Q/edit?usp=sharing"
                target="_blank"
              >
                Midterm Presentation
              </a>
            </div>
            <div id="testing">
              <h1>A11 - Test Coverage</h1>
              <a onClick={() => history.push("/coverage")} target="_blank">
                Test Coverage Report
              </a>
              <br />
              <a
                href="https://docs.google.com/document/d/11Wow1kRJaoUaroIHxpfPniXE_unYVAL_TelIx4F8mVo/edit?usp=sharing"
                target="_blank"
              >
                Interpretation
              </a>
            </div>
            <div id="A12">
              <h1>A12</h1>
              <a
                href="https://github.com/tannerhawkins/AncientPathAdventures.git"
                target="_blank"
              >
                Github Repository
              </a>
            </div>
            <div id="A13">
              <h1>A13</h1>
              <a onClick={() => history.push("/overview")} target="_blank">
                Client Oriented Overview
              </a>
            </div>
            <div id="A14">
              <h1>A14</h1>
              <a href="https://docs.google.com/document/d/1xixUmCLeBiGWwZYMxyG4MdPPHZZ11auYYmocFjUxvFQ/edit?usp=sharing" target="_blank">
                APPLES Reflection 2
              </a>
            </div>
            <div id="Final">
              <h1>Final</h1>
              <a href="https://www.canva.com/design/DAExVDwwmwI/pTdn0sav7nrSgXI5HEBn3Q/edit" target="_blank">
                Final Presentation
              </a>
            </div>
          </div>
        </header>
      </article>
    </Main>
  );
};

export default Deliverables;
