# ICT Skills 2 Assignment.

Name: Darren Ghambari

## Overview.

[ A paragraph on your React app's concept followed by a bullet-point list of its feature set - only list new/modified features if you are expanding the Movies app. ]

e.g.

- Added a Popular Actors page and corresponding Actor Bio/Details page
- Added a TV Show and TV Show details page
- Reviews visible for Movies and TV Shows
- Similar TV Show and Movies attempted but not functioning correctly
- Pagination attempted but not functioning correctly

## Setup requirements.

To run this application a .env file is required and must contain a tmdb api key in the following format:
REACT_APP_TMDB_KEY=<<your api key here>>

## App Design.

The design of this app has been

### Routing/Navigation.

[List the set of routes your app supports - only mention new instances if you expanded the Movies Fan app. State the view linked with each route.]

e.g.

- /movies/:id - detailed information on a specific movie.
- /movies/upcoming - lists movies soon to be shown in cinemas.
- /person/popular - lists popular actors
- /actor/:id - displays more details about the actor
- /movies/:id/similar - displays similar movies
- /tv/popular - lists the most popular tv shows at the moment
- /tv/:id - displays more details about the tv show
- /tv/:id/similar - displays similar tv shows
- /tv/reviews/:id - displays reviews for the tv show
- /person/:id/movie_credits - shows other movies that the actor starred in

### Views/Pages.

[ For each view in your app, show a screenshot and caption - only new/modified ones in the case of the Movies Fan app. If necessary, use multiple screenshots to cover a view's full capability.

e.g.

> Lists movies from the Discover endpoint. Filtering on title and genre attributes is supported.

![][d1]

![][d2]

> Shows detailed information on a specific movie

![][detail]

### Component catalogue.

[ Use the Storybook UI to highlight the new components for which you developed stories.]
e.g.

![][stories]

## Caching.

[ List the TMDB server state cached by the app. Include a screenshot(s) of the react-query dev tools to validate your list.]

e.g.

- Discover movies (pagination support)
- Movie details
- etc
- etc

![][caching]

[d1]: ./public/discover1.png
[d2]: ./public/discover2.png
[detail]: ./public/detail.png
[caching]: ./public/caching.png
[stories]: ./public/stories.png
