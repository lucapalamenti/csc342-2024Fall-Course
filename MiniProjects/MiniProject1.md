# Mini Project 1: Static Websites

For this assignment you will explore the fundamentals of HTML and CSS.

**The assignment is due Friday, September 6th, before midnight**.

---

## Part 1: Static Newspaper Landing Page

Create a static landing page for a hypothetical (but professional) newspaper's website with a focus on layout and composition. These pages typically contain a header with navigation, some prominent articles with images, and links to less prominent articles, advertisements, weather widgets, stocks, and other content.

Your webpage must meet the following constraints:

* You will have a single HTML file called `landing.html`.
* Include at least 3 images (but as many as you want)
* Include at least 3 links (but as many as you want)
  * At least one must be triggered when clicking an image.
  * At least one must open the target in a new tab/window.
* All your CSS must be in a separate file (or files) inside folder called `css`. No embedded or inline CSS.
* You must use at least one CSS font from [fonts.google.com](https://fonts.google.com). No other external CSS is allowed (no frameworks or external libraries).
* No JavaScript.
* Your page must use both flexbox and CSS grid.
* References to your resources (images, CSS, etc.) must all use relative paths.

It is expected that your newspaper webpage will appropriately use semantic tags such as `header`, `menu`, `main`, `article`, `figure`, `nav`, and so on. The specific tags you will use will depend on your content and structure.

---

## Part 2: Everyone Loves Aesthetics

We are providing the HTML and image resources of a dashboard that you must style with your own CSS. These files are available in the [MP1P2 folder](MP1P2). There are HTML comments in the provided `dashboard.html` file intended to make the structure and intent behind this HTML easier to understand.

You are invited to be creative with your styling. We want to see dashboards that are aesthetically pleasing, easy to read, and have a professional, polished look.

This part of the assignment must meet the following constraints:

* You will have a single HTML file called `dashboard.html` (provided).
* All your CSS must be in a separate file (or files) inside folder called `css`. No embedded or inline CSS.
* You must use flexbox and/or CSS grid as appropriate. Identify appropriate locations to apply these as you see fit.
* No CSS frameworks or libraries are allowed.
* No JavaScript
* You can only modify the HTML document `dashboard.html` to:
  * Link to your own CSS file(s) using relative paths.
  * Add `class` or `id` attributes to HTML elements as needed.

There are no restrictions on the CSS rules you can use. You are encouraged to read the [CSS documentation](https://developer.mozilla.org/en-US/docs/Web/CSS) and experiment.

---

## Part 3: Screencast

Create a short (~5 min but no longer than 10 min; no minimum) screencast with the following content:

1. A brief demo of your newspaper landing page highlighting interesting HTML structure decisions and CSS styling decisions you made. Show that your implementation meets the requirements of the assignment. You can show your code in either VS Code or GitHub.
2. A brief walkthrough of your styled dashboard. In addition to showing that your dashboard styling meets the requirements, describe interesting styling choices you made and why you made them. You can also comment on any struggles you encountered and how you resolved them.

Don't forget to commit and push your changes before starting your screencast!

For guidelines, software, and recommendations see [Screencasts](../HowTo/Screencasts.md).

---

## Submission

You will submit Parts 1 and 2 via your individual GitHub repository (portfolio) by storing all files inside a the `MiniProject1` folder. This folder will be structured as follows:

```
📦MiniProject1
 ┣ 📂Part1
 ┃ ┣ 📂css
 ┃ ┃ ┗ 📜your CSS file(s) here
 ┃ ┗ 📜landing.html
 ┣ 📂Part2
 ┃ ┣ 📂css
 ┃ ┃ ┗ 📜your CSS file(s) here
 ┃ ┣ 📂images
 ┃ ┃ ┣ 📜bar-chart.png
 ┃ ┃ ┣ 📜face.jpg
 ┃ ┃ ┣ 📜face2.jpg
 ┃ ┃ ┣ 📜face3.jpg
 ┃ ┃ ┣ 📜face4.jpg
 ┃ ┃ ┣ 📜impressions.png
 ┃ ┃ ┣ 📜logo.svg
 ┃ ┃ ┣ 📜map.png
 ┃ ┃ ┣ 📜order-stats.png
 ┃ ┃ ┗ 📜traffic.png
 ┃ ┗ 📜dashboard.html
 ┗ 📜README.md
```

Your screencast will be submitted via Moodle.

In your `README.md` file, add links to both the `landing.html` file and the `dashboard.html` file. You can also use the `README.md` file to record some personal notes or observations about this assignment if you wish.

Make sure you commit and push your changes before the deadline! You can verify you have done this by navigating to GitHub's web interface and inspecting the state of your repository there.

**The assignment is due Friday, September 6th, before midnight**.
