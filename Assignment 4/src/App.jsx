
import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      <a href="../" className="back-nav-btn">
        <span className="back-arrow">←</span>
        <span>Back to Portfolio</span>
      </a>

      <div className="container">
        <div className="badge-pill">
          <span className="badge-dot"></span>
          <span>ASSIGNMENT 04</span>
        </div>

        <h1>User Profiles</h1>
        <p className="subtitle">Modular React component architecture with dynamic props</p>

        <div className="profile-container">
          <ProfileCard
            name="Rahul Sharma"
            image="https://i.pravatar.cc/150?img=12"
            description="Java developer passionate about backend development and building scalable applications."
          />

          <ProfileCard
            name="Priya Patel"
            image="https://i.pravatar.cc/150?img=47"
            description="Frontend developer interested in React, UI design, and modern web technologies."
          />

          <ProfileCard
            name="Amit Verma"
            image="https://i.pravatar.cc/150?img=11"
            description="Computer science student exploring software development and problem solving."
          />
        </div>
      </div>
    </>
  );
}

export default App;

