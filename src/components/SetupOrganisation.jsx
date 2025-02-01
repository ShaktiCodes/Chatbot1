import React, { useState } from "react";
import fetchMetaData from "../utils/fetchMetaData";

function SetupOrganisation({ onNext }) {
  const [orgData, setOrgData] = useState({
    name: "",
    website: "",
    description: "",
  });

  const handleFetchMetaData = async () => {
    const metaDesc = await fetchMetaData(orgData.website);
    setOrgData({ ...orgData, description: metaDesc });
  };

  return (
    <div className="setup-organisation">
      <h2>Setup Organisation</h2>
      <input type="text" placeholder="Company Name" value={orgData.name} onChange={(e) => setOrgData({ ...orgData, name: e.target.value })} />
      <input type="text" placeholder="Company Website" value={orgData.website} onChange={(e) => setOrgData({ ...orgData, website: e.target.value })} />
      <button onClick={handleFetchMetaData}>Auto-fetch Description</button>
      <textarea placeholder="Company Description" value={orgData.description} onChange={(e) => setOrgData({ ...orgData, description: e.target.value })} />
      <button onClick={onNext}>Next</button>
    </div>
  );
}

export default SetupOrganisation;
