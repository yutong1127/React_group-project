# Pink Pandas
- @ Jant Chan
- @ Zhiyan Hu
- @ Han Li
- @ Jiewen Li
- @ Jingyi You
- @ Kevin Zheng
# Patient List Manager - A Collaborative Working Flow Web Application in Health Service

Patient List Manager is an online collaborative web application in the field of digital health helping to improve the experiences of daily workflows for healthcare staff working in hospital. 

# 1.  Run Patient List Locally 
### **Environment**
- DB connection URL = mongodb://127.0.0.1:27017/project

### **Install dependencies**
- Open terminal from frontend
```bash
  npm install
```
- Open terminal from backend
```bash
  npm install
```

### **Start the server**
***Option A. Development Environment***
- Open terminal from backend
```bash
  npm run init-db
  npm start
```
- Open terminal from frontend
```bash
  npx tinylicious
```
- Open another terminal from frontend
```bash
  npm run dev
```

***Option B. Production Environment***
- Open terminal from frontend
```bash
  npm run init-db
  npm run build
```
- Open terminal from frontend
```bash
  npx tinylicious
```
- Open another terminal from backend
```bash
  npm run production
```

**Note: If you restart the tinylicious, you have to re-initialize the database again by running npm run init-db**

# 2. Login Information: User email, password and User Type

| Email     | Password | User Type               |
| :-------- | :------- | :------------------------- |
| `jant.chan@aucklanduni.ac.nz` | `abc123` | User |
| `jiewen.li@aucklanduni.ac.nz` | `abc123` | Admin |
| `olivia.li@aucklanduni.ac.nz` | `abc123` | User |
| `jingyi.you@aucklanduni.ac.nz` | `abc123` | User|
| `kevin.zheng@aucklanduni.ac.nz`| `abc123` | Supervisor |
| `zhiyan.hu@aucklanduni.ac.nz` | `abc123` | User |
| `andrew.meads@aucklanduni.ac.nz` | `abc123` | Supervisor |
| `tyne.crow@aucklanduni.ac.nz` | `abc123` | User |
| `vita.tsai@aucklanduni.ac.nz` | `abc123` | User |
| `dee.miles@aucklanduni.ac.nz` | `abc123` | User |
| `robyn.young@aucklanduni.ac.nz` | `abc123` | User |

- User: clinicians in the different teams
- Supervisor: resposible clinician for the team
- Admin: Administrator for the system who is able to view all team information 

# 3. Features and Pages 
## Login Page
<img width="1019" alt="Login Page" src="https://github.com/UOA-CS732-SE750-Students-2023/project-group-pink-pandas/assets/109643265/d8ecc2db-287c-4f1a-8bed-e4c8a4378476">

Users are able to log in to their account using their email address and password. 

The successfully logged-in users will be redirected to the Patient List Page (Homepage). The plain password will be hashed to store in the database, there will be no plain password showing in the database.

## Patient List Page
After logging in, the users will have a page containing three views which are Overview, Outstanding Tasks, and Add Patient respectively.

### Overview 
![Combined Overview](https://github.com/UOA-CS732-SE750-Students-2023/project-group-pink-pandas/assets/109643265/cae4e753-8310-4794-bbf2-d565f2324f8c)

The Overview Page contains every patient in the team with patient information, tasks with the progress associated with each patient, and a real-time collaborative text area for each patient card for sharing messages among users. The shared text area allows users to edit the text field while collaborating with other users in real-time which is a simple version of Google Docs.

Users are able to add different tasks for different patients in the team and modify the progress for each showing task if needed. Once there is a new task added to the team that the users belong to, every member of the team will receive a message showing the task type and the patient that is needed for the task.

### Outstanding Tasks 
![Outstanding Combined](https://github.com/UOA-CS732-SE750-Students-2023/project-group-pink-pandas/assets/109643265/f8209179-44ee-49a4-9fb6-8d97e47e91c5)

The Outstanding Tasks Page lists all the outstanding tasks within the team in a table. Every member of the team is able to claim and delete the task(s), and also mark the task(s) as done.


### Add Patient 
<img width="1019" alt="AddPatient Page" src="https://github.com/UOA-CS732-SE750-Students-2023/project-group-pink-pandas/assets/109643265/3010ad28-97fa-42b8-868a-3916ff38fcb6">

A view can add patients for users. Once there is a new patient added to the team that the users belong to, every member of the team will receive a message showing they have a new patient with the patient name and date/time added. 

## Patient Details Page

<img width="1007" alt="Transfer Patient" src="https://github.com/UOA-CS732-SE750-Students-2023/project-group-pink-pandas/assets/109643265/d1302dbd-6848-49b5-bd99-cbb94077acb8">

The page contains the particular patient information and tasks associated with the patient.
Users could be navigated to this page from either the patient list, the patient section on the team page, or the notification center.
The users can transfer the patient from their current team to a new team by selecting the supervisor of the team.

Once the patient has been transferred to another team, the current team members will receive the message showing the patient has been transferred, and the new team to which the patient has been transferred to will get the message showing the new patient's name with the name and date added.

## User Profile Page
![User Profile Combined](https://github.com/UOA-CS732-SE750-Students-2023/project-group-pink-pandas/assets/109643265/a97f66b7-c02a-4660-90dc-94449a64de3b)

Users are able to browse their own personal information and the tasks done in the past 7 days displayed in the bar chart with the task types specified. If needed, the user can also edit the personal information including name, phone number, and email address, and change the password.

## Team Page
![Team Combined](https://github.com/UOA-CS732-SE750-Students-2023/project-group-pink-pandas/assets/109643265/46720245-b298-4056-8f8b-ab82142f5585)


If the logged-in users are ordinary users, they will be able to browse their own team patients, team details which contain every member of their team, team performance in the last 7 days, and user contribution in the number of completed tasks.  Or, if the logged-in user is an admin, all team information will be provided and the admin can switch between the team's page using tabs. 

## Notification Page
<img width="1210" alt="Notification Page" src="https://github.com/UOA-CS732-SE750-Students-2023/project-group-pink-pandas/assets/109643265/2cae4697-ddc8-4fe2-a20b-c80e22f3501a">

If users click the notification page tab or check the unread message from the top side bar, they will be navigated to this page.
The message center of the user lists all the notifications received in the past for the logged-in user. The list can be sorted by time created, patient name, message type, and unread first. The user will be navigated to the patient detail page after clicking the view button for the message. The user is able to delete the notification. 


