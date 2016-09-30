(function(window) {

  window.App = window.App || {};

  class MyBoards {
    constructor() {
      this.posts = [];
      this.ready = null;
      App.utils.Get('https://www.reddit.com/r/techsupportgore.json', (data) => {
        const parsedPostData = JSON.parse(data);
        this.posts = parsedPostData.data.children;
        this.render(this.ready);
      });
    }

    rendered(callback) {
      this.ready = callback;
    }

    render(readyFunc) {
      const postsContainer = document.createElement("div");

      const items = this.posts.map(function(post) {
        console.log(post);
        let newPost = document.createElement("div");
        newPost.className = "post";
        let img = document.createElement("img");
        img.src = post.data.thumbnail;
        let title = document.createElement("h3");
        title.innerHTML = post.data.title;
        let postInfo = document.createElement("span");
        postInfo.className = "postInfo";
        postInfo.innerHTML = "by " + post.data.author + " : " + post.data.ups + " upvotes";
        let postBody = document.createElement("p");
        postBody.innerHTML = post.data.selftext;
        newPost.appendChild(img);
        newPost.appendChild(title);
        newPost.appendChild(postInfo);
        newPost.appendChild(postBody);
        return newPost;
      });
      items.forEach(function(item) {
        postsContainer.appendChild(item);
      });
      readyFunc(postsContainer);
    }
  }
  window.App.states = {
    MyBoards: MyBoards
  };

}(window));