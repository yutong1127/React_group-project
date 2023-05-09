# project-group-pink-pandas

# TO START FRONTEND RUNNING
- Open terminal from frontend

`npm install`

`npm install react-hook-form`

`npm install @mui/x-date-pickers`

`npm install dayjs`

`npm install tinylicious`

`npm run dev`
- Open second terminal from frontend

`npx tinylicious`

# TO START BACKEND RUNNING
- Open terminal from backend

`npm install`

`npm run init-db`

`npm start`
- DB connection URL = mongodb://127.0.0.1:27017/project

# UPDATE HARD CODED REQUEST URLS
Appcontext provider ln 44, 131 with userID
Addpatient ln22 with userID



# Patient List Manager - A Collaborative Working Flow Web Application

Patient List Manager is an online collaborative web application in the field of digital health helping to improve the experiences of daily workflows for healthcare staff working in hospital. 

### Login Page
Users are able to log in to their account using their email address and password. The successfully logged in users will be redircted to the Patieng List Page.

### Patient List Page
After login, the users will have a view of their own team patients list which contains an overview of every patient in the team with patient information tasks associated and a real-time collaborative text area, a view of the outstanding tasks within the team, and a view for adding patients for their own team. 

### Team Page
If the logged-in users are ordinary users, they will be able to browse their own team patients, team details which contain every member of their team, team performance in the last 7 days, and user contribution in the number of completed tasks.  Or, if the logged-in user is an admin, every team's information will be provided and the admin can switch the team's page using tabs. 

