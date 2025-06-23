// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// ✅ Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");

  
  const hearts = document.querySelectorAll(".like-glyph");

  hearts.forEach(heart => {
    heart.addEventListener("click", () => {
      
      mimicServerCall()
        .then(() => {
          
          if (heart.textContent === EMPTY_HEART) {
            heart.textContent = FULL_HEART;
            heart.classList.add("activated-heart");
          } else {
            heart.textContent = EMPTY_HEART;
            heart.classList.remove("activated-heart");
          }
        })
        .catch(error => {
          
          modal.classList.remove("hidden");
          document.getElementById("modal-message").textContent = error;

          
          setTimeout(() => {
            modal.classList.add("hidden");
          }, 3000);
        });
    });
  });
});
