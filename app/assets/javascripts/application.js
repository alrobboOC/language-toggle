//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  document.querySelectorAll('[data-print-page]').forEach((button) => {
    button.addEventListener('click', () => window.print())
  })
})
