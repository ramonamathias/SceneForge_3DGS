import { useNavigate } from "react-router-dom";

const Icon = ({ children }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* LOGO */}
        <div className="brand">

          <div className="brand-mark">
            <Icon>
              <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
              <path d="M4 7.5l8 4.5 8-4.5" />
              <path d="M12 12v9" />
            </Icon>
          </div>

          <div>
            <div className="brand-name">
              Scene<span>Forge</span> 3D
            </div>

            <div className="brand-subtitle">
              Gaussian Splatting Studio
            </div>
          </div>

        </div>


        {/* NAVIGATION */}
        <nav className="navigation">

          <button className="nav-item active">

            <Icon>
              <path d="M3 10.5L12 3l9 7.5" />
              <path d="M5 9v11h14V9" />
              <path d="M9 20v-6h6v6" />
            </Icon>

            Home

          </button>


          <button
            className="nav-item"
            onClick={() => navigate("/new-project")}
          >

            <Icon>
              <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
              <path d="M4 7.5l8 4.5 8-4.5" />
            </Icon>

            Projects

          </button>


          <button className="nav-item">

            <Icon>
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <circle cx="8.5" cy="9" r="1.5" />
              <path d="M3 16l5-5 4 4 3-3 6 5" />
            </Icon>

            Gallery

          </button>


          <button className="nav-item">

            <Icon>
              <circle cx="12" cy="12" r="3" />
              <path d="M19 15l1 1-2 2-1-1" />
              <path d="M5 9L4 8l2-2 1 1" />
              <path d="M9 5L8 4l2-2 1 1" />
              <path d="M15 19l1 1-2 2-1-1" />
            </Icon>

            Settings

          </button>

        </nav>


        {/* PROFILE */}
        <div className="profile">
          R
        </div>

      </div>
    </header>
  );
}