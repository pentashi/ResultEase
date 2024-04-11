import React from "react";

export const Gallery = (props) => {
  // Define the source of the YouTube video
  const videoSource = "https://www.youtube.com/embed/588Oyso1FpA";

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>User Guide</h2>
          <p>
          Watch the User Guide below
          </p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="portfolio-item">
              <iframe
                width="1077"
                height="606"
                src={videoSource}
                title="Student Teaching"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
