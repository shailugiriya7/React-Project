import image from '../assets/image.jpg';
import React from 'react';

const Newsitem = ({ title, description, src, url, author, publishedAt }) => {
  // Convert publishedAt to GMT string
  const gmtDateString = new Date(publishedAt).toLocaleString("en-IN", {
    timeZone: "GMT",
  
  });
  console.log("gmtDateString:", gmtDateString);

  return (
    <div className="d-inline-block justify-content-center flex-wrap m-4">
      <div className="card bg-dark text-light mb-3 mx-3 px-2 py-2 d-flex" style={{ maxWidth: "345px" }}>
        <img src={src ? src : image} style={{ height: "200px", maxWidth: "345px" }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text">{description ? description.slice(0, 100) : "Arthur Sulzberg, Jr. “A good newspaper is a nation talking to itself.”"}</p>
          {/* Render author and publishedAt */}
          <p className="card-text">
            <small className="text-muted" style={{backgroundColor:"gray"}}>
              By: {author ? author : "Unknown"} on {gmtDateString}
            </small>
          </p>
          <a href={url} target="_blank" className="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
