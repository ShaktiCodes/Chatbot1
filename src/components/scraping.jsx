import React from "react";

const ScrapingProgress = ({ detectedPages }) => {
  return (
    <div className="scraping-progress">
      <h2>Web Scraping Progress</h2>
      <ul>
        {detectedPages.map((page) => (
          <li key={page.id}>
            {page.url} - <strong>{page.status}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrapingProgress;
