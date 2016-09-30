//instantiate states when user requests it

(function(window) {
  // body...
window.App = window.App || {};
  //map routes to states
  class Router {
    constructor(containerID){
      this.container = document.getElementById('container');
    }
    //takes in a "route" and renders to the container
    navigate(route) {
      let state = null;
      switch(route) {
        case 'random':
          state = new App.states.Random();
          break;
        case 'myboards':
          state = new App.states.MyBoards();
          break;
        case 'getapp':
          state = new App.states.GetApp();
          break;
        default: break;
      }
      state.rendered((element) => {
        this.container.innerHTML = "";
        this.container.appendChild(element);
      });
    }
  }
  window.App.router = new Router('container');
}(window));