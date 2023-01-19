
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

document.querySelectorAll('.images_container img').forEach(image =>{
  image.onclick = () => {
    document.querySelector('.popup_image').style.display = 'block'
    document.querySelector('.popup_image img').src - image.getAttribute('src')
  }

  document.querySelector('.popup_image span').onclick = () => {
    document.querySelector('.popup_image').style.display = 'none'

  }
})
