/*
----------------------------
Basic Context API Setup
----------------------------
1. context API: Share auth state with other components (across the application)
2. Create an User Context
3. ContextProvider with passed children 
4. set the UserContext in the index.js
5.Now to consume the context: export the AuthContext from UserContext
6. Now at Header or Home() or anywhere else) : use UseContext hook to get the info in the context
7.
*/


/*
Auth Integration 
1. use getAuth by passing the app form firebase config
2. create a function named createUser to return createUserWithEmailAndPassword

*/