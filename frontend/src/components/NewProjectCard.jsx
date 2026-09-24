import { useNavigate } from "react-router-dom";

const UploadIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 16V4" />
    <path d="M7 9l5-5 5 5" />
    <path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
  </svg>
);

const CubeIcon = () => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
    <path d="M4 7.5l8 4.5 8-4.5" />
    <path d="M12 12v9" />
  </svg>
);

export default function NewProjectCard() {
  const navigate = useNavigate();

  const openProject = () => {
    navigate("/new-project");
  };

  return (
    <div className="new-reconstruction">

      <div className="new-reconstruction-header">

        <div className="new-reconstruction-icon">
          <CubeIcon />
        </div>

        <div>
          <h2>Create a New 3D Reconstruction</h2>

          <p>
            Upload a smartphone video or an existing image dataset and
            generate an interactive Gaussian Splatting scene.
          </p>
        </div>

      </div>


      <div
        className="upload-area"
        onClick={openProject}
      >

        <div className="upload-icon">
          <UploadIcon />
        </div>

        <div className="upload-title">
          Drag &amp; drop your video here
        </div>

        <div className="upload-or">
          or
        </div>

        <button
          className="choose-video"
          onClick={(event) => {
            event.stopPropagation();
            openProject();
          }}
        >
          <UploadIcon />
          Choose Video
        </button>

        <div className="upload-meta">
          <span>Supports MP4, MOV</span>
          <i />
          <span>Recommended: 10–60 seconds</span>
          <i />
          <span>Max size: 500 MB</span>
        </div>

      </div>

    </div>
  );
}