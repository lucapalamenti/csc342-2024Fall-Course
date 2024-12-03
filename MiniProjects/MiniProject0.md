# Mini Project 0: Course Setup

This assignment will help you with initial setup for the course.

**The assignment is due Friday, August 23rd, before midnight**.

---

## Part 1: Discord

First, make sure you have a [Discord](https://discord.com/) account. Installing the Discord app (desktop and mobile) is recommended, but you can also use the web version.

Join the class's Discord server by following the prompts in the [Class Portal](https://go.ncsu.edu/csc342-site) and make a brief introduction of yourself in #introductions. This will help your classmates and teaching staff get to know you better, but also help with identifying potential teammates for the team project.

Your post must include:

  * Your full name (preferred name is okay), and optionally your preferred pronouns
  * Any web development experience/background you have
  * A brief statement on what you are looking to get out of the course

---

## Part 2: Initial Tooling Setup


* Install [Git](https://git-scm.com/) (if you don't have it already)
  * Make sure Git is configured with your name and NCSU email:
  ```sh
  git config --global user.name "FirstName LastName"
  git config --global user.email unityid@ncsu.edu
  ```
  * Optional: Complete all levels in https://learngitbranching.js.org/
* Install [NodeJS](https://nodejs.org/en/)
  * If you already have NodeJS installed, make sure it is at least the latest LTS version.
  * You may want to add it to your path and install the dev extensions if prompted.

* Install [Docker Desktop](https://docs.docker.com/get-docker/)
  * If you are using Windows:
    1. Make sure you have WSL 2 installed. Open PowerShell or Windows Command Prompt as an administrator and type `wsl --install`. This will either install WSL or tell you that it is already installed.
    2. Make sure you [enable WSL 2 during installation](https://docs.docker.com/desktop/windows/wsl/).
* Install [Visual Studio Code](https://code.visualstudio.com/)
  * Install the [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) extension
  * Install the [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) extension pack
  * Optional Extensions:
    * Install the [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) extension
    * Install the [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) extension

---

## Part 3: Setting Up Class Resources

In a location of your choice in your local machine, create a folder called `CSC342` where you will store all the repositories you will be using this semester. 

### 3.1 Class Repository

The class repository will be used to distribute assignments, class activities, project requirements, and other course materials. You will clone this repository to your local machine.

1. Sign into [NCSU's GitHub](https://github.ncsu.edu/engr-csc342) and make sure you can find the CSC 342 [class repository](https://github.ncsu.edu/engr-csc342/2024Fall-Course.git).
1. Clone this repository in the `CSC342` folder you just created

You only have read-only access to this repository, but you will need to pull changes regularly to keep up with the course.


### 3.1 Individual Repository: Your Portfolio

We have created and initialized a GitHub repository for you to use as your individual portfolio for this class. Your portfolio will not only store a collection of your individual work this semester, but it will also be the way you submit all individual assignments.

Your individual repository's URL will have the following form:

```
https://github.ncsu.edu/engr-csc342/csc342-2024Fall-{unityId}
```

1. Sign into [NCSU's GitHub](https://github.ncsu.edu/) and make sure you can find your CSC 342 repository.
2. Clone your repository the `CSC342` folder and open the folder in VS Code.
3. Edit the `README.md` and `Portfolio.md` files in the root of your repository to replace the placeholders with your name and Unity Id.

You are encouraged to refer to the [Basic Markdown formatting on GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) for additional reference on the Markdown syntax.

---

## Part 4: Initial Thoughts on Ungrading

Inside the `MiniProject0` folder, edit the `README.md` file. Append the following starter Markdown content to this file and fill it out by *briefly* answering the questions

```markdown
## 1. What are your thoughts on the Ungrading practice as it applies in general to teaching and learning (not necessarily specifically to this class)?

Your thoughts here...

## 2. What are your thoughts on the way Ungrading will be applied to this class based on what has been explained by your instructor and what is described in the syllabus?

Your thoughts here...

## 3. On a scale from 1 to 5, how confident are you that you can earn an A in this class (1 is lowest, 5 is highest)?

Provide number here...
```

---

## Part 5: Screencast Practice

Create a short (< 5min; no minimum) screencast with the following content:

1. Show that you made the required edits in your repository on both your local machine (VS Code) and how it looks on GitHub. Don't forget to commit and push your changes before starting your screencast!
2. When you get to showing the contents of Part 4, give a brief summary of your responses on your thoughts on ungrading.
3. Show that you joined the class Discord server and made a brief introduction of yourself in #introductions.

For guidelines, software, and recommendations see [Screencasts](../HowTo/Screencasts.md).

---

## Submission

* Part 1 is completed on Discord and Part 2 is completed on your local machine, so no submissions are required for those.
* Parts 3 and 4 will be submitted via GitHub. Make sure you commit and push your changes. You can verify you have done this by navigating to GitHub's web interface and inspecting the state of your repository there.
* Part 5 must be submitted via this assignment's Moodle quiz.


**The assignment is due Friday, August 23rd, before midnight**.