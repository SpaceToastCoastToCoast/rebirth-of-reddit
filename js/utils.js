(function(window) {

  window.App = window.App || {};

  //url: string
  //callback: function(data)
  var Get = (url, callback) => {
    var oReq = new XMLHttpRequest();
    // create new XHR object

    // attach events: 'load', 'error'
    oReq.addEventListener('progress', function(){
    });
    oReq.addEventListener('load', function(){
      callback(this.responseText);
    });
    oReq.addEventListener('error', function(){
      console.log('ERROR loading data from', url);
    });

    // first arg: METHOD, second arg: URL
    oReq.open('GET', url);
    // HEADERS GO HERE
    oReq.setRequestHeader('Accept', 'application/json');

    //fire off request
    oReq.send();
  };

  window.App.utils = {
    Get: Get
  };

}(window));