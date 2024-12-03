# Team Project: Milestone 1

For this milestone of your project, you will begin implementing your project and serve it via Docker from your team virtual machine.

**The assignment is due Friday, October 18th, before midnight.**

---

## Part 1: Understanding and Running The Starter Code

One of the technical constraints of your project is for it to be hosted using [Docker](https://www.docker.com/) on your team virtual machine. To help you get started with your implementation, we are providing starter code for you in the [M1 folder](M1). Your project will have a decoupled frontend and backend. This means your backend will be served from one server and your frontend will be served from a separate server. This helps keep your code clean and tidy, and has other advantages for deployment.

The starter code in [M1 folder](M1) provides 3 initial containers for your project, each in their own folder:

1. The `api` folder contains files to build your project's backend container (REST API).
2. The `frontend` folder contains files to build your project's frontend container.
3. The `proxy` folder contains files to build an [Nginx](https://nginx.org/) [reverse proxy](https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/) that will serve your frontend and backend from a single origin. You are not required to modify this folder. Basically, a reverse proxy provides a single point of access to both your frontend and backend servers. You will be able to just visit [https://csc342-###.csc.ncsu.edu/](https://csc342-###.csc.ncsu.edu/) and [https://csc342-###.csc.ncsu.edu/api](https://csc342-###.csc.ncsu.edu/api) instead of having each of your servers listening on separate ports.

These 3 containers are defined in the `compose.yml` file at the root of your project.

The starter code is only meant for you to use as a template. You are welcome to modify these files to fit the needs of your project.

### Bootstraping Your Project With Starter Code

In your team's repository, you will place the starter code in the folder called `Milestone1`.

```
📦csc342-2024Fall-Team{LETTER}
 ┣ 📂Milestone1
 ┃ ┣ 📂api
 ┃ ┣ 📂frontend
 ┃ ┣ 📂proxy
 ┃ ┣ 📜compose.yml
 ┃ ┗ 📜README.md
 ┗ ...
```

### Running The Starter Code

You can run all 3 containers by opening a terminal and running this command in the root of the project (next to the `compose.yml` file):

```bash
$ docker compose up
```

The first run may take a few minutes while it downloads base images, builds your own images, and creates the containers. Successive runs should be faster. This command will run all 3 containers and will display their running output on the console. You can stop this process and your containers at any time by pressing `CTRL+C`. For deployment in your VM, remember to run this command in detached mode.

Once the containers are running locally, you should be able to open your browser and navigate to [https://localhost/](https://localhost/). On your VM, you should be able to open your browser and navigate to [https://csc342-###.csc.ncsu.edu/](https://csc342-###.csc.ncsu.edu/) (where ### is your team's assigned number). Your frontend will render a message indicating it is running properly with a link to test that your backend is also returning a value as expected.

Remember to mount volumes and rebuild images as appropriate for your folder structure.

---

## Part 2: REST API Sketch

The backend portion of this milestone involves sketching out the endpoints (routes) of your REST API. All the code you write for your backend should be stored in the `api/src` folder and the base URL for your API will be `https://csc342-###.csc.ncsu.edu/api` (or `http://localhost/api` if running locally). The starter code just includes a `server.js` file to help you get started. Note that you will not have to run `npm start` yourselves. This will be run automatically when you start the container.

You will need to follow the following constraints:

* Routes cannot be directly specified in `server.js` (remove/move the one example that is there currently). You are required to use `express.Router()` in JavaScript modules instead.
* Your API cannot return HTML or serve any static resources.
* All responses must be JSON-encoded.
* Follow REST API endpoint design best practices. This means nesting routes appropriately using appropriate route parameters.

You should include all of the endpoints you think you will need to support your project. Don't forget to add endpoints for user authentication and registration.

In addition to your routes, at this stage your endpoints should return at least mock data. This is similar to what we've done in class where we have data hard-coded into a file that we import in JS and send as response payload. As you are mocking and returning these data, think about what your frontend will need to receive to operate properly.

To test your API endpoints more easily, especially requests that expect a body, you are allowed to use tools like [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/).

---

## Part 3: Frontend First Pass

For the frontend portion of this milestone, you will begin to implement your wireframes using a client-side rendering approach. All the code you write for your frontend should be stored in the `frontend/src` folder. You have a lot of flexibility in how you can implement your frontend:

* You are allowed to use a frontend framework, like [React](https://reactjs.org/), [Angular](https://angular.io/), or [Vue](https://vuejs.org/). You don't have to use the provided Express server in these cases.
* You can decide not to use a framework and serve your HTML files statically or behind routes in your frontend (i.e., https://csc342-###.csc.ncsu.edu/about.html vs. https://csc342-###.csc.ncsu.edu/about)
* You are allowed to use a CSS framework, like [Bootstrap](https://getbootstrap.com/), [Material Design](https://material.io/), [Foundation](https://get.foundation/), [Bulma](https://bulma.io/), etc. Keep in mind that these are used differently depending on whether you use a frontend framework or not.
* You are allowed to use JavaScript libraries. Some libraries that satisfy common needs include:
  * [TinyMCE](https://www.tiny.cloud/tinymce/) rich text editor
  * [FullCalendar](https://fullcalendar.io/) for calendar functionality
  * [Ace](https://ace.c9.io/) as a code editor

None of these are requirements, so you are absolutely welcome to implement your frontend with some or none of these. However, using a popular CSS framework like Bootstrap can make it easier for you to support your UI in both mobile and desktop environments.

This milestone requires implementing ***at least*** 50% of all your pages using your chosen technologies. This includes styling and page navigation. Static content is okay for now. However, you may want to start thinking about (if not adding some) interactivity in your pages.

---

## Part 4: Milestone Report

This milestone's `README.md` file should be updated to include a report of your progress and individual contributions. In addition to your project title and team members, you should include ***at least*** the following information:

* What is done
* What is not done
* A list of all the pages your app will have and their implementation status
* Links to wireframes for the pages that are not yet fully complete (you can embed them if you want; linking is enough this time)
* A list of all API endpoints with a description of their behavior
* Individual team member contributions to this milestone

To report a list of pages and their status, you will find it useful to use a markdown table, such as the following:

Pages   | Status | Wireframe
------- | ------ | ---------
Login   | 80%    | [wireframe]()
Profile | ✅     |
Match   | ✅     |
Payment | 0%     | [wireframe]()
Tasks   | ✅     |
Manage  | 10%    | [wireframe]()

To report a list of API endpoints and their behavior (inputs and outputs), you might find it useful to use a markdown table, such as the following:

Method | Route                 | Description
------ | --------------------- | ---------
`POST` | `/login`              | Receives an email and password
`POST` | `/register`           | Creates a new user account and returns the new user object
`GET`  | `/users`              | Retrieves an array of all active users in the system
`GET`  | `/users/:userId`      | Retrieves a user by its Id


### Team Member Contributions

The last section of your README.md should describe the individual contributions of each team member to this milestone in the form of a brief summary of the work done for this milestone. You will also include a table that shows the percentage of work contributed by each team member to the milestone. This percentage should be based on the work done and not on the time spent. The sum of the percentages for all team members should be 100%.

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

#### Milestone Effort Contribution

Team Member 1 | Team Member 2 | Team Member  3
------------- | ------------- | --------------
X%            | Y%            | Z%
```


---

## Part 5: Screencast

Create a short (~5 min but no longer than 10 min; no minimum) screencast describing the implementation of both your API and your frontend so far. Include a demo of your latest running code in your VM. In addition to showing your submission meets the requirements for this milestone, you should show representative code examples in your recording explaining non-trivial design decisions. Provide a brief report on the status of your implementation and what is still pending to implement. Don't forget to include individual team member contributions.

---

## Submission

Your implementation for this milestone will be submitted via your team GitHub repository as described above. A deployed version must be running in your VM. Don't forget to update the `README.md` file inside the `Milestone1` folder and to update your project's table of contents in the main `README.md` file.

Your screencast will be submitted via Moodle. Only one team member needs to submit on behalf of the whole team.

Make sure you commit and push your changes before the deadline! You can verify you have done this by navigating to GitHub's web interface and inspecting the state of your repository there.

**The assignment is due Friday, October 18th, before midnight**.
