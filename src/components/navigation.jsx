import React, { useState } from "react";

export const Navigation = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const handleLinkClick = () => {
    // Close the navigation menu when a link is clicked
    setCollapsed(true);
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className={`navbar-toggle ${collapsed ? '' : 'collapsed'}`}
            onClick={() => setCollapsed(!collapsed)}
            aria-expanded={!collapsed}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            ResultEase
          </a>
        </div>

        <div
          className={`collapse navbar-collapse ${collapsed ? '' : 'in'}`}
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll" onClick={handleLinkClick}>
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll" onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll" onClick={handleLinkClick}>
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll" onClick={handleLinkClick}>
               UserGuide
              </a> 
            </li>
            <li>
              <a href="#testimonials" className="page-scroll" onClick={handleLinkClick}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll" onClick={handleLinkClick}>
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll" onClick={handleLinkClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
