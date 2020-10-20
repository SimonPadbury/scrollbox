document.addEventListener('DOMContentLoaded', () => {
  setupDom();
});

const setupDom = () => {
  const scrollBoxes = document.querySelectorAll('.scrollbox');

  scrollBoxes.forEach(element => {
    let sbInner = element.querySelector('.scrollbox-inner')
    let sbHeightDiff = sbInner.scrollHeight - element.clientHeight;
    let sbWidthDiff = sbInner.scrollWidth - element.clientWidth;
    let sbIsActive = false;

    if (element.classList.contains('scrollbox-vertical')) {
      element.classList.add('show-shadow-bottom');
    }
    if (element.classList.contains('scrollbox-horizontal')) {
      element.classList.add('show-shadow-right');
    }

    sbInner.addEventListener('scroll', setScrollBoxShadows);

    function setScrollBoxShadows(event) {
      window.requestAnimationFrame(function() {

        // Vertical
        if (element.classList.contains('scrollbox-vertical')) {
          if (event.target.scrollTop > 0) {
            element.classList.add('show-shadow-top');
          } else {
            element.classList.remove('show-shadow-top');
          }
          if (event.target.scrollTop < sbHeightDiff) {
            element.classList.add('show-shadow-bottom');
          } else {
            element.classList.remove('show-shadow-bottom');
          }
        }
        
        // Horizontal
        if (element.classList.contains('scrollbox-horizontal')) {
          if (event.target.scrollLeft > 0) {
            element.classList.add('show-shadow-left');
          } else {
            element.classList.remove('show-shadow-left');
          }
          if (event.target.scrollLeft < sbWidthDiff) {
            element.classList.add('show-shadow-right');
          } else {
            element.classList.remove('show-shadow-right');
          }
        }

        sbIsActive = false;
      });

      sbIsActive = true;
    }
  
  });
};