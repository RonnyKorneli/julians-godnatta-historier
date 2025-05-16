function setCarouselXPos() {
  const gridElement = document.querySelector('.carousel-inner')
  const gridStyle = window.getComputedStyle(gridElement)
  const gridColumnGap = parseInt( gridStyle.getPropertyValue('grid-column-gap') )
  const carouselItems = document.querySelectorAll('.carousel .item')
  let offset = gridColumnGap

  carouselItems.forEach((element, index) => {
    let itemWidth = element.offsetWidth
    element.setAttribute('data-xpos', offset)
    element.setAttribute('data-item', index)
    offset = offset + itemWidth
  })

  return carouselItems
}

function carouselFunc() {
  const carouselItems = setCarouselXPos()
  const carousels = document.querySelectorAll('.carousel')
  let carouselPos = 0

  if (carousels) {
    carousels.forEach((carousel) => {
      carousel.setAttribute('data-current', carouselPos)

      const carouselInner = carousel.querySelector('.carousel-inner')
      const carouselNext = carousel.querySelector('.carousel-next')
      const carouselPrev = carousel.querySelector( '.carousel-prev')

      if (carouselNext) {
        carouselNext.addEventListener('click', () => {
          let carouselCurrent = parseInt(carousel.dataset.current)
          carouselPos = (carouselItems.length - 1 > carouselCurrent) ? carouselCurrent + 1 : 0
          carousel.scroll({
            left: carouselInner.children[carouselPos].dataset.xpos,
            behavior: 'smooth',
          })
          carousel.setAttribute('data-current', carouselPos)
        })
      }

      if (carouselPrev) {
        carouselPrev.addEventListener('click', () => {
          let carouselCurrent = parseInt(carousel.dataset.current)
          carouselPos = (0 < carouselCurrent) ? carouselCurrent - 1 : carouselItems.length - 1
          carousel.scroll({
            left: carouselInner.children[carouselPos].dataset.xpos,
            behavior: 'smooth',
          })
          carousel.setAttribute('data-current', carouselPos)
        })
      }

      function handleIntersect(entries, observer) {
        entries.forEach(entry => {
          // Prüfen, ob das Element vollständig sichtbar ist
          if (entry.isIntersecting && entry.intersectionRatio === 1) {
            carousel.setAttribute('data-current', entry.target.dataset.item)
          }
        })
      }

      const options = {
        root: carousel,
        rootMargin: '0px',
        threshold: 1.0
      }
      const observer = new IntersectionObserver(handleIntersect, options);
      const items = carousel.querySelectorAll('.item');
      items.forEach(item => observer.observe(item));
    })
  }
}

export { setCarouselXPos, carouselFunc }
