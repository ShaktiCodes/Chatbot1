import axios from "axios";

const fetchMetaData = async (url) => {
  try {
    const response = await axios.get(`https://api.urlmeta.org/?url=${url}`);
    return response.data.meta.description || "No description found.";
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return "Could not fetch metadata.";
  }
};

export default fetchMetaData;
