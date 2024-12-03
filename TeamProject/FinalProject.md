# Group Project: Final Project

To finish up your project, in addition to completely implement your features, you will leverage service workers, the cache API, and web manifest to create an installable app that provides offline functionality.

**The assignment is due Friday, November 29th, before midnight.**

---

## Part 1: Finishing Up Your Core Features

The first step to complete your project is to make sure you have all your functionality implemented. All API routes must be completely implemented with proper authentication and authorization. All your pages must also be implemented.

Your final project should be stored in the `Final` folder in your team repository.

---

## Part 2: Offline Functionality

Your app should work offline. For this final deliverable, you will implement a service worker that uses the Cache API to provide offline capabilities to your app. Your app should have some offline functionality, and any functionality it cannot provide should be gracefully communicated to the user. This can take the form of a page that lets the user know they need to come back when online. The actual behavior will depend on the nature of your app, but you should aim for your project to be as functional as possible while the user has no connectivity.

### Bonus

One way for your final project submission to exceed expectations is to also include a working implementation of persistent storage of JSON data returned by your REST API in the browser's [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB) database. This is the preferred way to store records coming from your API (as opposed to storing API requests in the Cache) since it allows you to query one or multiple records at a time, as needed by your app. This is also where you can store data created by the user while offline, so that it can be sent to the server when the user is back online.

---

## Part 3: Make Your PWA Installable

You will make your PWA installable by adding a manifest with appropriate icons and resources, splash screen, and other theming details as discussed in class. "Add to Home Screen" (A2HS) functionality should be available for supported browsers. See [https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Add_to_home_screen](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Add_to_home_screen)

---

## Part 4: Deploying and Testing Your App

Your app should be deployed to your VM and accessed via its publicly accessible URL. You can then load your app on a mobile device to test the PWA installability. This should also work on your desktop browser where you can use the "Add to Home Screen" functionality to install your app. You can then turn off your network connection to test your offline functionality.

---

## Part 5: Final Project Report

This submission's `README.md` file will document your final product. In addition to your project title and team members, you should include ***at least*** the following information:

* **Progress Report:** What works (description of your features) and what doesn't work (any known issues)
* **Authentication & Authorization:** A brief description of your authentication and authorization processes. What techniques are you using? What data is being stored where and how? How are you making sure users only access what they are allowed to?
* **PWA Capabilities:**
  * A list of all the pages in your app, how to navigate them, and the offline functionality they provide, if any
  * A description of your caching strategy and why you chose it
* **API Documentation:** A list of all API endpoints with a description of their behavior. If you made changes since the previous milestone, make sure you update this table.
* **Database ER Diagram:** An ER diagram of your final database schema
* **Team Member Contributions:** Detailed individual team member contributions, **including a recap of what each team member did for each milestone**.


To report a list of API endpoints and their behavior (inputs and outputs), you might find it useful to use a markdown table, such as the following:

Method | Route                 | Description
------ | --------------------- | ---------
`POST` | `/login`              | Receives an email and password
`POST` | `/register`           | Creates a new user account and returns the new user object
`GET`  | `/users`              | Retrieves an array of all active users in the system
`GET`  | `/users/:userId`      | Retrieves a user by its Id


### Team Member Contributions

The last section of your README.md should describe the individual contributions of each team member to this milestone in the form of a brief summary of the work done for this milestone. You will also include a table that shows the percentage of work contributed by each team member to each previous milestone of the project (as reported on previous milestones' README.md files--just copy those percentages here), individual percentages for this final milestone (after Milestone 2), and a total as the sum of these percentages for each team member. Remember that milestone percentages should be based on the work done and not on the time spent. The sum of the percentages for all team members should be 100% for each milestone (row), but the totals for an individual team member do not need to add to 100% (column).

To standardize the presentation of this information, use the following template:

```markdown
### Team Member Contributions

#### [Name of Team Member 1]

* Contribution 1
* Contribution 2
* ...

#### [Name of Team Member 2]

* Contribution 1
* Contribution 2
* ...

#### [Name of Team Member 3]

* Contribution 1
* Contribution 2
* ...

#### Project Effort Contribution

Milestone   | Team Member 1 | Team Member 2 | Team Member 3
----------- | ------------- | ------------- | --------------
Proposal    | A%            | B%            | C%
Milestone 1 | D%            | E%            | F%
Milestone 2 | M%            | N%            | O%
Final       | X%            | Y%            | Z%
----------- | ------------- | ------------- | --------------
TOTAL:      | (A+D+M+X)%    | (B+E+N+Y)%    | (C+F+O+Z)%

```


---

## Part 6: Screencast (Final Project Presentation)

Create a succinct (~10 min but no longer than 15 min; no minimum) screencast describing and demonstrating your project. You can prepare slides for portions of your presentation if you think it can help organize your content and optimize time. Include a demo of your latest running code in your VM. Make sure you demonstrate all the features of your app, including offline functionality and installability. Discuss and show interesting pieces of implementation (code) either on your repository or your code editor. Don't forget to talk about your individual team member contributions **in detail**. Report out on any incomplete or missing functionality and what it would take to implement it.

A suggested outline is as follows:

* Introduction
  * Project name, your names, and group name
  * Target audience (who are your users?)
  * Intended purpose (what problem does your app solve?)
* Functional description
  * Demonstrate the features of your app running on your VM (remember to use the public hostname)
  * Show PWA features (e.g. mobile-first, installable, offline, etc.). Say why offline functionality is useful for your app.
  * Discuss interesting aspects like technologies or extra features you implemented and how you implemented them.
* Individual contributions

---

## Submission

Your implementation for this milestone will be submitted via your group GitHub repository in the `Final` folder. Don't forget to update the `README.md` file inside the `Final` folder and to update your project's table of contents in the main `README.md` file.

Your screencast will be submitted via Moodle. Only one team member needs to submit on behalf of the whole team, but all team members are expected to be in the recording.

Make sure you commit and push your changes before the deadline! You can verify you have done this by navigating to GitHub's web interface and inspecting the state of your repository there. Make sure that your final code is merged into your main or master branch and delete branches that are no longer needed.

**The assignment is due Friday, November 29th, before midnight.**