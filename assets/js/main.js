const audio = new Audio('assets/audio/8d82b5_Cheers_Theme_Song.mp3');

document.addEventListener('keypress', (event) => {
  console.log(event.keyCode)
  event.keyCode === 120 ? audio.pause() : null
})
// if (document.querySelectorAll('.buy-btn')) {
//   const boxesOfSuggestion = document.querySelectorAll('.box')
//   const buttonsOfSuggestion = document.querySelectorAll('.buy-btn')
//   buttonsOfSuggestion.forEach((buttonOfSuggestion) => {
//     buttonOfSuggestion.addEventListener('click', (event) => {
//       event.preventDefault()
//       buttonOfSuggestion.parentElement.classList.toggle('featured')
//     })
//   })
// }

if (document.querySelector('.php-email-form')) {
  const formFeedback = document.querySelector('.php-email-form')
  formFeedback.addEventListener('click', (event) => {
    formFeedback.style.transform = "translateY(-10px)"
  })
}

if (document.querySelector('.input-subscribe')) {
  const inputSubscribe = document.querySelector('.input-subscribe')
  const buttonSubscribe = document.querySelector('.button-subscribe')
  inputSubscribe.addEventListener('click', (event) => {
    buttonSubscribe.style.transform = "translateX(10px)"
  })
}


if (document.querySelector('.btn-learn-more')) {
  const buttonLearnMore = document.querySelector('.btn-learn-more')
  const moreText = "Our company is guaranteed to be able to organize and hold a holiday of any complexity. <br><br> Using our services, you will be satisfied. Our range of services is very extensive and will give you an unforgettable experience."
  const aboutUsTextPart2 = document.querySelector('.about-us-text-part-2')
  buttonLearnMore.addEventListener('click', (event) => {
    event.preventDefault()
    aboutUsTextPart2.innerHTML = moreText
    console.log("CLICKED")
  })
}


/*
    There 2 types of implementation of show toasts
    First function shows toast after 1500ms after loading the page
    Second function shows toast when user scrolled more than 700px
*/
const toastLiveExample = document.getElementById('liveToast')
const subscriptionToast = document.getElementById('subscription')

setTimeout(showToast, 1500)

function showToast() {
  const toast = new bootstrap.Toast(toastLiveExample)
  toast.show()
}

const email = document.querySelector('.input-subscribe')
if (email) {
  email.addEventListener('keypress', (event) => {
    console.log(event.keyCode)
    if (event.keyCode === 13) {
      event.preventDefault()
      const toast = new bootstrap.Toast(subscriptionToast)
      toast.show()
      audio.play();
    }
  })

}

const paragraphPlace = document.querySelectorAll('.paragraphPlace')
const serviceBoxes = document.querySelectorAll('.service-box')
serviceBoxes.forEach((serviceBox, index) => {
  console.log("CHECK1")
  serviceBox.addEventListener('mouseover', (event) => {
    console.log("CHECKKKK")
    paragraphPlace[index].style.display = "block"
  })
})


let bir = document.querySelector('.first');
let eki = document.querySelector('.second');
let uw = document.querySelector('.uw');

function first() {
 bir.style.display = "flex";
 eki.style.display = "none";
 uw.style.display = "none";
}

function second() {
  bir.style.display = "none";
  eki.style.display = "flex";
  uw.style.display = "none";
}
function third() {
 bir.style.display = "none";
 eki.style.display = "none";
 uw.style.display = "flex"; 
}