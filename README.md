# YAML Validator

A simple web application to validate YAML syntax.  
Frontend is built with HTML, CSS, and JavaScript.  
Backend uses Node.js, Express, and js-yaml.

## Features

- Paste YAML in the web UI and validate its syntax.
- Supports multiple YAML documents.
- Shows validation result and error details.

## Project Structure

```
package.json
server.js
public/
    index.html
    script.js
    style.css
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed

### Installation

1. Clone the repository:
    ```sh
    git clone <your-repo-url>
    cd Yamlvalidator
    ```
2. Install dependencies:
    ```sh
    npm install
    ```

### Running the Application

Start the server:
```sh
node server.js
```
Open [http://localhost:3001](http://localhost:3001) in your browser.

### Usage

- Paste your YAML content in the textarea.
- Click **Validate YAML**.
- See the result below.

## Deployment

- The frontend (`public/`) can be hosted on any static site host (e.g., GitLab Pages).
- The backend (`server.js`) requires a Node.js server (e.g., Heroku, Render, Vercel).

