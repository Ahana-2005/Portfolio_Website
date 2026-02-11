// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault();
  const name = e.target[0].value;
  const email = e.target[1].value;
  const message = e.target[2].value;

  alert(`🚀 Thanks ${name}! Your message is flying through neon cyberspace...`);
});

// Scroll-triggered Heading Animation
const animatedHeadings = document.querySelectorAll('.animated-heading');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.5 });

animatedHeadings.forEach(heading => {
  heading.style.animationPlayState = 'paused';
  observer.observe(heading);
});

// Neon background effect
document.body.addEventListener("mousemove", e => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  document.body.style.background = `radial-gradient(circle at ${x*100}% ${y*100}%, #111 0%, #000 100%)`;

});
