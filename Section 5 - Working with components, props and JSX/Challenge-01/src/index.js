import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";


function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src="jonas.jpeg" alt="Jonas Schmedtmann" />;
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML/CSS" emoji="🦸" color="#1949ce"/>
      <Skill skill="Javascript" emoji="😼" color="#dfe21b"/>
      <Skill skill="Web Design" emoji="💞" color="#3ae28e"/>
      <Skill skill="Git and Github" emoji="🏋️‍♂️" color="#e79314"/>
      <Skill skill="React" emoji="🦾" color="#10dae9"/>
      <Skill skill="Svelte" emoji="🧠" color="#e43213"/>
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{backgroundColor: props.color}}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);