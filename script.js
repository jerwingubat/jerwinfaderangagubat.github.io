const toolsDiv = document.querySelector('.tools');

window.addEventListener('scroll', function() {
    if (toolsDiv.getBoundingClientRect().top <= window.innerHeight) {
        toolsDiv.classList.add('slide-in');
    } else {
        toolsDiv.classList.remove('slide-in');
        toolsDiv.classList.add('slide-out');
    }
});

window.addEventListener('scroll', function() {
    if (toolsDiv.classList.contains('slide-out')) {
        toolsDiv.classList.remove('slide-out');
    }
});



const technicalSkillsDiv = document.querySelector('.technical-skills');

window.addEventListener('scroll', function() {
    if (technicalSkillsDiv.getBoundingClientRect().top <= window.innerHeight) {
        technicalSkillsDiv.classList.add('slide-in-technical');
    } else {
        technicalSkillsDiv.classList.remove('slide-in-technical');
        technicalSkillsDiv.classList.add('slide-out-technical');
    }
});

window.addEventListener('scroll', function() {
    if (technicalSkillsDiv.classList.contains('slide-out-technical')) {
        technicalSkillsDiv.classList.remove('sslide-out-technical');
    }
});


const trainingsWebinars = document.querySelector('.trainings-webinars');

const options = {
  root: null, // Use the viewport as the root
  threshold: 0.5 // Fire the callback when 50% of the element is visible
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      trainingsWebinars.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(callback, options);
observer.observe(trainingsWebinars);

