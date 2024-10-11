const subGalleries = {
    residential: [
         "img/respro1.jpeg",
        "img/respro2.jpeg",
        "img/respro3.jpeg",
        "img/respro4.jpeg",
        "img/respro5.jpeg",
        "img/respro6.jpeg",
        "img/respro7.jpeg",
        "img/respro8.jpeg",
        "img/respro9.jpeg",
        "img/respro10.jpeg"
    ],
    commercial: [
        "img/compro1.jpeg",
        "img/compro2.jpeg",
        "img/compro3.jpeg",
        "img/compro4.jpeg",
        "img/compro5.jpeg",
    ],
    retail: [
        "img/retpro1.jpg",
        "img/retpro2.jpg",
    ]
};

function openSubGallery(category) {
    const gallery = document.getElementById("fullscreenGallery");
    gallery.innerHTML = '<span class="close-gallery" onclick="closeGallery()">&times;</span>';
    
    subGalleries[category].forEach(img => {
        const imgElement = document.createElement("img");
        imgElement.src = img;
        imgElement.alt = `${category} project image`;
        imgElement.width = 1200;
        imgElement.height = 800;
        gallery.appendChild(imgElement);
    });

    gallery.style.display = "block";
    document.body.style.overflow = "hidden";
}

function openGallery() {
    const gallery = document.getElementById("fullscreenGallery");
    gallery.innerHTML = '<span class="close-gallery" onclick="closeGallery()">&times;</span>';
    
    Object.values(subGalleries).flat().forEach(img => {
        const imgElement = document.createElement("img");
        imgElement.src = img;
        imgElement.alt = "Project image";
        imgElement.width = 1200;
        imgElement.height = 800;
        gallery.appendChild(imgElement);
    });

    gallery.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeGallery() {
    document.getElementById("fullscreenGallery").style.display = "none";
    document.body.style.overflow = "auto";
}

// Close gallery when clicking outside of images
document.getElementById("fullscreenGallery").addEventListener("click", function(e) {
    if (e.target === this) {
        closeGallery();
    }
});

// Enable keyboard navigation
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        closeGallery();
    } else if (e.key === "ArrowRight") {
        scrollGallery(1);
    } else if (e.key === "ArrowLeft") {
        scrollGallery(-1);
    }
});

function scrollGallery(direction) {
    const gallery = document.getElementById("fullscreenGallery");
    const scrollAmount = window.innerWidth * direction;
    if (window.innerWidth <= 768) {
        gallery.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    } else {
        gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

// Touch swipe detection
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

document.getElementById("fullscreenGallery").addEventListener("touchstart", function(e) {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
}, false);

document.getElementById("fullscreenGallery").addEventListener("touchend", function(e) {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
}, false);

function handleSwipe() {
    if (window.innerWidth <= 768) {
        if (touchEndY < touchStartY) {
            scrollGallery(1);
        }
        if (touchEndY > touchStartY) {
            scrollGallery(-1);
        }
    } else {
        if (touchEndX < touchStartX) {
            scrollGallery(1);
        }
        if (touchEndX > touchStartX) {
            scrollGallery(-1);
        }
    }
}
