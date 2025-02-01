🚀 Chatbot Setup UI/UX

📌 Overview

This project is a React-based UI/UX implementation for setting up a chatbot for new businesses. It guides users through a step-by-step process, including registration, organization setup, web scraping progress, and chatbot integration.

📂 Project Structure

📂 chatbot-setup
 ├── 📂 src
 │   ├── 📂 components
 │   │   ├── RegistrationForm.jsx
 │   │   ├── EmailVerification.jsx
 │   │   ├── SetupOrganisation.jsx
 │   │   ├── ScrapingProgress.jsx
 │   │   ├── ChatbotIntegration.jsx
 │   │   ├── SuccessUI.jsx
 │   │   ├── NotDetectedUI.jsx
 │   ├── 📂 pages
 │   │   ├── Home.jsx
 │   │   ├── ChatbotSetup.jsx
 │   ├── 📂 utils
 │   │   ├── fetchMetaData.js
 │   │   ├── dummyData.js
 │   ├── App.js
 │   ├── index.js
 ├── 📂 public
 ├── 📄 README.md
 ├── 📄 package.json

🛠️ Features

✅ User Registration (Manual & Google Login)✅ Email Verification✅ Company Setup with Website Scraping✅ Live Scraping Progress (Dummy Data)✅ Chatbot Integration & Testing✅ Success & Error Handling UI✅ Mobile Responsive & Optimized UI/UX

Create a `.env` file in your project's root directory and add the following environment variables:  

REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
REACT_APP_API_BASE_URL=https://your-backend-api.com
REACT_APP_ENV=development


Note:
- Replace `your_google_client_id` with your actual Google OAuth Client ID.  
- Replace `https://your-backend-api.com` with your API base URL.  
- Never expose sensitive keys in public repositories. Add `.env` to `.gitignore`. 🚀

🔧 Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/your-username/chatbot-setup.git
cd chatbot-setup

2️⃣ Install Dependencies

npm install

3️⃣ Start the Development Server

npm start

Your app will be available at http://localhost:3000/

🎨 UI/UX Focus Areas

Modern UI Design with Material-UI & Tailwind CSS

Smooth Transitions & Animations

Mobile & Desktop Responsive

Dark Mode Compatibility

Intuitive & WOW Factor 

📊 Dummy Data Usage

We use dummy data for simulating backend responses. You can find them inside src/utils/dummyData.js.
Example:

import { scrapingData } from "../utils/dummyData";

📬 API & Backend Assumptions

A backend server exists to scrape and train the chatbot.

Meta description fetching is simulated in fetchMetaData.js.

🤝 Contribution

Feel free to fork the repository and submit pull requests.

🌍 Live Demo

🔗 Click Here to View the Live Website

Developed with ❤️ by [Your Name]

