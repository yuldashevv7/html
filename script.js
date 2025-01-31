// Video ro'yxatidagi har bir item uchun hodisa qo'shish
document.querySelectorAll('.video-item').forEach(item => {
  item.addEventListener('click', function() {
    const videoSrc = this.getAttribute('data-video');
    const videoTitle = this.getAttribute('data-title');
    const videoDescription = this.getAttribute('data-description');

    // Video ma'lumotlarini yangilash
    const videoElement = document.getElementById('main-video');
    const titleElement = document.getElementById('video-title');
    const descriptionElement = document.getElementById('video-description');

    // Video manzilini yangilash va videoni o'ynash
    videoElement.src = videoSrc;
    videoElement.play();

    // Sarlavha va tavsifni yangilash
    titleElement.innerText = videoTitle;
    descriptionElement.innerText = videoDescription;
  });
});

// Like va Dislike tugmalari
let likeCount = 1000;

document.getElementById('like-btn').addEventListener('click', function() {
  likeCount++;
  document.getElementById('like-count').innerText = `${likeCount} Like`;
});

document.getElementById('dislike-btn').addEventListener('click', function() {
  likeCount--;
  document.getElementById('like-count').innerText = `${likeCount} Like`;
});

// Sharh qo'shish
document.getElementById('submit-comment').addEventListener('click', function() {
  const commentBox = document.getElementById('comment-box');
  const commentText = commentBox.value;

  if (commentText.trim() !== "") {
    const commentSection = document.querySelector('.comments-section');
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = `<p><strong>Yangi Foydalanuvchi:</strong> ${commentText}</p>`;

    commentSection.appendChild(newComment);
    commentBox.value = "";  // Inputni tozalash
  }
});

// Izlash uchun funksiyalar
const searchInput = document.getElementById('search-bar');
searchInput.addEventListener('input', function() {
  const query = searchInput.value.toLowerCase();
  filterVideos(query);
});

function filterVideos(query) {
  document.querySelectorAll('.video-item').forEach(item => {
    const title = item.querySelector('p').textContent.toLowerCase();
    if (title.includes(query)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
