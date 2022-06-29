const countDownDate = new Date('Dec 31, 2022 23:59:59').getTime();

const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

const counter = setInterval(() => {
  const dateNow = new Date().getTime();

  const dateDiff = countDownDate - dateNow

  const days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((dateDiff % (1000 * 60 )) / 1000);

  Days.innerHTML = days < 100 ? `0${days}` : days < 10 ? `00${days}` : days;
  Hours.innerHTML = hours < 10 ? `0${hours}` : hours;
  Minutes.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  Seconds.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if(dateDiff < 0) {
    clearInterval(counter);
  }

}, 1000)


// Progress bar

const progressSpans = document.querySelectorAll(".progress span");
const section = document.querySelector("#our-skills");
const precentageSpan = document.querySelectorAll('#our-skills h3 span');
const stats = document.querySelectorAll('#stats .card h1');
const statsSection = document.querySelector('#stats');
var startedProgress = false;
var startedStats = false;

window.onscroll = function () {
  // Skills Animate Width
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach(span => {
      span.style.width = span.dataset.width;
    });
    if (!startedProgress) {
      precentageSpan.forEach(span => {
        const target = span.dataset.goal;
        var value = span.textContent;
        let count = setInterval(() => {
          value++;
          span.textContent = `${value}%`
          if (value == target) {
            clearInterval(count);
          }
        }, 20)
      })
      startedProgress = true;
    }
  }
  // States counter
  if (window.scrollY >= statsSection.offsetTop - 250) {
    if (!startedStats) {
      stats.forEach(stat => {
        Count(stat);
      })
      startedStats = true;
    }
  }
};

const Count = el => {
  const target = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == target) {
      clearInterval(count);
    }
  }, 10)
}

// Live Events Counter 


