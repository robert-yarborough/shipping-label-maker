Build a token system that calls a login endpoint with a username and password, 
and stores those tokens in our state and local storage. When we visit a private
route page we will check the state for tokens, if there are none we review the
local storage. If neither exists, we direct the user to the login page. 


Goals For This Authentication System
Private and public routes: This application will have basic “landing” pages, which any user can visit. Along with these, signing up and logging in should be declarative public routes. On the other hand there will be many pages that require authentication to view.
Redirect to Login: If the user does not have tokens, or the token refresh does not work, the user will automatically be redirected to the Login page if they attempt to see a private route.
Redirect to referrer: If a user wants to view a specific page, but does not have a valid token, they will be redirected to the login page. We want to make sure that after logging in they’re sent to the page they originally wanted. The default will be the dashboard.
Authentication Tokens: We’ll use tokens to read and write authentication with. These should be stored in local storage so the user can stay logged in if they leave the site.
UI is intuitive and straightforward: This really isn’t going to be much of an “examination” on the UI aspect, but I do think it’s essential for our Login and Sign up page to be simple, and follow the do’s and don’ts outlined by Brad Frost here.