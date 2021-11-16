import React from "react";
import Main from "../layouts/Main";

const Overview = () => (
  <Main description={"About our team"}>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading" href={`#aboutteam`}>
            Client Oriented Overview
          </h2>
          <div>
            <h3 style={{ textDecoration: "underline" }}>Major Pieces</h3>
            <h6>Frontend</h6>
            <p>
              Deployed via{" "}
              <a
                href="https://github.com/tannerhawkins/AncientPathAdventures.git"
                target="_blank"
              >
                Github.
              </a>{" "}
              Subject to change once transferred to Client.
            </p>
            <p>
              Client can manage codebase by cloning Github repository and having
              future developers make changes. The README in the repository gives
              step by step instructions for future developers.
            </p>
            <h6>Backend</h6>
            <p>backend description</p>
            <p>
              Deployed via Firebase. Will be transferred to Client's Firebase
              account at end of semester.
            </p>
            <p>
              Once backend is transferred to client's Firebase account, the
              client can manage the backend by adding, deleting, and modifying
              documents in the database. User data is stored in the userData
              collection, class data is stored in the classData collection, and
              module data is stored in the Modules collction. All collections
              can be modified in any way, but it is best not to change any data
              unless the one doing so knows how the application handles such
              data. Doing so could lead to unforeseen bugs. It is best to
              completely delete documents and remake them via the app.
            </p>
          </div>
          <div>
            <h3 style={{ textDecoration: "underline" }}>Cost</h3>
            <h6>Firebase</h6>
            <p>
              Currently, our application falls under the free tier of Firebase.
              However, as more users make accounts and begin using the app, it
              is possible that the number of database reads and writes exceeds
              this free tier and requires payment. Additionally, once added to
              the Client's Firebase account, our application would simply be
              included in whatever payments the Client would already be making
              to deploy and manage their other applications. Currently, the
              increase in price would be minimal.
            </p>
          </div>
          <div>
            <h3 style={{ textDecoration: "underline" }}>Code</h3>
            <p>
              Currently, both the frontend code and backend Firebase data is
              managed by one of our personal accoutns. This is subject to change
              after the client is transferred both of these parts of the app.
              Once the client is in possession of the application, they are free
              to do whatever they see fit with it and have free license to use
              and modify any of our code.
            </p>
          </div>
          <div>
            <h3 style={{ textDecoration: "underline" }}>Live App</h3>
            <p>
              Currently, the live app can be accessed{" "}
              <a
                href="tannerhawkins.github.io/AncientPathAdventures"
                _target="blank"
              >
                here.
              </a>{" "}
              Once the app is transferred to the client, the app will be located
              at the link it is deployed to from their Firebase account.
            </p>
          </div>
          <div>
            <h3 style={{ textDecoration: "underline" }}>User Stories</h3>
            <h6>Need to Have</h6>
            <p>
              We have completed all of the "need to have" user stories except
              for the one giving the ability for the teacher to see how many
              students have completed each model. This one is still a work in
              progress.
            </p>
            <h6>Nice to Have</h6>
            <p>
              Of the "nice to have" user stories, we have completed the ones
              pertaining to the teacher being able to create modules and use
              them across various classes. We plan on doing the payment tier one
              and the student leaderboard one soon. The one that pertains to
              students scanning QR codes is no longer desired by the Client.
            </p>
          </div>
          <div>
            <h3 style={{ textDecoration: "underline" }}>Next Steps</h3>
            <p>We believe that the next steps of the app should be:</p>
            <ul>
              <li>Allow teachers to edit modules</li>
              <li>Allow teachers to purchase APA created modules</li>
              <li>
                Give teachers stats on the teacher homepage about module
                completion status
              </li>
              <li>Various visual and responsitivity changes</li>
            </ul>
          </div>
        </div>
      </header>
    </article>
  </Main>
);

export default Overview;
