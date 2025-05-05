 XYZ Travel Agency - Trip Booking Platform (Frontend)

Welcome to the XYZ Travel Agency's trip booking platform! This is a responsive and interactive front-end application built using **React.js**, allowing users to explore beautiful destinations, filter trips, and view detailed itineraries.

---

 Features Implemented

This project includes the following pages and functionality:

1. Home Page
   - Includes a prominent search bar for finding destinations.
   - Displays a **carousel of featured destinations** with beautiful images.
   - Note: Clicking on featured destinations does not lead to the details page, but users can search and explore further via the Search page.

2. Search Results Page
   - Shows all available trip packages in a grid layout.
   - Includes **real-time filtering options** by destination, price, and duration.
   - Clicking on a trip card takes users to the **Trip Details Page**.

3. Trip Details Page
   - Provides a full overview of the selected trip: images, itinerary, rating, and price breakdown.
   - Designed for clarity, aesthetics, and mobile responsiveness.

---

##  Project Structure & Approach

The application is structured using modular React components. Here’s how the solution was approached:

- A mock data file (`tripsData.js`) is used to simulate a dynamic backend API. The UI is populated from this local data source without importing `.json` files directly.
- Components like `Navbar`, `SearchBar`, and reusable `TripCard`s are placed under the `components/` directory for better maintainability.
- Each page has its own sub-folder with its own CSS for **scoped styling**.
- Page transitions, hover effects, and real-time UI updates are handled using React's `useState`, `useEffect`, and CSS transitions.

---

To run the project on your local machine, start by opening your terminal and cloning the repository using the git clone command followed by the repository URL. This will download the project files to your computer. Once the project is downloaded, navigate into the project folder using the cd command. After that, install all the required dependencies by running npm install. This step ensures that all the necessary packages are set up. Finally, start the development server by running npm run dev. Your website should now be up and running, and you can view it by opening your browser and going to http://localhost:5173.
