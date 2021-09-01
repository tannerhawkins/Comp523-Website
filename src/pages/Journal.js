import React from 'react';
import { useState } from 'react';
import data from '../data/meetingNotes.json'
import Main from '../layouts/Main';
import styled from 'styled-components';

const NewlineText = (props) => {
  const [shown, setShown] = useState(false);
  const date = props.notes.date
  const text = props.notes.notes;
  const newText = text.split('\r\n').map(str => 
    <p style={{display: shown ? 'block' : 'none' }}>{str}</p>
  );

  const handleClick = () => {
    setShown(!shown);
  }

  
  return <div>
    <StyledHeader onClick={handleClick}>{date}</StyledHeader>
    {newText}
  </div>;
}

const MeetingNotes = props => {
  const notesList = data[props.meetingType].map(notes => 
    <NewlineText notes={notes} />
  );
  return notesList;
}

const Journal = () => (
  <Main
    description={"Journal of meetings and meeting schedule"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading" href={`#schedule`}>Schedule</h2>
          <p>
            Tuesdays 4:30pm: Client Meeting on Zoom<br />
            Wednesdays 10:00am: Mentor Meeting in Discord<br />
            Wednesdays 2:45pm: Team Meeting in Sitterson Lobby<br />
          </p>
        </div>
      </header>
      <header>
        <div className="title">
          <h2 data-testid="heading" href={`#journal`}>Journal</h2>
          <h3>Click Date to Show Meeting Notes</h3>
          <br />
          <h3>Client Meeting Notes</h3>
          <MeetingNotes meetingType="client"/>
          <br />
          <h3>Mentor Meeting Notes</h3>
          <MeetingNotes meetingType="mentor"/>
          <br />
          <h3>Team Meeting Notes</h3>
          <MeetingNotes meetingType="team"/>
        </div>
      </header>
    </article>
  </Main>
);

const StyledHeader = styled.h4`
  &:hover {
    color: grey;
    cursor: pointer;
    text-decoration: underline;
  }
`


export default Journal;
