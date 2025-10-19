Global Connect

A responsive Company Directory Web App built using React, Tailwind CSS, and Context API, allowing users to search, filter, sort, and paginate through company data fetched from a mock API.

[🔗 Live Demo:](/globalall.netlify.app/)

[🎥 Video Walkthrough:](/www.loom.com/share/b431aeb2ae6a499898a9348458787aef?sid=8c1a8164-d5c9-4c39-ab8d-1368fcbbe9b5)

🚀 Features

✅ Search by Company Name – Instantly find companies by typing in the search bar.
✅ Filter by Location & Industry – Use dropdowns to refine results.
✅ Sort Alphabetically (A–Z / Z–A) – Organize company cards easily.
✅ Pagination – View limited results per page for better readability.
✅ Responsive UI – Built with Tailwind CSS for mobile and desktop views.
✅ Centralized State Management – All logic handled through React Context API.

🧩 Tech Stack
Category	Technologies
Frontend	React (Vite)
Styling	Tailwind CSS
State Management	Context API
Data Source	Mockaroo API
Deployment	Netlify
📂 Project Structure
src/
├── components/
│   ├── Navbar.jsx
│   ├── Search.jsx
│   ├── FilterDropdown.jsx
│   ├── Sort.jsx
│   ├── Pagination.jsx
│   └── CompanyCard.jsx
├── context/
│   └── CompanyContext.jsx
├── hooks/
│   └── useCallApi.jsx
├── App.jsx
└── main.jsx


CompanyContext.jsx – Fetches data, manages global state, and handles logic for search, filter, sort, and pagination.

useCallApi.jsx – Custom hook for fetching data from Mockaroo API.

Navbar.jsx – Contains search and filter dropdowns, and sort control.

Pagination.jsx – Handles pagination logic and navigation between pages.

⚙️ Setup & Installation

Follow these steps to run the project locally 👇

# Clone the repository
git clone https://github.com/sayaliwagal/Global-Connect-

# Navigate into the project
cd global-connect

# Install dependencies
npm install

# Start the development server
npm run dev


Your app will start on http://localhost:5173

🧠 Approach

Used Context API to manage state globally, avoiding prop drilling.

Applied multiple useEffects to handle filtering, sorting, and search separately.

Designed components to be reusable and modular.

Implemented pagination logic directly on filtered data for seamless navigation.

Styled everything using Tailwind CSS for speed and responsiveness.

📹 Video Walkthrough

👉 Watch the full video explanation here:
🎥 Add your video walkthrough link here

(Includes code walkthrough, app demo, and explanation of approach)

🌟 Key Decisions

Context API chosen for scalable state sharing.

Mockaroo API used to simulate real-world backend.

Tailwind CSS used for faster, consistent styling.

Simple client-side pagination for quick user experience.

🧑‍💻 Author

👩‍💻 Sayali Wagal
Frontend Developer | React Enthusiast
💼 [LinkedIn:](/www.linkedin.com/in/sayali-wagal-521b3b1b0/)