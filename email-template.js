// ! Create a html content for the email

const html_head = `
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        font-family: "Arial", sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
      }

      header {
        background-color: #333;
        color: #fff;
        text-align: center;
        padding: 1em 0;
      }

      section {
        max-width: 800px;
        margin: 2em auto;
        padding: 1em;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      h1,
      h2 {
        color: #333;
      }

      p {
        line-height: 1.6;
      }
    </style>
    <title>Node.js Server Tutorial</title>
  </head>
`

const html_header = `
<header>
  <h1>Creating a Simple Node.js Server</h1>
</header>
`

const html_content_articles = `
<article>
  <h2>💻 Introduction</h2>
  <p>
    Welcome to this tutorial where we will guide you through the process
    of creating a simple server using Node.js.
  </p>
</article>

<article>
  <h2>🐈 Cat Lovers 🐈</h2>
  <p>
    Here are some cute cat images for you before we continue the tutorial:
  </p>
  <div class="image-container">
    <img
      src="https://i.pinimg.com/564x/d4/bb/08/d4bb087e3b76458ed1a02025e8503cdf.jpg"
      alt="flying gato"
    />
    <p>This is the flying gato.</p>
  </div>
</article>

<article>
  <h2>📃 Prerequisites</h2>
  <p>
    Before we begin, make sure you have Node.js installed on your machine.
    You can download it from the official Node.js website.
  </p>
</article>

<article>
  <h2>📝 Creating the Server File</h2>
  <p>
    Open your favorite code editor and create a file named
    <code>server.js</code>.
  </p>
  <pre>
    <code class="language-javascript">
    const http = require('http');

    const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello, this is a simple Node.js server!</h1>');
    res.end();
    });

    server.listen(3000, () => {
    console.log('Server is listening on port 3000');
    });
    </code>
  </pre>
  <p>
    This code sets up a basic HTTP server that responds with a simple HTML
    message.
  </p>
</article>

<article>
  <h2>🖌️ Styling the Page</h2>
  <p>
    Create a file named <code>styles.css</code> to add some style to your
    HTML page.
  </p>
  <pre>
    <code class="language-css">
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }

    header {
      background-color: #333;
      color: #fff;
      text-align: center;
      padding: 1em 0;
    }

    section {
      max-width: 800px;
      margin: 2em auto;
      padding: 1em;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    h1, h2 {
      color: #333;
    }

    p {
      line-height: 1.6;
    }
    </code>
  </pre>
  <p>
    This CSS file provides a clean and readable style for your tutorial
    page.
  </p>
</article>

<article>
  <h2>📖 Conclusion</h2>
  <p>
    Congratulations! You've successfully created a simple Node.js server
    and styled a tutorial page to go along with it. Feel free to customize
    and enhance it further based on your needs.
  </p>
</article>
`

const getHtmlEmailMessageTemplate = (message) => `
<!DOCTYPE html>
<html lang="en">
  ${html_head}
  <body>
    ${html_header}
    <section>
      ${html_content_articles}
      <article>
      <h2>Email Message</h2>
        <p>${message}</p>
      </article>
    </section>
  </body>
</html>
`;

module.exports = {
  getHtmlEmailMessageTemplate,
};
