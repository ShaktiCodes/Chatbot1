import React from "react";
import { scrapingData } from "../utils/scrapingData";

const ScrapingProgress = () => {
  return (
    <div className="scraping-progress">
      <h2>Website Scraping Progress</h2>
      {scrapingData.map((page) => (
        <div key={page.id} className="scraping-item">
          <h3>{page.url}</h3>
          <p>Status: {page.status}</p>
          <ul>
            {page.dataChunks.map((chunk) => (
              <li key={chunk.id}>{chunk.content}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ScrapingProgress;
