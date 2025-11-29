const reels = [
  {
    username: "naina.girdhar",
    likeCount: 2480,
    isLiked: false,
    commentCount: 112,
    caption: "E-commerce Changes: Adapting to the Future 📦✨",
    video: "./Allreels/1.mp4",
    userProfile:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    shareCount: 210,
    isFollowed: false,
  },
  {
    username: "tech.with.raj",
    likeCount: 5200,
    isLiked: true,
    commentCount: 340,
    caption: "This AI tool will change everything! 🤖🔥",
    video: "./Allreels/2.mp4",
    userProfile:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    shareCount: 310,
    isFollowed: true,
  },
  {
    username: "travel.diaries",
    likeCount: 1890,
    isLiked: false,
    commentCount: 89,
    caption: "Sunset at Bali is unmatched 🌅✨",
    video: "./Allreels/3.mp4",
    userProfile:
      "https://images.pexels.com/photos/912413/pexels-photo-912413.jpeg",
    shareCount: 150,
    isFollowed: false,
  },
  {
    username: "foodie_lover",
    likeCount: 7450,
    isLiked: false,
    commentCount: 560,
    caption: "Cheesy pasta recipe you must try! 🍝😍",
    video: "./Allreels/4.mp4",
    userProfile:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    shareCount: 420,
    isFollowed: true,
  },
  {
    username: "fitness._.guru",
    likeCount: 3100,
    isLiked: false,
    commentCount: 204,
    caption: "5 exercises to grow clean muscle 💪🔥",
    video: "./Allreels/5.mp4",
    userProfile:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    shareCount: 180,
    isFollowed: false,
  },
  {
    username: "creative.mind",
    likeCount: 1280,
    isLiked: false,
    commentCount: 66,
    caption: "Aesthetic room makeover 🎨✨",
    video: "./Allreels/6.mp4",
    userProfile:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    shareCount: 92,
    isFollowed: true,
  },
  {
    username: "coding.journey",
    likeCount: 8300,
    isLiked: true,
    commentCount: 450,
    caption: "Learn JavaScript in 30 seconds ⚡👨‍💻",
    video: "./Allreels/7.mp4",
    userProfile:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    shareCount: 510,
    isFollowed: true,
  },
  {
    username: "luxury.cars",
    likeCount: 15400,
    isLiked: false,
    commentCount: 730,
    caption: "This Lamborghini is a beast! 🏎️🔥",
    video: "./Allreels/8.mp4",
    userProfile:
      "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
    shareCount: 890,
    isFollowed: false,
  },
  {
    username: "pet_paradise",
    likeCount: 9200,
    isLiked: true,
    commentCount: 520,
    caption: "Cutest puppy ever? 🐶❤️",
    video: "./Allreels/9.mp4",
    userProfile:
      "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg",
    shareCount: 350,
    isFollowed: false,
  },
  {
    username: "minimalist_life",
    likeCount: 4600,
    isLiked: false,
    commentCount: 189,
    caption: "How to declutter your life in 3 steps 🧘‍♂️✨",
    video: "./Allreels/10.mp4",
    userProfile:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    shareCount: 270,
    isFollowed: true,
  },
];

var allReels = document.querySelector(".all-reels");

function addData() {
  var sum = "";
  reels.forEach((reel, idx) => {
    sum =
      sum +
      ` <div class="reel">
            <video autoplay loop controls muted src=${reel.video}></video>
            <div class="bottom">
              <div class="user">
                <img
                  src=${reel.userProfile}
                  alt=""
                />
                <h4>${reel.username}</h4>
                <button class="follow" id=${idx}>${
        reel.isFollowed ? "Following" : "Follow"
      }</button>
              </div>
              <h3>${reel.caption}</h3>
            </div>
            <div class="right">
              <div class="like" id=${idx}>
                <h4 class="like-icon">${
                  reel.isLiked
                    ? '<i class="ri-heart-3-fill love"></i>'
                    : '<i class="ri-heart-3-line"></i>'
                }</h4>
                <h6>${reel.likeCount}</h6>
              </div>
              <div class="comment">
                <h4 class="comment-icon"><i class="ri-chat-1-line"></i></h4>
                <h6>${reel.commentCount}</h6>
              </div>
              <div class="share">
                <h4 class="share-icon">
                  <i class="ri-share-forward-line"></i>
                </h4>
                <h6>${reel.shareCount}</h6>
              </div>
              <div class="menu">
                <h4 class="menu-icon">
                  <i class="ri-more-2-fill"></i>
                </h4>
              </div>
            </div>
          </div>`;
  });

  allReels.innerHTML = sum;
}

addData();

allReels.addEventListener("click", function (dets) {
  if (dets.target.className == "like") {
    if (!reels[dets.target.id].isLiked) {
      reels[dets.target.id].likeCount++;
      reels[dets.target.id].isLiked = true;
    } else {
      reels[dets.target.id].likeCount--;
      reels[dets.target.id].isLiked = false;
    }
    addData();
  }

  if (dets.target.className == "follow") {
    if (!reels[dets.target.id].isFollowed) {
      reels[dets.target.id].isFollowed = true;
    } else {
      reels[dets.target.id].isFollowed = false;
    }
    addData();
  }
});

