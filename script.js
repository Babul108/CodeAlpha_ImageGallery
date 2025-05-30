const images = [
  { src: "C:\code alpha\ImageGalleryProject\ImageGalleryProject\images\beach.jpeg", caption: "Sunny Beach" },
  { src: "C:\code alpha\ImageGalleryProject\ImageGalleryProject\images\Mountains.jpeg", caption: "Snowy Mountains" },
  { src: "C:\code alpha\ImageGalleryProject\ImageGalleryProject\images\forest.jpeg", caption: "Green Forest" },
  { src: "C:\code alpha\ImageGalleryProject\ImageGalleryProject\images\city.jpeg", caption: "Night City" }
];

let currentIndex = 0;
let slideshowInterval = null;

function openPreview(index) {
  currentIndex = index;
  updateModal();
  document.getElementById("previewModal").style.display = "block";
}

function closePreview() {
  document.getElementById("previewModal").style.display = "none";
  stopSlideshow();
}

function updateModal() {
  document.getElementById("previewImage").src = images[currentIndex].src;
  document.getElementById("caption").textContent = images[currentIndex].caption;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateModal();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateModal();
}

function toggleSlideshow() {
  if (slideshowInterval) {
    stopSlideshow();
  } else {
    startSlideshow();
  }
}

function startSlideshow() {
  slideshowInterval = setInterval(nextImage, 2000);
}

function stopSlideshow() {
  clearInterval(slideshowInterval);
  slideshowInterval = null;
}

document.addEventListener("keydown", (e) => {
  if (document.getElementById("previewModal").style.display === "block") {
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") closePreview();
  }
});
