export const scrapingData = [
    {
      id: 1,
      url: "https://example.com/about",
      status: "Scraped",
      dataChunks: [
        { id: 101, content: "About us information extracted from the webpage." },
        { id: 102, content: "Company history and vision details." }
      ]
    },
    {
      id: 2,
      url: "https://example.com/contact",
      status: "Pending",
      dataChunks: []
    },
    {
      id: 3,
      url: "https://example.com/services",
      status: "Scraped",
      dataChunks: [
        { id: 201, content: "List of services offered by the company." },
        { id: 202, content: "Service pricing and package details." }
      ]
    },
    {
      id: 4,
      url: "https://example.com/blog",
      status: "Pending",
      dataChunks: []
    }
  ];
  