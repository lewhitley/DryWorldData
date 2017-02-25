# Dry World Data

Idea behind the project: use one component and a router to serve versioned information about states and world countries. Write code as dry as possible.

## Setup for the project

run `npm install` in terminal while in this directory   
open `index.html` in browser

## Live Project
[Live][live]

I chose to host this project on Github Pages, since it didn't require a new API or database and the time/effort required to get it running is minimal.

Version 1:   
[State names][n1]   
[World countries 1][w1]

Version 2:   
[State capitals][n2]   
[World countries 2][w2]

[live]: https://lewhitley.github.io/DryWorldData/#/
[n1]: https://lewhitley.github.io/DryWorldData/#/v1/topics/national
[n2]: https://lewhitley.github.io/DryWorldData/#/v2/topics/national
[w1]: https://lewhitley.github.io/DryWorldData/#/v1/topics/world
[w2]: https://lewhitley.github.io/DryWorldData/#/v2/topics/world

## Schema

`Root` uses React-Router to pass the version and topic from the url to the components. The `App` component contains a header to make it easier for users to navigate between the different versions and different topics. It also wraps the `Table` component, where the correct information for the route is selected and represented in an unordered list of tiles.

The colors, fonts, and other styling were taken from the example tile layout provided. CSS for this portion of the project is located in `/stylesheets/table.css` and for the header is located in `/stylesheets/header.css`.
