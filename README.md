# To-do list

This app allows to keep all your tasks in one place.

Desktop version:  
<img src="https://fastpic.co/images/Screenshot_111b50df3a50b44df3.jpg" alt="Desktop" title="Desktop version" border="0" />

Mobile version:  
<img src="https://fastpic.co/images/Screenshot_12bac158766a1e4f3d.jpg" alt="Mobile" title="Mobile version" border="0" />

## How to install
First you need to install [Firebase CLI](https://firebase.google.com/docs/cli/)
```
npm install -g firebase-tools
```

To run project locally:
```
npm run start
```

## How to deploy
With installed [Firebase CLI](https://firebase.google.com/docs/cli/) run:
```
firebase login
```
and sign in with your Google account.

Then go to [Firebase console](https://console.firebase.google.com), sign in with Google account and create new project.  
Get credentials from "Add Firebase to your web-app" and copy them to `src/app.jsx`.  
Change project name in `.firebaserc`. Then run:
```
npm run deploy
```

## How to use
Go to [app](https://todo-list-84b73.firebaseapp.com/). Requires authorization.

### Add task
Enter a task to the field "New task" and click "Add" or press "Enter". New task will apeear in the list.

### Check task
Click on the checkbox near the task text.

### Delete task
Click on the red cross on the right side of the task.

### Edit task
To start editing, double click on tasks text. To finish editing press "Enter".

### Check all tasks
Click on the checkbox to the left of the new task field. (Doesn't show without tasks)

### Clear finished tasks
Click on "Clear finished" button on the right-bottom of app.

### Filter tasks list
Choose filter option on the bottom of app to show all tasks or only finished, or active.

## Built with
- [React](https://github.com/facebook/react) - web framework
- [Redux](https://github.com/reduxjs/redux) - app state container
- [Firebase](https://firebase.google.com) - authorization and database
