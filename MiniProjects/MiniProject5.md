# Mini Project 5: Authentication With JWT

For this assignment you will implement a simple authenticated client-side rendered website with a small frontend and a backend where you will implement algorithms to create, parse, and validate simple JWTs.

**The assignment is due Friday, November 8th, before midnight.**

---

## Part 1: Frontend

This will be a very simple app with just 2 pages: a home page and a login page. The home page should only be accessible if the user is authenticated and can contain any content you want. The only constraints are:

* The frontend will display information about the logged-in user. This can be just the username and/or the first and last names of the user.
* The frontend will include a way for the user to log out.

If the user is not authenticated, attempting to load the home page should redirect the user to the login page. The login page should allow the user to enter a username and a password to log into the system. If the user is successfully logged in, the system should redirect the user to the home page. If the username and password combination is invalid, the login page will display an error.

You are allowed to use Bootstrap or another CSS framework on your frontend if you want, but you cannot use any JavaScript libraries.

### Bonus

You are encouraged to extend and improve upon your Howler implementation from the previous Mini Project. In this case, all pages except for the login page should be protected behind authentication.

---

## Part 2: Backend

Instead of sessions, your app will use JSON Web Tokens for authentication. When the user logs in, you will create a JWT and store it in a secure HTTP-only cookie. Your backend must consist of a REST API that implements at least the following endpoints:

Method | Route                 | Description
------ | --------------------- | ---------
`POST` | `/login`              | Receives an email and password and sets a JWT in a cookie
`POST` | `/logout`             | Clears the cookie with the JWT
`GET`  | `/users/current`      | Retrieves the currently authenticated user (from the JWT)

Your backend can store users statically (e.g., in a `users.json` file) as we have done in lectures so far. Remember to add fields for the user salt and hashed password. A user record can look like this:

```json
{
  "id": 1,
  "first_name": "Stu",
  "last_name": "Dent",
  "username": "student",
  "avatar": "https://robohash.org/veniamdoloresenim.png?size=64x64&set=set1",
  "salt": "48c8947f69c054a5caa934674ce8881d02bb18fb59d5a63eeaddff735b0e9",
  "password": "83d9bdb5e20f3571b087db9aabf190a296741c3e864d7742f35658cfccc1b79c4599aad25084aa9a28c649a50c92244227b3e53e197621301d619d1ea01873c4"
  }
```

A handful of users should be enough to demonstrate that your system works as expected.

### Creating and Validating JWTs

You are not allowed to use any JWT libraries. Instead, you must implement your own JWT algorithms. Your payload should include the `exp` registered claim and a claim to store a sanitized user object (excludes salt and hashed password).

Remember that JWTs rely on Base64URL encoding of the header, the payload, and the signature of your JWT. Recall that the JWT signature is computed as shown in the following pseudocode (assuming SHA-256 is used as hashing algorithm):

```
HS256(
  Base64UrlEncode(header) + "." + Base64UrlEncode(payload),
  YOUR_SECRET_KEY
)
```

You can use the [`crypto` package](https://nodejs.org/api/crypto.html) from Node.js to compute an HMAC (see [Class:HMAC](https://nodejs.org/api/crypto.html#class-hmac)). Remember that your JTW header will contain information about the hashing algorithm used and the type of token (JWT).

To protect your endpoints, you will implement a middleware module that will read the token from the cookie in the request and validate it. Two steps are needed for this: 1) validating that the signature of the JWT corresponds to the provided header and payload, and 2) validating that the token is not expired based on the `exp` claim.

To verify that you are creating standards-compliant JTWs, you can use [JWT.io](https://jwt.io/). Additional information on how to produce a compliant JWT can be found [here](https://jwt.io/introduction).


### Bonus

If you are extending Howler, you will have additional endpoints to protect. You are encouraged to add functionality to create new users as well.

---

## Part 3: Deployment on Docker and your VM

You will also deploy your assignment to run on Docker locally and in your virtual machine. To do this, you will need to:

1. Add a Dockerfile in your `MiniProject5` folder to create a Docker image for your Mini Project 5 Node.js app. Remember to install the dependencies of your project and to start your server when the container runs.
2. Add a new entry in your `compose.yml` file to create a container (service) for Mini Project 5 that builds the image from the previous step. Call this service `mp5` to keep it consistent with the previous assignments.
3. Modify your `default.conf.template` file to now also proxy path `/mp5/` to the new container from the previous step. You should also modify this file so that the path `/` is now proxying to Mini Project 5.

---

## Part 4: Screencast

Create a short (~5 min but no longer than 10 min; no minimum) screencast with the following content:

1. A brief demo of your implementation showing that it meets the requirements of the assignment
  * Show your app running off of your VM.
  * Show that your tokens are being stored in a secure and HTTP-only cookie.
  * You can show your tokens being valid in [JWT.io](https://jwt.io/) and how they are stored and used in the dev tools of your browser.
2. A walkthrough of your code in either VS Code or GitHub. Focus on the interesting parts of your JWT implementation.
2. Comment on your implementation, including any struggles you encountered and how you resolved them. For example, you can mention:
   * How is code structured?
   * Is everything working in your solution? If not, what's missing?
   * What, if anything, about your implementation would you change now that you have gone through this experience, and why?

Don't forget to commit and push your changes before starting your screencast!

For guidelines, software, and recommendations see [Screencasts](../HowTo/Screencasts.md).

---

## Submission

You will submit Parts 1 and 2 via your individual GitHub repository (portfolio) by storing all files inside a new `MiniProject5` folder. This folder will be structured as follows:

```
📦MiniProject5
 ┣ 📂static
 ┃ ┗ 📜your static resource(s) here
 ┣ 📂src
 ┃ ┣ 📂data
 ┃ ┃ ┗ 📜users.json
 ┃ ┣ 📜other server files and folders here
 ┃ ┣ 📜routes.js
 ┣ 📂templates
 ┃ ┗ 📜your HTML file(s) here
 ┣ 📜Dockerfile
 ┣ 📜server.js
 ┣ 📜package.json
 ┗ 📜README.md
```

Your folder structure may be a bit different if you are extending Howler.

Your screencast will be submitted via Moodle.

In your `README.md` file, write briefly about:

1. An interesting challenge you encountered when implementing JTW algorithms. What was the issue, and how did you solve it?
2. What security risks/vulnerabilities/weaknesses, if any, are present in your implementation? How can they be exploited, and what are some ways to fix them? Are there any tradeoffs if you implement any of the fixes?

Make sure you commit and push your changes before the deadline! You can verify you have done this by navigating to GitHub's web interface and inspecting the state of your repository there.

**The assignment is due Friday, November 8th, before midnight.**