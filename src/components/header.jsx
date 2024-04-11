import React from "react";

export const Header = (props) => {
  return (
    <header id="header" style={{ width: '100%', padding: '50px 0', position: 'relative' }}>
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 style={{ textAlign: 'center', fontSize: '36px' }}>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p style={{ textAlign: 'center', fontSize: '18px' }}>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                  style={{ display: 'block', margin: '0 auto', textAlign: 'center', width: '200px' }}
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
