var randomBoard = document.querySelector('#random');
var myBoards = document.querySelector('#myBoards');
var getApp = document.querySelector('#getApp');

myBoards.addEventListener('click', function() {
  window.App.router.navigate('myboards');
});