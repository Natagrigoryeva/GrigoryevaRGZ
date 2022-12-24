const $lgContainer = document.getElementById("animation");

const inlineGallery = lightGallery($lgContainer, {
  
  container: $lgContainer,
  autoplay:true,
  autoplayControls:true,
  appendSubHtmlTo: ".lg-itemg",
  slideDelay: 400,
  plugins: [lgZoom, lgThumbnail,lgAutoplay],
  download:false,
  hash: false,
  allowMediaOverlap: true,
  captions: false,
  thumbWidth: 100,
  thumbHeight: "150px",
  thumbMargin: 4,
  closable: true,
  fullScreen:true,
  showMaximizeIcon: false,
});




