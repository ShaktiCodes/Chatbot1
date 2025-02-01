export const scrapingData = [
    {
      id: 1,
      url: "https://example.com/home",
      status: "Scraped",
      dataChunks: [
        { id: "chunk1", content: "Welcome to Example.com" },
        { id: "chunk2", content: "We provide the best solutions" },
      ],
    },
    {
      id: 2,
      url: "https://example.com/about",
      status: "Pending",
      dataChunks: [],
    },
    {
      id: 3,
      url: "https://example.com/services",
      status: "Scraped",
      dataChunks: [
        { id: "chunk3", content: "Our services include web development" },
        { id: "chunk4", content: "Contact us for more details" },
      ],
    },
  ];
  