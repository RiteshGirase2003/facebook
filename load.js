function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
// function loadPosts() {

    let http = new XMLHttpRequest();

    http.open("get", "post.json", true);

    http.send();

    http.onload = function () {


        if (this.readyState == 4 && this.status == 200) {
            let post = JSON.parse(this.responseText);
            let output = "";
        shuffleArray(post);
        post= post.slice(0, 3);
        for (let item of post) {
        output += `
                
                    <div class="post-container">

                        <div class="post-row">
                            <div class="user-profile">
                                <img src="${item.image}"  >
                                <div>
                                    <p>${item.user_name}</p>
                                    <p>${item.date_time}</p>
                                </div>
                        
                                <a href="#"><i class="fas fa-ellipsis-v"></i></a>
                            </div>
                        </div>
    
                

                                    
                        <p class="post-text"> ${item.description} </p>
                        <img src="${item.post_image}" class="post-img">

                        <div class="post-row">
                            <div class="activity-icons">
                                <div>
                                    <i class="fa-regular fa-thumbs-up"></i> ${item.like}

                                </div>
                                <div>
                                    <i class="fa-regular fa-comment fa-flip-horizontal"></i> ${item.comment}
                                </div>
                                <div>
                                    <i class="fa-solid fa-share"></i> ${item.share}
                                </div>
                            </div>
                        </div>
                    </div>

                    
                `;
        }

        document.querySelector(".post-container").innerHTML = output;
    }
    };

// }

function load()
{
    location.reload();
}
