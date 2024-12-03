# Group Project: Milestone 2

For this milestone of your project, you will implement most of the functionality of your project, including authentication and a database.

**The assignment is due Friday, November 15th, before midnight.**

---

## Part 1: Filesystem Updates

The first step is to update your file structure. Create a `Milestone2` folder in your repository as described below. You should initialize this folder with your latest version from Milestone 1 but do notice the new files and folders you need to add.

```
📦csc342-2024Fall-Team{LETTER}
 ┣ 📂Milestone2
 ┃ ┣ 📂api
 ┃ ┣ 📂database
 ┃ ┃ ┣ 📂data
 ┃ ┃ ┗ 📂db_schema
 ┃ ┣ 📂frontend
 ┃ ┣ 📂proxy
 ┃ ┣ 📜.env
 ┃ ┣ 📜.gitignore
 ┃ ┣ 📜compose.yml
 ┃ ┗ 📜README.md
 ┗ ...
```

Notice that you now will have a file called `.env` in the root of your project. This file will store environment variables, including database credentials, and should be excluded from version control (**add it to your `.gitignore`**). More information about the contents of the `.env` file can be found below.

The `database/db_schema` folder will contain SQL files (`*.sql`) used to initialize your database schema. This includes SQL statements to create your database tables, but also any inserts of initial data your system needs to operate. The `database/data` folder will store internal database files used to preserve your database when you recreate your database container. We don't want to commit those files, so you'll need to add that folder to your `.gitignore`. This means your `.gitignore` file should have:

```gitignore
database/data/
.env
node_modules
```

Remember to commit your `.gitignore` file!

---

## Part 2: User Authentication

Implement user authentication and authorization into your project. This includes at least the following features

* Ability for the user to create an account with a username and password
* Ability for the user to log into their account
* Ability for the user to log out
* Proper access control. Unauthorized users should not be able to see private portions of your app or data private to other users.

Remember to follow best practices (e.g., store salted hashed passwords). Your API should follow REST principles, so server-side sessions cannot be used.

If you use a secret key to implement authentication, store this key as an environment variable in your `.env` file. Something like:

```ini
API_SECRET_KEY=your_secret_key_here
```

---

## Part 3: A More Functional Back-end

For this milestone, your API should return dynamic data instead of mock or static data for the majority of your endpoints (at least 90%). The data should come from your database and new data should be persisted in the database.

Make sure your API code can read the environment variables specified in your `.env` file by adding an `env_file` entry to your existing API service in your `compose.yml` file as follows:

```yaml
  api:
    build: ./api
    restart: unless-stopped
    volumes:
      - ./api/src:/app/src
    environment:
      - PORT=80
    env_file: # this is new
      - .env # this is new
```


### Database

For this milestone you will add a relational database to your project. To standardize this process for everyone, we'll be using [MariaDB](https://mariadb.org/) as our DBMS for this project.

Add a new Docker container to your project's stack to host your database. To do this, add the following service to your `compose.yml` file:

```yaml
  database:
    image: mariadb:10.6
    restart: unless-stopped
    ports:
      # Make the DB accessible from outside of the Docker network if needed
      - 3307:3306
    volumes:
      # Mount a volume for mariadb's persistent files for lifecylce outside of stack
      - "./database/data:/var/lib/mysql"
      # Mount the db_schema directory into the container to be auto-read and created in the new db
      - "./database/db_schema:/docker-entrypoint-initdb.d"
    env_file:
      - .env
```

Notice that this container also reads from the `.env` file. We'll be using this file to also store database connection parameters and share these across our database container and our API container. You need to add the following entries to this file (and modify as appropriate):

```ini
MYSQL_ROOT_PASSWORD=your_root_password_here
MYSQL_DATABASE=your_schema_name_here
MYSQL_USER=your_app_db_user_here
MYSQL_PASSWORD=your_app_db_password_here

DB_ENGINE=mysql
DB_HOST=database # This must match the name of the database service in your compose.yml file
DB_PORT=3306
DB_CHARSET=utf8mb4
```

**You are asked to design the schema of your project's database. A schema is a description of your database structure: tables, table attributes and their types, relationships between tables through attributes, and so on.**

You are not allowed to use an ORM (object-relational mapper) library for your project.

---

## Part 4: A Dynamic Front-end

As of the previous milestone, you should have ***at least*** 50% of all your pages implemented. For this milestone you will increase this to ***at least*** 80% of all your pages implemented, but more is preferred. Additionally, your implemented pages should now properly interact with your API to send and receive data as appropriate. Mock or static data on your front-end should be minimal at this point and instead data should come from your API.

---

## Part 5: Milestone Report

This milestone's `README.md` file should be updated to include a report of your progress. In addition to your project title and team members, you should include ***at least*** the following information:

* What is done
* What is not done
* A brief description of your authentication and authorization processes. What techniques are you using? What data is being stored where and how? How are you making sure users only access what they are allowed to?
* A list of all the pages in your app and their status
* Links to wireframes for the pages that are not yet complete (you can embed them if you want; linking is enough this time)
* A list of all API endpoints with a description of their behavior. If you made changes since the previous milestone, make sure you update this table.
* An ER diagram of your database schema.
* Individual team member contributions

To report a list of pages and their status, you might find it useful to use a markdown table, such as the one below. Include a wireframe for any pages that have not been fully implemented yet.

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

## Part 6: Screencast

Create a short (~5 min but no longer than 10 min; no minimum) screencast describing your progress in the implementation of both your API and your frontend so far. Show user account creation and login. Demonstrate how your frontend renders data dynamically from the API. In addition to showing your submission meets the requirements for this milestone, you should show representative code examples in your recording explaining non-trivial design decisions. Provide a brief report on the status of your implementation and what is still pending to implement.

---

## Submission

Your implementation for this milestone will be submitted via your group GitHub repository in the structure described above. You will also need to deploy your project to your group VM. Don't forget to update the `README.md` file inside the `Milestone2` folder and to update your project's table of contents in the main `README.md` file.

Your screencast will be submitted via Moodle. Only one team member needs to submit on behalf of the whole team.

Make sure you commit and push your changes before the deadline! You can verify you have done this by navigating to GitHub's web interface and inspecting the state of your repository there.


**The assignment is due Friday, November 15th, before midnight.**
