Installation
To install this project, follow these steps:

Clone the repository to your local machine.
Navigate to the project directory.
Run npm install to install the project dependencies.
Run npm start to start the development server.
Usage
To use this project, follow these steps:

Open your web browser and navigate to http://localhost:3000.
Click on the “Login” link in the navigation bar.
Enter your login credentials and click “Submit”.
If your credentials are valid, you will be redirected to the appropriate dashboard based on your user role.
Dependencies
This project uses the following dependencies:

React
React Router
PrivateRoute

Path Description
The following table describes each path in the code:

Path	Description
/login	Renders a login form for users to enter their credentials
/user	Renders a dashboard with user-specific information
/editor	Renders a dashboard with editor-specific information
/admin	Renders a dashboard with admin-specific information
Each of these paths is associated with a specific component that is rendered when the path is matched by React Router.
