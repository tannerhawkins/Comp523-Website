(this.webpackJsonpComp523Site=this.webpackJsonpComp523Site||[]).push([[6],{40:function(e){e.exports=JSON.parse('{"client":[{"date":"8/31","notes":"High level vision - they create bible books in different creative ways, idea is to have qr codes in the book for people to scan to see an AR version of the book and information on it that will help them complete quizzes\\r\\nAble to see a section to lead them to the associated web app and the app has quizzes affiliated with the book\\r\\nCan take quiz and watch associated videos\\r\\nUse in home school or sunday school setting\\r\\nCreate a website\\r\\nSecure site, has minor info\\r\\nTeacher\\r\\nCan enroll students and track their progress through book\\r\\nTeachers make modules and limit access based on subscription level\\r\\nStudents\\r\\nCan see leaderboard\\r\\nPayment/subscription system\\r\\nWe start\\r\\nWeb app we can use for qr and ar\\r\\nPriority order\\r\\nWeb app + quizzes videos\\r\\nAccounts - teacher and student\\r\\nSignup and login\\r\\nRetain scores (numbers or stars, etc.) and user data\\r\\nTeachers see scores, students see stars\\r\\nLeaderboard\\r\\nQR codes link to quizzes and videos\\r\\nNo worries about QR scanning\\r\\nPayment/subscription \\r\\nAR at the end\\r\\nUniteAR\\r\\nContent\\r\\nUse dummy content up front (for quizzes)\\r\\nBase ancient pathways modules, use links for this too, no video player in the app, embed for a youtube video \\r\\nStop kids from clicking next videos or suggested videos after module stops playing\\r\\nIf not then use video player\\r\\nSubscription - able to upload videos and create quizzes, use links for this not actual uploads\\r\\nBeing able to add new quizzes and videos\\r\\nScalability is a high priority, wants it to be easy to add quizzes and modules (quizzes + videos)\\r\\nUpload like a wordpress\\r\\nSubscription levels\\r\\n3 subscription levels\\r\\nHow many students can be in a class, how many modules can they access, ability to upload or not\\r\\n2 users (teacher and student)\\r\\nSuper admin \\r\\nDelete accounts, manage data from web app backend \\r\\nSecurity\\r\\nUser tracking\\r\\nAdding accounts\\r\\nFrequency of meetings\\r\\nOnce a week\\r\\nMobile friendly\\r\\nDesigns\\r\\nHas screenshots of what she wants\\r\\nFont files\\r\\nDatabases\\r\\nFirebase and firestore\\r\\nWeb hosting\\r\\nCurrently using hostgator? \\r\\nLanguage and systems\\r\\nAngular, javascript, typescript, php, java, react\\r\\nGithub, vscode\\r\\nEnrollment\\r\\nEnrollment code, teacher enrollment, assigning students to teachers and courses, etc. \\r\\nLink socials\\r\\nMake a login and sign up page\\r\\n"},{"date":"9/7","notes":"Started some of the dev for the site\\r\\nThank you Jamie for starting designs\\r\\nWe\u2019re thinking of using google for sign in using their email function for security\\r\\nOther options: email and password, etc.\\r\\nIntegrate with facebook and ways for other people without google accounts to log in\\r\\nFirebase\\r\\nWhich wireframe? \\r\\nJamie creating sign in, login, video and quiz upload page designs\\r\\nQuiz details\\r\\nMultiple choice question\\r\\nScroll through page for all questions\\r\\nShow score after submission\\r\\nJust quiz, don\u2019t add video player to refer back for information\\r\\n"},{"date":"9/14","notes":"Gave updates on how design was coming.\\r\\nGave updates on clickable prototype\\r\\nGave updates on the beginning of development\\r\\nAgreed to bi-weekly meetings until development picks up."},{"date":"9/29","notes":"Overall module progress: progress bar based on number of students who have completed it \\r\\nAssigned modules: ?? Not every student in a class? would be assigned the same module?\\r\\nNeed to add assign module page\\r\\nAR components factored into websites, linked to different educational components? video is a refresher from AR or is just in the module? leaning towards video being just for quiz but functionality in video being in AR component too\\r\\n"},{"date":"10/14","notes":"Talked through new client requests and how they would be implemented"},{"date":"10/28","notes":"Demoed new changes"}],"mentor":[{"date":"9/1","notes":"His name is Danny, he has a mechanical keyboard store\\r\\nDanny knows C++, Windows Apps, iOS and Mac Apps, C#, Swift, Go, Ruby, TypeScript, F#\\r\\nWeekly mentor meeting breakdown\\r\\nTeam asks any questions about issues\\r\\nDanny fill out form for prof\\r\\nPrep a list of questions before each meeting\\r\\nTypically about 15-30 mins, driven by team\\r\\nGo over upcoming assignments\\r\\nThings to discuss with Danny\\r\\nAny issues with the client\\r\\nAny issues in dev\\r\\nTips\\r\\nGo with tech stack team is most comfortable with\\r\\n"},{"date":"9/8","notes":"Change branch naming conventions, doesn\u2019t matter how long they are, no special characters (# and /)\\r\\nUpdate A2 project management doc to include front end and back end labels\\r\\nSourcetree to visually view branch management\\r\\nGithub Powerup to link trello cards directly to Github\\r\\nGood practice to work on command line but not necessary if it doesn\u2019t work for you\\r\\nGet in the habit of doing pull requests and code reviews even for small code changes\\r\\n2 weeks from now, need to reschedule mentor meeting\\r\\nReschedule to 9:15am on the 22nd"},{"date":"9/15","notes":"Checked in how how the client was communicating with us\\r\\nDanny shared project management tips and tools with us"},{"date":"9/22","notes":"Gave basic client updates and began talking about development practices"},{"date":"9/29","notes":"Gave basic updates - was a short meeting"},{"date":"10/6","notes":"Short updates on walking skeleton"},{"date":"10/13","notes":"Showed off some of walking skeleton, got tips about future jobs in the triangle area"},{"date":"10/20","notes":"Talked more about relationship with clients and talked through next steps"},{"date":"10/27","notes":"Talked about testing strategies and how to make site responsive"}],"team":[{"date":"9/1","notes":"Worked on Project Website\\r\\nCreated ideas for mock webpages\\r\\nCreated Trello Board\\r\\n"},{"date":"9/8","notes":"Talked about Git PR conventions\\r\\nWorked on Figma designs and talked more about site design and functionality"},{"date":"9/15","notes":"No meeting - Career fair"},{"date":"9/22","notes":"Worked on adding trello cards for development\\r\\nBegan talking through development process"},{"date":"9/29","notes":"Began Development"},{"date":"10/14","notes":"Finished Walking Skeleton"}]}')},50:function(e,n,t){"use strict";t.r(n);var s,o=t(35),a=t(0),r=t(40),i=t(18),d=t(36),c=t(1);const l=e=>{const[n,t]=Object(a.useState)(!1),s=e.notes.date,o=e.notes.notes.split("\r\n").map((e=>Object(c.jsx)("p",{style:{display:n?"block":"none"},children:e})));return Object(c.jsxs)("div",{children:[Object(c.jsx)(h,{onClick:()=>{t(!n)},children:s}),o]})},u=e=>r[e.meetingType].map((e=>Object(c.jsx)(l,{notes:e}))),h=d.a.h4(s||(s=Object(o.a)(["\n  &:hover {\n    color: grey;\n    cursor: pointer;\n    text-decoration: underline;\n  }\n"])));n.default=()=>Object(c.jsx)(i.a,{description:"Journal of meetings and meeting schedule",children:Object(c.jsxs)("article",{className:"post",id:"index",children:[Object(c.jsx)("header",{children:Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h2",{"data-testid":"heading",href:"#schedule",children:"Schedule"}),Object(c.jsxs)("p",{children:["Tuesdays 4:30pm: Client Meeting on Zoom",Object(c.jsx)("br",{}),"Wednesdays 10:00am: Mentor Meeting in Discord",Object(c.jsx)("br",{}),"Wednesdays 2:45pm: Team Meeting in Sitterson Lobby",Object(c.jsx)("br",{})]})]})}),Object(c.jsx)("header",{children:Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h2",{"data-testid":"heading",href:"#journal",children:"Journal"}),Object(c.jsx)("h3",{children:"Click Date to Show Meeting Notes"}),Object(c.jsx)("br",{}),Object(c.jsx)("h3",{children:"Client Meeting Notes"}),Object(c.jsx)(u,{meetingType:"client"}),Object(c.jsx)("br",{}),Object(c.jsx)("h3",{children:"Mentor Meeting Notes"}),Object(c.jsx)(u,{meetingType:"mentor"}),Object(c.jsx)("br",{}),Object(c.jsx)("h3",{children:"Team Meeting Notes"}),Object(c.jsx)(u,{meetingType:"team"})]})})]})})}}]);
//# sourceMappingURL=6.9185bfbd.chunk.js.map