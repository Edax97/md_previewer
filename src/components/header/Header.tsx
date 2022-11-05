import { FaMarkdown } from "react-icons/fa";

export const Header = () => {
  return (
    <nav className="navbar">
      <div className="container px-4">
        <a className="navbar-brand" href="/">
          <FaMarkdown className="display-4" />
        </a>

        <div className="navbar-nav d-flex mb-2 mb-lg-0">
          <div className="nav-item">
            <a
              href="https://github.com/Edax97/md_previewer"
              className="nav-link"
              target="__blank"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
