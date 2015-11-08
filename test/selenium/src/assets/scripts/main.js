// The only purpose of this file is to kick off your application's top-level
// controller at the appropriate time. All other code should be written as
// separate modules in their own files.
import App from './App';
window.app = new App();
window.app.appendTo('body');
