
import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    course: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

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
          <span>ASSIGNMENT 05</span>
        </div>

        <h2>Student Registration Form</h2>
        <p className="subtitle">Real-time state synchronization via controlled components</p>

        <form>
          <div className="form-field">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Sarah Jenkins"
            />
          </div>

          <div className="form-field">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. sarah@university.edu"
            />
          </div>

          <div className="form-field">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="e.g. 21"
            />
          </div>

          <div className="form-field">
            <label>Academic Course</label>
            <div className="select-wrapper">
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
              >
                <option value="">Select Course</option>
                <option value="MCA">MCA (Master of Computer Applications)</option>
                <option value="MBA">MBA (Master of Business Admin)</option>
                <option value="BCA">BCA (Bachelor of Computer Applications)</option>
                <option value="BTech">BTech (Computer Science & Eng)</option>
              </select>
              <span className="select-chevron">▾</span>
            </div>
          </div>
        </form>

        <div className="preview">
          <div className="preview-header">
            <h3>Entered Details</h3>
            <span className="live-badge">
              <span className="live-pulse"></span>
              LIVE STATE
            </span>
          </div>

          <div className="preview-grid">
            <div className="preview-item">
              <span className="preview-label">Name</span>
              <span className="preview-value">{formData.name || <span className="placeholder-text">Not entered</span>}</span>
            </div>
            <div className="preview-item">
              <span className="preview-label">Email</span>
              <span className="preview-value">{formData.email || <span className="placeholder-text">Not entered</span>}</span>
            </div>
            <div className="preview-item">
              <span className="preview-label">Age</span>
              <span className="preview-value">{formData.age || <span className="placeholder-text">Not entered</span>}</span>
            </div>
            <div className="preview-item">
              <span className="preview-label">Course</span>
              <span className="preview-value">{formData.course || <span className="placeholder-text">Not selected</span>}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
