const ArrowIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

const CubeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
    <path d="M4 7.5l8 4.5 8-4.5" />
    <path d="M12 12v9" />
  </svg>
);

export default function ProjectCard({
  title,
  status,
  type,
}) {
  const completed = status === "Completed";

  return (
    <div className="project-card">

      <div className="project-image">

        <div className="project-image-placeholder">

          <div className="placeholder-small-icon">
            <CubeIcon />
          </div>

          <span>3D Preview</span>

        </div>

        <span
          className={
            completed
              ? "project-status completed"
              : "project-status processing"
          }
        >
          {status}
        </span>

      </div>


      <div className="project-info">

        <div>
          <h3>{title}</h3>
          <p>{type}</p>
        </div>

        <button className="project-open">
          <ArrowIcon />
        </button>

      </div>

    </div>
  );
}