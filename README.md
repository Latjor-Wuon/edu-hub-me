# EduHub

EduHub is a platform designed to provide educational opportunities through scholarships, workshops, and mentorship programs. This application allows users to apply for scholarships, register for workshops, and participate in mentorship programs. Users can also manage their profiles, including updating their profile pictures.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Navigation](#navigation)
- [Profile Management](#profile-management)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Authentication (Sign Up, Login, Logout)
- Apply for Scholarships
- Register for Workshops
- Participate in Mentorship Programs
- Manage User Profile and Profile Picture
- Data Visualization with Charts

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine
- Firebase project set up with Firestore, Authentication, and Storage enabled

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/edu-hub.git
    cd edu-hub
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Configuration

1. Set up your Firebase project:
    - Go to the Firebase Console and create a new project.
    - Enable Firestore, Authentication, and Storage.

2. Create a `.env` file in the root directory and add your Firebase configuration:
    ```env
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    ```

## Usage

1. Start the development server:
    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Navigation

### Navbar

The navigation bar provides quick access to different sections of the application. Depending on whether a user is logged in, the navigation options will vary.

- Home
- About (visible when not logged in)
- Contact (visible when not logged in)
- Scholarships
- Workshops
- Mentorship Programs
- Profile
- Login (visible when not logged in)
- Sign Up (visible when not logged in)
- Log Out (visible when logged in)

### Mobile Navigation

On mobile devices, the navigation bar is responsive and provides an easy-to-use interface with a toggle menu. The links are centered and spaced out for better readability.

## Profile Management

### Viewing Profile

Users can view their profile, including their name, email, and profile picture. The profile page also displays the user's applications for scholarships, workshops, and mentorship programs with charts visualizing their application status.

### Editing Profile

Users can edit their profile information and update their profile picture by clicking the "Edit Profile" button. The updated information will be saved in Firebase Firestore.

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin my-feature-branch`.
5. Create a pull request.

## License

This project is licensed under the MIT License.
