import React from "react";
import "./App.css";

function App() {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);
  };

  return (
    <div className="app-container">
      <header
        className="glow-header slide-down"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        AI Based Fraudulent Document Detector
      </header>

      <main>
        <label htmlFor="image-upload" className="upload-button neon-hover">
          Upload Image
        </label>

        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />

        <p className="hint-text fade-in">Add images to test accuracy</p>
      </main>

      <footer>
        <div className="info-window fade-up">
          <h3>About This Site</h3>
          <p>
            This platform helps detect fraudulent documents using advanced AI.
            Upload a file, and it gives you insights into its authenticity.
          </p>
        </div>

        <div className="info-window fade-up delay">
          <h4>Made By</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            suscipit lorem nec luctus convallis.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
