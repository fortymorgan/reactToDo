# To-do list

This app allows to keep all your tasks in one place.

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
Click on the checkbox to the left of the new task field.

## Built with
- [React](https://github.com/facebook/react) - web framework
- [Redux](https://github.com/reduxjs/redux) - app state container
- [Firebase](https://firebase.google.com) - authorization and database
