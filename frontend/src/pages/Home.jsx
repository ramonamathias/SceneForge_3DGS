import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import NewProjectCard from "../components/NewProjectCard";

const Icon = ({ children, className = "" }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

export default function Home() {
  return (
    <div className="scene-page">
      <Navbar />

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-background-glow" />

        <div className="page-container hero-layout">

          {/* LEFT */}
          <div className="hero-copy">

            <div className="ai-badge">
              <span className="badge-dot" />
              AI POWERED
            </div>

            <h1>
              3D Scene
              <br />
              Reconstruction
              <span>from a Smartphone Video</span>
            </h1>

            <p className="hero-text">
              Convert your smartphone videos into realistic 3D scenes
              using Gaussian Splatting and advanced 3D vision techniques.
            </p>

            <div className="hero-features">

              <div className="hero-feature">
                <div className="feature-icon">
                  <Icon>
                    <rect x="7" y="2" width="10" height="20" rx="2" />
                    <path d="M11 18h2" />
                  </Icon>
                </div>
                <span>
                  Just a
                  <br />
                  smartphone video
                </span>
              </div>

              <div className="hero-feature">
                <div className="feature-icon">
                  <Icon>
                    <path d="M5 19l5-5" />
                    <path d="M9 5l10 10" />
                    <path d="M15 4l5 1-1 5" />
                    <path d="M5 14l-1 5 5-1" />
                  </Icon>
                </div>
                <span>
                  Fast &
                  <br />
                  Accurate
                </span>
              </div>

              <div className="hero-feature">
                <div className="feature-icon">
                  <Icon>
                    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
                    <path d="M4 7.5l8 4.5 8-4.5" />
                    <path d="M12 12v9" />
                  </Icon>
                </div>
                <span>
                  High-quality
                  <br />
                  3D reconstruction
                </span>
              </div>

              <div className="hero-feature">
                <div className="feature-icon">
                  <Icon>
                    <circle cx="12" cy="12" r="8" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M12 4v2" />
                    <path d="M12 18v2" />
                    <path d="M4 12h2" />
                    <path d="M18 12h2" />
                  </Icon>
                </div>
                <span>
                  View in
                  <br />
                  interactive 3D
                </span>
              </div>

            </div>
          </div>


          {/* IMAGE PLACEHOLDER */}
          <div className="hero-image-frame">

            <div className="image-placeholder">
              <div className="placeholder-content">
                <div className="placeholder-icon">
                  <Icon>
                    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
                    <path d="M4 7.5l8 4.5 8-4.5" />
                    <path d="M12 12v9" />
                  </Icon>
                </div>

                <span>3D Reconstruction Preview</span>

                <small>
                  Your reconstruction image will appear here
                </small>
              </div>
            </div>

            <div className="preview-label">
              <span className="preview-status" />
              Gaussian Splatting
            </div>

          </div>

        </div>
      </section>


      {/* NEW RECONSTRUCTION */}
      <section className="page-container">
        <NewProjectCard />
      </section>


      {/* STATS */}
      <section className="page-container stats-section">

        <div className="stat-card">
          <div className="stat-icon purple">
            <Icon>
              <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
              <path d="M4 7.5l8 4.5 8-4.5" />
              <path d="M12 12v9" />
            </Icon>
          </div>

          <div>
            <span>Total Projects</span>
            <strong>3</strong>
          </div>
        </div>


        <div className="stat-card">
          <div className="stat-icon green">
            <Icon>
              <path d="M20 6L9 17l-5-5" />
            </Icon>
          </div>

          <div>
            <span>Completed</span>
            <strong>2</strong>
          </div>
        </div>


        <div className="stat-card">
          <div className="stat-icon amber">
            <Icon>
              <circle cx="12" cy="12" r="8" />
              <path d="M12 8v4l3 2" />
            </Icon>
          </div>

          <div>
            <span>Processing</span>
            <strong className="amber-text">1</strong>
          </div>
        </div>

      </section>


      {/* RECENT PROJECTS */}
      <section className="page-container recent-section">

        <div className="recent-header">

          <div>
            <div className="recent-title">
              <div className="recent-title-icon">
                <Icon>
                  <circle cx="12" cy="12" r="8" />
                  <path d="M12 8v4l3 2" />
                </Icon>
              </div>

              <div>
                <h2>Recent Projects</h2>
                <p>Your latest 3D reconstructions</p>
              </div>
            </div>
          </div>

          <button className="view-all">
            View all
            <span>→</span>
          </button>

        </div>


        <div className="projects-grid">

          <ProjectCard
            title="Bonsai"
            status="Completed"
            type="Gaussian Splatting reconstruction"
          />

          <ProjectCard
            title="Living Room"
            status="Processing"
            type="Gaussian Splatting reconstruction"
          />

          <ProjectCard
            title="Flower Pot"
            status="Completed"
            type="Gaussian Splatting reconstruction"
          />

        </div>

      </section>

    </div>
  );
}