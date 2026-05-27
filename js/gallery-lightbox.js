import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe@5/dist/photoswipe-lightbox.esm.js';

const lightbox = new PhotoSwipeLightbox({
  gallery: '.masonry',
  children: 'a',

  pswpModule: () => import('https://unpkg.com/photoswipe@5/dist/photoswipe.esm.js'),

  /* AUTO SIZE DETECTION */
  addFilter: (name, fn) => {
    if (name === 'itemData') {
      return (itemData) => {

        if (!itemData.width || !itemData.height) {

          const img = new Image();
          img.src = itemData.src;

          img.onload = () => {
            itemData.width = img.naturalWidth;
            itemData.height = img.naturalHeight;
          };

        }

        return itemData;
      };
    }
    return fn;
  }
});

/* =========================
VIDEO SUPPORT (CUSTOM)
========================= */
lightbox.on('contentLoad', (e) => {
  const { content } = e;

  if (content.data.type === 'html') {
    content.element = document.createElement('video');
    content.element.src = content.data.src;
    content.element.controls = true;
    content.element.autoplay = true;
  }
});

/* =========================
SHARE BUTTON (CUSTOM)
========================= */
lightbox.on('uiRegister', function() {
  lightbox.pswp.ui.registerElement({
    name: 'custom-share',
    order: 9,
    isButton: true,
    html: 'Share',
    onClick: () => {
      const url = window.location.href;
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
    }
  });
});



lightbox.init();
