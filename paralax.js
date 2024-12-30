
window.onload = function() {

  window.addEventListener('scroll', function(e) {
    
    let s = this.scrollY;
    let w = this.outerWidth;
    let h = document.getElementsByClassName('paralax')[0].clientWidth;
    let h_b = document.getElementsByClassName('container')[0].clientWidth;
    let p = s/h*100;
    let p_b = s/h_b*100;
    let opas = 1-1/100*p_b;
    let z_1 = 1 + (w / 10000 * p_b);
    document.getElementsByClassName('p-item4')[0].style= `transform: scale(${z_1});opacity: ${opas}`;
    let z_2 = 1+(w/5000000*p);
    document.getElementsByClassName('p-item1')[0].style= `transform: scale(${z_2})`;
    let hr = w/2000*p_b;
    let z_3 = 1+(w*0.000005*p_b);
    document.getElementsByClassName('p-item2')[0].style= `transform: translate3d(${hr}px,0,0) scale(${z_3})`;
    let hr_2 = w/1500*p_b;
    let z_4 = 1+(w*0.00001*p_b);
    document.getElementsByClassName('p-item3')[0].style= `transform: translate3d(${hr_2}px,0,0) scale(${z_4})`;
  })
  
} 


/*
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry) =>{
      if(entry.isIntersecting){
          entry.target.classList.add('show');
      }else{
          entry.target.classList.remove('show');
      }
  });
});



const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) =>observer.observe(el));

document.addEventListener('DOMContentLoaded', () => {
  const orbits = document.querySelectorAll('.orbit');

  // Add a slow rotation animation to each orbit
  orbits.forEach((orbit, index) => {
      orbit.style.animation = `rotateOrbit ${20 + index*5}s linear infinite`;
  });
});
*/

document.addEventListener('DOMContentLoaded', () => {
  const crystals = document.querySelectorAll('.crystal');
  
  crystals.forEach(crystal => {
      crystal.addEventListener('click', () => {
          // Toggle the 'open' class on click
          if (crystal.classList.contains('open')) {
              crystal.classList.remove('open');
          } else {
              // Close others if you only want one open at a time
              crystals.forEach(c => c.classList.remove('open'));
              crystal.classList.add('open');
          }
      });
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const projectSlider = document.querySelector('.project-timeline-slider');
  const projectTrack = document.querySelector('.project-timeline-track');
  const projectMarkers = document.querySelectorAll('.project-marker');
  const projectLeftArrow = document.querySelector('.project-left-arrow');
  const projectRightArrow = document.querySelector('.project-right-arrow');
  const projectInfoPanel = document.querySelector('.project-info-panel');
  const projectInfoTitle = document.querySelector('.project-info-title');
  const projectInfoDescription = document.querySelector('.project-info-description');

  const baseTranslate = 0; 
  const moveFactor = 10; // Adjust as needed

  function updateProjectTimeline() {
      const val = projectSlider.value;
      const offset = (50 - val) * moveFactor;
      projectTrack.style.transform = `translateX(${offset}px)`;
      updateActiveProjectMarker();
  }

  function updateActiveProjectMarker() {
      const containerRect = document.querySelector('.project-timeline-container').getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let closestMarker = null;
      let closestDistance = Infinity;

      projectMarkers.forEach(marker => {
          const markerRect = marker.getBoundingClientRect();
          const markerCenter = markerRect.left + markerRect.width / 2;
          const distance = Math.abs(markerCenter - containerCenter);
          if (distance < closestDistance) {
              closestDistance = distance;
              closestMarker = marker;
          }
      });

      if (closestMarker) {
          projectInfoTitle.textContent = closestMarker.dataset.title;
          projectInfoDescription.textContent = closestMarker.dataset.details;
          projectInfoPanel.classList.add('show');
      }
  }

  // Initialize
  updateProjectTimeline();

  projectSlider.addEventListener('input', updateProjectTimeline);

  projectLeftArrow.addEventListener('click', () => {
      projectSlider.value = Math.max(0, projectSlider.value - 5);
      updateProjectTimeline();
  });

  projectRightArrow.addEventListener('click', () => {
      projectSlider.value = Math.min(100, parseInt(projectSlider.value) + 5);
      updateProjectTimeline();
  });

  window.addEventListener('resize', updateProjectTimeline);
});

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

function closeSidebar(event) {
  // Prevent default link behavior if needed
  event.preventDefault();
  // Logic to hide the sidebar
  document.querySelector('nav.sidebar').style.display = 'none';
  // or if you have a class toggle
  // document.querySelector('nav.sidebar').classList.remove('active');
}

function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('.star');
  const tooltip = document.querySelector('.star-tooltip');
  const modal = document.querySelector('.detail-modal');
  const detailTitle = document.querySelector('.detail-title');
  const detailDescription = document.querySelector('.detail-description');
  const closeModalBtn = document.querySelector('.close-modal');

  let currentStar = null;

  stars.forEach(star => {
      // Show tooltip on hover
      star.addEventListener('mousemove', (e) => {
          const title = star.getAttribute('data-title');
          const info = star.getAttribute('data-info');
          tooltip.innerHTML = `<strong>${title}</strong><br>${info}`;
          tooltip.style.opacity = 1;
          tooltip.style.left = (e.pageX + 10) + 'px';
          tooltip.style.top = (e.pageY + 10) + 'px';
      });

      star.addEventListener('mouseleave', () => {
          tooltip.style.opacity = 0;
      });

      // Clicking a star to show more details
      star.addEventListener('click', () => {
          const title = star.getAttribute('data-title');
          const info = star.getAttribute('data-info');
          detailTitle.textContent = title;
          detailDescription.textContent = info + " (More detailed description, course lists, achievements, etc.)";
          modal.style.display = 'flex';
      });
  });

  closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  // Close modal if clicked outside detail-content
  modal.addEventListener('click', (e) => {
      if (e.target === modal) {
          modal.style.display = 'none';
      }
  });
});




const detailTitle = document.querySelector('.detail-title');
  const detailDescription = document.querySelector('.detail-description');
  const closeModalBtn = document.querySelector('.close-modal');

  planets.forEach(planet => {
      planet.addEventListener('click', () => {
          const title = planet.getAttribute('data-title');
          const info = planet.getAttribute('data-info');
          detailTitle.textContent = title;
          detailDescription.textContent = info;
          modal.style.display = 'flex';
      });
  });

  closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
  });
  
  
