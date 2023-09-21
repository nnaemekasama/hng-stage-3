# React + Vite

Follow these steps to set up and run the Galleria application locally.

<!-- Prerequisites -->
Before you begin, ensure you have the following software installed:
Node.js
npm or Yarn
Firebase project with Firebase Authentication enabled (Email and Password)

<!-- Installation -->
Clone the repository
Install dependencies:
npm install
Configure environment variables:

Create a .env.local file in the project root and add the following variables:

VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_PROJECT_ID=your_firebase_project_id
VITE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_APP_ID=your_firebase_app_id



Run the development server:

npm run dev

Usage
The app provides a sign-in form, sign up form for new users, and protect routes that require authentication. 

Authentication
Local Email/Password Authentication
Use the sign-up form to create a new account with your email and password.
Use the sign-in form to log in with your email and password.


License
This project is licensed under the MIT License.

