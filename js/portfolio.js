var dev = document.querySelector('article.development')
var mark = document.querySelector('article.marketing')
var copy = document.querySelector('article.copywriting')
var nav1 = document.querySelector('article.development h3')
var nav2 = document.querySelector('article.marketing h3')
var nav3 = document.querySelector('article.copywriting h3')

var currentTab

// Check to see if a tab has already been clicked

if (sessionStorage.getItem('tab') === 'development') {
  swap1()
} else if (sessionStorage.getItem('tab') === 'marketing') {
  swap2()
} else if (sessionStorage.getItem('tab') === 'copywriting') {
  swap3()
} else {
  sessionStorage.setItem('tab', 'development')
}

nav1.addEventListener('click', swap1)
nav2.addEventListener('click', swap2)
nav3.addEventListener('click', swap3)

function swap1() {
  if (dev.classList.contains('under')) {
    dev.classList.remove('under')
    dev.classList.add('over')
    sessionStorage.setItem('tab', 'development')
    if (mark.classList.contains('over')) {
      mark.classList.remove('over')
      mark.classList.add('under')
    }
    if (copy.classList.contains('over')) {
      copy.classList.remove('over')
      copy.classList.add('under')
    }
  }
}

function swap2() {
  if (mark.classList.contains('under')) {
    mark.classList.remove('under')
    mark.classList.add('over')
    sessionStorage.setItem('tab', 'marketing')
    if (dev.classList.contains('over')) {
      dev.classList.remove('over')
      dev.classList.add('under')
    }
    if (copy.classList.contains('over')) {
      copy.classList.remove('over')
      copy.classList.add('under')
    }
  }
}

function swap3() {
  if (copy.classList.contains('under')) {
    copy.classList.remove('under')
    copy.classList.add('over')
    sessionStorage.setItem('tab', 'copywriting')
    if (dev.classList.contains('over')) {
      dev.classList.remove('over')
      dev.classList.add('under')
    }
    if (mark.classList.contains('over')) {
      mark.classList.remove('over')
      mark.classList.add('under')
    }
  }
}
