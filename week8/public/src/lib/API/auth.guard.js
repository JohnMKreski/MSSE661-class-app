// (() => {
//   const isAuth = getStorage('isAuth');
//   if (!isAuth) {
//     doLogout();
//     alert('Log in to view your song requests.');
//     window.location.href = '/login.html';
//   }
// })();

/**
 * if null 
 * validates to true
 *  making auth block route to login bc not authenticated 
 * else false 
 * never reaches return check
 * and 
 * parses to site
 */

// (() => {
//   if (!authService.isAuth() || authService.isTokenExpired()) {
//     alert('Log in to view your song requests (auth.guard).');
//     authService.logout();
//   }
// })();

(() => {
  // console.log(authService.isAuth());
  if (authService.isTokenExpired()) {
    alert('Log in to view your song requests (auth.guard).');
    authService.logout();
  }
})();

// (() => {
//   if (
//     window.location.pathname !== '/login.html' &&
//     (!authService.isAuth() || authService.isTokenExpired())
//   ) {
//     alert('Sign into the app to proceed.');
//     authService.logout('login.html');
//   } else if (
//     window.location.pathname === '/login.html' &&
//     authService.isAuth()
//   ) {
//     window.location.href = 'todo/todo.html';
//   }
// })();