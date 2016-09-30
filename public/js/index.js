var randomBoard = document.querySelector('#random');
var myBoards = document.querySelector('#myBoards');
var getApp = document.querySelector('#getApp');

randomBoard.addEventListener('click', function() {
  window.App.router.navigate('random');
});

myBoards.addEventListener('click', function() {
  window.App.router.navigate('myboards');
});

getApp.addEventListener('click', function() {
  window.App.router.navigate('getapp');
});