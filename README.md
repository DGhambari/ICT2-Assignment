# ICT Skills 2 Assignment.

Name: Darren Ghambari

## Overview.

This application fetches data from TMDB APIs relating to movies, tv shows, actors etc and displays them using React. Individual components were designed with the aid of Storybook.

Additional features from the previous lab exercises are as follows:

- Added a Popular Actors page and corresponding Actor Bio/Details page
- Added a TV Show and TV Show details page
- Reviews visible for Movies and TV Shows
- Similar TV Show and Movies attempted but not functioning correctly
- Pagination attempted but not functioning correctly

## Setup requirements.

To run this application a .env file is required and must contain a tmdb api key in the following format:
REACT_APP_TMDB_KEY=<<your api key here>>

## App Design.

The design of this app has been modified to use a darker theme with new pages added.

### Routing/Navigation.

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

> Shows movies from the endpoint Discover.

![][home]

> Shows in depth detail about a selected movie.

![][movie_details]

> Displays reviews for the movie.

![][movie_reviews]

> Displays favourited movies.

![][favourite_movies]

> Allows the user to filter the results.

![][movie_filter]

> Displays a list of the most popular actors.

![][popular_actors]

> Displays an actors details.

![][actor_details]

> Displays a list of the most popular tv shows using the Popular TV endpoint.

![][tvshows]

> Displays a tv shows details.

![][tv_details]

> Displays the reviews for a selected tv show.

![][tv_reviews]

### Component catalogue.

> Displays the most relevant information about an actor in an easy to read card format along with a picture.

![][actor_card]

> Displays the most relevant information about a tv show in an easy to read card format along with a picture.

![][tv_show_card]

> Displays details on the selected actor.

![][actor_details_storybook]

> Displays the actors name in a header.

![][actor_header]

> Displays a list of popular tv shows.

![][tv_list]

## Caching.

- Discover movies (pagination support)
- Movie details

![][caching]

[actor_details]: ./public/assets/actor_details.png
[favourite_movies]: ./public/assets/favourite_movies.png
[home]: ./public/assets/home.png
[movie_details]: ./public/assets/movie_details.png
[movie_reviews]: ./public/assets/movie_reviews.png
[movie_filter]: ./public/assets/movie_filter.png
[popular_actors]: ./public/assets/popular_actors.png
[stories]: ./public/assets/stories.png
[tvshows]: ./public/assets/tvshows.png
[tv_details]: ./public/assets/tv_details.png
[tv_reviews]: ./public/assets/tv_reviews.png
[upcoming]: ./public/assets/upcoming.png
[actor_card]: ./public/assets/actor_card.png
[tv_card]: ./public/assets/tv_card.png
[actor_details_storybook]: ./public/assets/actor_details_storybook.png
[actor_header]: ./public/assets/actor_header.png
[tv_list]: ./public/assets/tv_list.png
[tv_show_card]: ./public/assets/tv_show_card.png
