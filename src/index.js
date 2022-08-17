import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import MoviePage from './pages/movieDetailsPage';
import FavouriteMoviesPage from './pages/favouriteMoviesPage';
import MovieReviewPage from './pages/movieReviewPage';
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from './contexts/moviesContext';
import AddMovieReviewPage from './pages/addMovieReviewPage';
import UpcomingMoviesPage from './pages/upcomingMoviesPage';
import PopularActorsPage from './pages/popularActorsPage';
import ActorDetailsPage from './pages/actorDetailsPage';
import SimilarMoviesPage from './pages/similarMoviesPage';
import PopularTVPage from './pages/popularTVPage';
import TVDetailsPage from './pages/tvDetailsPage';
import SimilarTVShowsPage from './pages/similarTVShowsPage';
import TVShowReviewPage from './pages/tvShowReviewPage';
import ActorMoviesPage from './pages/actorMoviesPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path='/reviews/:id' element={<MovieReviewPage />} />
            <Route
              path='/movies/favourites'
              element={<FavouriteMoviesPage />}
            />
            <Route path='/movies/upcoming' element={<UpcomingMoviesPage />} />
            <Route path='/movies/:id' element={<MoviePage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<Navigate to='/' replace />} />
            <Route path='/person/popular' element={<PopularActorsPage />} />
            <Route path='/reviews/form' element={<AddMovieReviewPage />} />
            <Route path='/actor/:id' element={<ActorDetailsPage />} />
            <Route path='/movies/:id/similar' element={<SimilarMoviesPage />} />
            <Route path='/tv/popular' element={<PopularTVPage />} />
            <Route path='/tv/:id' element={<TVDetailsPage />} />
            <Route path='/tv/:id/similar' element={<SimilarTVShowsPage />} />
            <Route path='/tv/reviews/:id' element={<TVShowReviewPage />} />
            <Route path='/person/:id/movie_credits' element={<ActorMoviesPage />} />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
