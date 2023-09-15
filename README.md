# Netflix GPT

- Create-react-app
- Configured TailwindCSS
- Header
- Routing of App - setting the route for our app
- Login form
- Sign up form
- Form Validation
- useRef Hook
- Firebase setup
- Deploying our app to production
- sign up and sing in Authentication
- installing redux toolkit
- implemented sign out logic
- BugFix: if the user is not logged in then redirect him from /browse page to login page and vice versa.(we did this inside onAuthStateChanged)
- unsubscribed to onAuthStateChanged when component unmounts
- added hardcoded data into constants file
- Register in TMDB and get the access token from there
- fetch the data from now playing movie API and
- Storing the movies data to redux store by using custom hook i.e useNowPlayingMovies
- buiding Maincontainer,created useMovieTrailer hook to fetch, filter movies with type =trailer and then put it them to redux store
- embeded youtube video and make it autoplay and mute
- Building secondary component
- Build MovieList
- Build MovieCard
- find out TMDB Image CDN URL
- created custom hook usePopularMovies,useUpComingMovies,useTopRatedMovies to fetch popular moves and stored them to redux and then selecting them to show on UI
- GPT Search Feature
- Creating GPT Search componenet
- creating GPT Search Bar
- Multi-lanuage feature in our app
- get the movie names from GPT and search it in TMDB search API
- then store that movies into redux store along with movie names
- then using useSelector get that movies from store and showing them in UI
- Memoization - to the hooks which are fetching the movies and storing to store
- adding .env file to store API keys
- lastly adding .env file to .gitignore
- made site responsive

# Features

- Login/sing up(before authentication)

  - sign up / sign in form
  - redirect to browse page( after logged in)

- Browse (after authentication)

  - Header
  - Main Movie
    - Trailer in background
    - Title and Description

- NetflixGPT

  - Searchbar
  - Movie Suggestions

  #

  => Created Login and sign up page
  => then Build form validation functionality
  => Authentication using Firebase
