/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

// Add event listener to window for scroll events
window.addEventListener('scroll', function () {
  // Get all navigation links and their corresponding sections
  const navLinks = document.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('section');

  // Loop through each section and check if it's in the viewport
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      // Remove active class from all nav links
      navLinks.forEach((navLink) => navLink.classList.remove('active'));

      // Find the corresponding nav link for the current section and add the active class
      const navLink = document.querySelector(`a[href="#${section.id}"]`);
      navLink.classList.add('active');
    }
  });
});

/* Otherwise just put the config content (json): */

particlesJS(
  'particles-js',

  {
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
          value_area: 700,
        },
      },
      color: {
        value: '#88c8ff',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000',
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#88c8ff',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      background_color: '#b61924',
      background_image: '',
      background_position: '50% 50%',
      background_repeat: 'no-repeat',
      background_size: 'cover',
    },
  }
);
