 # Currently Viewing App


Shows a list of IP addresses viewing the page

## Installation

 Run
 ```yarn install```
 
 Vendors dll files should be generated automatically in `/public/vendors-[hash].js` every time you change your dependencies.

  ## Development

 Development server is provided by [express framework](https://github.com/expressjs/express). Webpack is injected to the app through [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) and [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware).
 
 To start the server just run: `yarn dev`

 ## Docker
 
 The development process is not dockerized. However, it is possible to run a production application from docker container:
 
 ```
 docker-compose up
 ```

 ## Database
 
 The database is stored inside the ```db.json``` file

 ## Config
 
 The GraphQL endpoint for client difined inside ```src/config.js``` file


## Requirements

Create a single-page web app that:

1. **Shows the list of IP addresses currently viewing the app**
2. **When a new user opens the app, dynamically adds their IP address to the list of IPs**
3. **When a user closes the app, dynamically removes their IP address from the list of IPs**
4. **Implement the above functionality in a styalized viewer**

## Guidelines

- You MUST include installation instructions so that it can be run locally be other developers.
- You MUST publish your solution as a public github repository.
- You MUST include, at a minimum, a javascript component on the client-side portion of the application.
- You MUST use docker, react.js, graphQL, the rest of the solution is up to you.
- You SHOULD follow best practices for the languages or tools that you select.
- You SHOULD take as little or as long as you need (but don't overdo it). You will not be evaluated on time to complete.
- You SHOULD ask questions if anything specified here is not clear in any way.
- You SHOULD keep it simple. Don't over-engineer it.
- You MAY use any tools/frameworks/libraries/APIs you feel aid in completion of the tree requirements. Don't reinvent the wheel.


## Instructions

1. Fork this github repository using your personal github account
2. Create your solution. Test it. Test it again to be sure. Commit it and push to your personal repo.
3. Submit a PR (pull request) back to this repository indicating your solution is ready for review

## Evaluation Criteria

You will be evaluated with the following in mind:

- Did the candidate follow basic instructions correctly?
- Does the solution satisfy the three requirements?
- Does the solution run locally based on the provided instructions?
- Does the implementation follow established best practices (design patterns, language usage, code formatting, etc..)?
- Does the implementation use a sound design? What is the efficiency of the design? What happens at scale?
- Does the solution go above/beyond from a visual/UI perspective? Is it nice to look at or does it make the eyes bleed?
- Does the solution make proper use tools/frameworks/libraries/APIs if selected?

Happy coding!

