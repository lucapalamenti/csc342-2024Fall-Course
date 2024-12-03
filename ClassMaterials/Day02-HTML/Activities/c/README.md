

# Activity D02.c: Link Targets

In this activity, you will explore different ways to use the `target` attribute in anchor (`<a>`) tags to control where the linked document will open.

## Activity Resources

1. [&lt;a&gt; HTML Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) documentation on MDN
2. [&lt;iframe&gt; HTML Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) documentation on MDN
3. Assets
   * [Starter HTML](files/index.html)

## Task: Explore Link Targets

 You will create an HTML page that includes various types of links with different target behaviors.

* You will create links that open in the same tab, a new tab, an iframe, and different parts of the same page.

The HTML code should include the following:

1. A title for the page as the document's title
2. A navigation bar with links that use different target attributes
3. An iframe that displays content from another page
4. Links that target the iframe
5. Links that open in a new tab
6. Links that navigate to different sections within the same page
7. Appropriate use of the `target` attribute for all links

### Steps

1. Create a new folder in your repository's Scratch Pad under today's folder for this activity.
2. Create an empty HTML page and name it `index.html` in this folder.
3. Initialize the HTML structure with Emmet.
4. As the first element in the `body`, add a heading with a title of your page. Add an `id="top"` attribute to the heading to use as an anchor tag later.
5. Create a navigation bar at the top of your page with links using different `target` attributes. You can point each of these to `https://example.com`.
   * A link that opens in the same tab (default behavior)
   * A link that opens in a new tab using `target="_blank"`
   * A link that opens in an iframe using `target="iframe-name"`
6. Add an iframe below the navigation bar and name it `iframe-name`. Make sure it displays a border and make it large enough to see the contents easily.
5. Add a section below the iframe with a level 2 heading and populate it with any title you want. Then add a bunch of paragraphs for content under this heading. You can generate content from [lipsum.com](https://lipsum.com).
7. Add another link at the end of the page that scrolls all the way to the top via `href="#top"`.
8. Make sure to validate your HTML using the [W3C Markup Validation Service](https://validator.w3.org/).
