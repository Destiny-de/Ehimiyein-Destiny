// smooth scroll
document.querySelectorAll('[data-scroll]').forEach(btn=>{
  btn.addEventListener('click',e=>{
    const id = btn.getAttribute('data-scroll');
    const target = document.querySelector(id);
    if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
  })
});

// typewriter
(function(){
  const el = document.getElementById('type-target');
  const strings = ['Ehimiyein Destiny.',' a Front-end Engineer.','UI Designer.'];
  let si=0, idx=0, typing=true;
  function tick(){
    const full = strings[si];
    el.textContent = full.slice(0, idx);
    if(typing){ idx++; if(idx>full.length){ typing=false; setTimeout(tick,900); return }}
    else { idx--; if(idx<0){ typing=true; si=(si+1)%strings.length; idx=0; } }
    setTimeout(tick, typing?80:30);
  }
  tick();
})();

// reveal on scroll
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.style.transform='translateY(0)';
  })
},{threshold:0.12});
document.querySelectorAll('.project, .card').forEach(n=>{
  n.style.transform='translateY(12px)';
  n.style.transition='transform .6s cubic-bezier(.2,.9,.3,1)';
  obs.observe(n);
});
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('button');
  btn.textContent = 'Sending...';


  
  emailjs.sendForm('service_6oesnf9', 'template_8t46006', this)
    .then(() => {
      alert('✅ Message sent successfully!');
      this.reset();
      btn.textContent = 'Send message';
    }, (err) => {
      alert('❌ Failed to send message. Please try again later.');
      btn.textContent = 'Send message';
      console.error(err);
    });
});


// set year
document.getElementById('2025').textContent = new Date().getFullYear();
