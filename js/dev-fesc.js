var slides = [
  {
    imageSrc: "images/tile-fesc1.jpg",
    altText: "FESC home page"
  },{
    imageSrc: "images/tile-fesc2.jpg",
    altText: "FESC education page"
  },{
    imageSrc: "images/tile-fesc3.jpg",
    altText: "FESC industry page"
  },{
    imageSrc: "images/tile-fesc4.jpg",
    altText: "FESC energy data page"
  }
]

// Add variables and event listeners to images
var tile1 = document.querySelector('#tile1')
var tile2 = document.querySelector('#tile2')
var tile3 = document.querySelector('#tile3')
var tile4 = document.querySelector('#tile4')


// Add vars to lightbox
var lightbox = document.querySelector('#lightbox')
var lightImg = document.querySelector('.zoom')
var underImg = document.querySelector('#under')

// When an image is clicked, toggle lightbox state to 'on'
tile1.addEventListener("click", function() {
  lightUp(tile1);
})
tile2.addEventListener("click", function() {
  lightUp(tile2);
})
tile3.addEventListener("click", function() {
  lightUp(tile3);
})
tile4.addEventListener("click", function() {
  lightUp(tile4);
})


// Load the image that was clicked
function lightUp(tile) {
  if (lightbox.classList.contains('lightbox-off')) {
    lightbox.classList.remove('lightbox-off')
  }
  if (lightbox.classList.contains('lightbox-deact')) {
    lightbox.classList.remove('lightbox-deact')
  }
  lightbox.classList.add('lightbox-on')
  if(tile == tile1) {
    lightImg.src = slides[0].imageSrc
    lightImg.setAttribute('alt',slides[0].altText)
  } else if(tile == tile2) {
    lightImg.src = slides[1].imageSrc
    lightImg.setAttribute('alt',slides[1].altText)
  } else if(tile == tile3) {
    lightImg.src = slides[2].imageSrc
    lightImg.setAttribute('alt',slides[2].altText)
  } else if(tile == tile4) {
    lightImg.src = slides[3].imageSrc
    lightImg.setAttribute('alt',slides[3].altText)
  }
}

// Add variables to the left/right arrows
var prev = document.querySelector('#prev')
var next = document.querySelector('#next')

// Add event listeners to arrows
prev.addEventListener('click',goBack)

next.addEventListener('click',goFwd)

function goBack() {
  if(lightImg.getAttribute('src') == slides[0].imageSrc) {
    underImg.setAttribute('style','background-image: url("' + slides[3].imageSrc + '");')
    lightImg.classList.add('topout')
    setTimeout(function() {
      lightImg.classList.remove('topout')
      lightImg.src = slides[3].imageSrc
      lightImg.setAttribute('alt',slides[3].altText)
    }, 500)  
  } else if(lightImg.getAttribute('src') == slides[1].imageSrc) {
    underImg.setAttribute('style','background-image: url("' + slides[0].imageSrc + '");')
    lightImg.classList.add('topout')
    setTimeout(function() {
      lightImg.classList.remove('topout')
      lightImg.src = slides[0].imageSrc
      lightImg.setAttribute('alt',slides[0].altText)
    }, 500)
  } else if(lightImg.getAttribute('src') == slides[2].imageSrc) {
    underImg.setAttribute('style','background-image: url("' + slides[1].imageSrc + '");')
    lightImg.classList.add('topout')
    setTimeout(function() {
      lightImg.classList.remove('topout')
      lightImg.src = slides[1].imageSrc
      lightImg.setAttribute('alt',slides[1].altText)
    }, 500)
  } else if(lightImg.getAttribute('src') == slides[3].imageSrc) {
    underImg.setAttribute('style','background-image: url("' + slides[2].imageSrc + '");')
    lightImg.classList.add('topout')
    setTimeout(function() {
      lightImg.classList.remove('topout')
      lightImg.src = slides[2].imageSrc
      lightImg.setAttribute('alt',slides[2].altText)
    }, 500)
  }
}

function goFwd() {
  if(lightImg.getAttribute('src') == slides[0].imageSrc) {
    underImg.setAttribute('style','background-image: url("' + slides[1].imageSrc + '");')
    lightImg.classList.add('topout')
    setTimeout(function() {
      lightImg.classList.remove('topout')
      lightImg.src = slides[1].imageSrc
      lightImg.setAttribute('alt',slides[1].altText)
    }, 500)  
  } else if(lightImg.getAttribute('src') == slides[1].imageSrc) {
    underImg.setAttribute('style','background-image: url("' + slides[2].imageSrc + '");')
    lightImg.classList.add('topout')
    setTimeout(function() {
      lightImg.classList.remove('topout')
      lightImg.src = slides[2].imageSrc
      lightImg.setAttribute('alt',slides[2].altText)
    }, 500)
  } else if(lightImg.getAttribute('src') == slides[2].imageSrc) {
    underImg.setAttribute('style','background-image: url("' + slides[3].imageSrc + '");')
    lightImg.classList.add('topout')
    setTimeout(function() {
      lightImg.classList.remove('topout')
      lightImg.src = slides[3].imageSrc
      lightImg.setAttribute('alt',slides[3].altText)
    }, 500)
  } else if(lightImg.getAttribute('src') == slides[3].imageSrc) {
    underImg.setAttribute('style','background-image: url("' + slides[0].imageSrc + '");')
    lightImg.classList.add('topout')
    setTimeout(function() {
      lightImg.classList.remove('topout')
      lightImg.src = slides[0].imageSrc
      lightImg.setAttribute('alt',slides[0].altText)
    }, 500)
  }
}
// When the zoomed image is clicked, close it and toggle the class back to 'off'
lightImg.addEventListener('click',closeIt)
document.querySelector('#close').addEventListener('click',closeIt)

function closeIt() {
  if (lightbox.classList.contains('lightbox-on')) {
    lightbox.classList.remove('lightbox-on')
    lightbox.classList.add('lightbox-deact')
    setTimeout(function() {
      lightbox.classList.remove('lightbox-deact')
      lightbox.classList.add('lightbox-off')
    }, 250)
  }
}