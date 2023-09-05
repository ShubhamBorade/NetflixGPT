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
