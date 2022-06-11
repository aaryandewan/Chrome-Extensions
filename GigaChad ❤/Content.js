let gigaChadImages = [
  "https://melmagazine.com/wp-content/uploads/2021/01/66f-1.jpg",
  "https://i.ytimg.com/vi/Ux5cQbO_ybw/maxresdefault.jpg",
  "https://i.kym-cdn.com/photos/images/facebook/002/250/753/a0a.jpg",
  "https://www.scoopearth.com/wp-content/uploads/2021/09/6c820920313a6e90f87ef90408af18-1200x1442-1.png",
  "https://i.kym-cdn.com/photos/images/facebook/001/896/771/747.jpg",
  "https://w0.peakpx.com/wallpaper/541/449/HD-wallpaper-giga-chad-memes.jpg",
];

const images = document.getElementsByTagName("img");
// alert("hi");
for (let i = 0; i < images.length; i++) {
  const randomImage = Math.floor(Math.random() * gigaChadImages.length);
  images[i].src = gigaChadImages[randomImage];
}
