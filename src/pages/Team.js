import React from 'react';
import Main from '../layouts/Main';

const Team = () => (
  <Main
  description={"About our team"}
>
  <article className="post" id="index">
  <header>
      <div className="title">
        <h2 data-testid="heading" href={`#aboutteam`}>The Team</h2>
        <div>
          <h3 style={{textDecoration:"underline"}}>Alex Ho</h3>
          <h6>Roles: </h6>
          <p>Project Manager, Design Lead</p>
          <h6>Email:</h6>
          <p>hoaq@live.unc.edu</p>
        </div>
        <div>
          <h3 style={{textDecoration:"underline"}}>Katrina Jagadeesan</h3>
          <h6>Roles: </h6>
          <p>Webmaster, Frontend Lead</p>
          <h6>Email:</h6>
          <p>jkatrina@live.unc.edu</p>
        </div>
        <div>
          <h3 style={{textDecoration:"underline"}}>Tanner Hawkins</h3>
          <h6>Roles: </h6>
          <p>Client Manager, Backend Lead</p>
          <h6>Email:</h6>
          <p>tanner22@live.unc.edu</p>
        </div>
        <a href="mailto:tanner22@live.unc.edu,jkatrina@live.unc.edu,hoaq@live.unc.edu"><button>Email Us</button></a>
      </div>
    </header>
    <header>
      <div className="title">
        <h2 data-testid="heading" href={`#teamrules`}>Team Rules</h2>
        <ul>
          <p>
            - Team members are expected to be respectful of their fellow teammates and client. This includes respect of time and assigned roles.
          </p>
          <p>
            - Team members who will miss a meeting (client, mentor, or team) must notify all other team members and the client or mentor at least 24 hours in advance.
          </p>
          <p>
            - Team members are expected to frequently check the text group chat and Discord server and respond when appropriate.
          </p>
          <ul>
            <p>
              - Within 24 hours unless extenuating circumstances occur from Monday - Thursday.
            </p>
            <p>
              - By the end of the weekend from Friday - Sunday.
            </p>
            <p>
              - If there is no response, the team member who doesn’t respond must buy the others lunch.
            </p>
          </ul>
          <p>
            - Team members must make appropriate comments in the code when necessary to explain large methods, etc.
          </p>
          <p>
            - Team members must pull from the master branch, create a new branch, make changes in the new branch, then commit to git for the rest of the team to review and merge or suggest changes.
          </p>
          <p>
            - New branch naming convention: initials/trelloCard#/description
          </p>
        </ul>
      </div>
    </header>
  </article>
</Main>
);

export default Team;
