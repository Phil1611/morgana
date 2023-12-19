function toggleHeart(photo) {
    const heart = document.createElement("span");
    heart.innerHTML = "&#10084;"; // Codice del cuore
    heart.classList.add("heart");
    
    if (!photo.classList.contains("liked")) {
        photo.appendChild(heart);
        photo.querySelector(".caption").style.opacity = 1;
        photo.classList.add("liked");
    } else {
        const existingHeart = photo.querySelector(".heart");
        existingHeart.remove();
        photo.querySelector(".caption").style.opacity = 0;
        photo.classList.remove("liked");
    }

    // Aggiungi ulteriori azioni se necessario
}