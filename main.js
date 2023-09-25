document.addEventListener("DOMContentLoaded", function () {

    const URL = 'https://my-json-server.typicode.com/ponstomas/db/posts';

    fetch(URL)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < Object.keys(data).length; i++) {
                document.querySelector(".feed").innerHTML += `
        <div class="tweets">
          <div class="profile-pic"><img src="https://xsgames.co/randomusers/assets/avatars/pixel/${i}.jpg" width="40" /></div>
          <div class="content">
            <div class="names">
              <p class="full-name">${data[i].name}</p>
              <p class="user-name">@${data[i].name}</p>
              <p class="time"> 27mins</p>
            </div>
          </div>
          <div class="tweet-content">
            <p>${data[i].text}</p>
          </div>
          <div class="tweet-icons">
            <i class="fa fa-comment" aria-hidden="true"></i>
            <i class="fa fa-heart" aria-hidden="true"></i>
            <i class="fa fa-retweet" aria-hidden="true"></i>
          </div>
        </div>
    `
            }
        })
        .catch(error => console.log(error))

})