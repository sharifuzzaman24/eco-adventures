# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Assignment Category: 002
# Project: Eco-Adventure Experiences

## Project Overview
Eco-Adventure Experiences is a blog-style website that provides users with detailed information on various eco-friendly travel adventures, such as mountain treks, ocean dives, and wildlife safaris. Users can explore adventure options, view experience details, and book their next eco-adventure. The site includes authentication features like user login, registration, and profile management. The project also features a dynamic and responsive layout and integrates Firebase for user authentication.

## Live URL
[https://assignment-nine-78034.web.app]

## Key Features
- **User Authentication**: Users can register, login, and update their profiles.
- **Eco-Adventures**: A dynamic display of eco-adventure options with information such as title, location, cost, and eco-friendly features.
- **Adventure Detail Pages**: In-depth pages for each adventure, including a "Talk with Expert" feature.
- **Responsive Design**: The website is fully responsive on mobile, tablet, and desktop.
- **Firebase Authentication**: Utilizes Firebase for user login, registration, and profile management.
- **Interactive Features**: Includes a Google Meet consultation button, password validation, and dynamic page titles.
- **Customizable Sections**: Two additional sections on the homepage showcasing eco-adventure-related content.
- **404 Page**: Custom error page for invalid routes.
- **Update Profile**: Users can update their profile information, including their photo and name.

## NPM Packages Used
- **Firebase**: For user authentication and real-time database management.
- **React Router**: For page navigation and routing.
- **Swiper/Daisy UI**: For creating a slider for eco-adventure images.
- **AOS**: For scroll animations (or another package like Animate.css).
- **Dynamic Title**: Implemented using React's `useLocation` hook for changing page titles dynamically.

## Challenges Overcome
- Implemented password validation on the registration page.
- Created a dynamic, responsive layout that works seamlessly across all devices.
- Integrated Google OAuth for social login.
- Enabled a Google Meet link for real-time consultations between 10 AM and 8 PM, with a fallback modal for off-hours.

## Installation and Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/eco-adventure-experiences.git
    ```

2. Navigate to the project folder:
    ```bash
    cd eco-adventure-experiences
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up Firebase:
    - Go to [Firebase Console](https://console.firebase.google.com/).
    - Create a new project and enable Firebase Authentication (Email/Password, Google).
    - Copy the Firebase config keys into an `.env` file.

5. Run the app locally:
    ```bash
    npm start
    ```


## Deployment
Firebase Hosting.


