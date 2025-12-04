
window.addEventListener("load", () => {
  emailjs.init("xsUFr6400Nt72pQLf"); // your actual Public Key

  const form = document.getElementById("contact-form");
  const overlay = document.getElementById("overlay");
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popup-title");
  const popupMsg = document.getElementById("popup-msg");
  const popupBtn = document.getElementById("popup-btn");

  function showPopup(title, msg, isSuccess) {
    popupTitle.textContent = title;
    popupMsg.textContent = msg;
    popup.className = "popup " + (isSuccess ? "success" : "error");
    overlay.classList.add("active");
  }

  popupBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
  });

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    emailjs.sendForm('service_6oesnf9', 'template_uo3iwwo', this)
      .then(() => {
        showPopup("✅ Message Sent", "Thanks for reaching out! I’ll reply soon.", true);
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        showPopup("❌ Failed", "There was a problem sending your message.", false);
      });
  });
});



(function(){
  const el=document.getElementById('type-target');
  const strings=[' a Front-end Developer.','a UI/UX Designer.','a Graphic Designer'];
  let si=0, idx=0, typing=true;
  function tick(){
    const full=strings[si];
    el.textContent=full.slice(0,idx);
    if(typing){
      idx++;
      if(idx>full.length){
        typing=false;
        setTimeout(tick,900);
        return;
      }
    } else {
      idx--;
      if(idx<0){
        typing=true;
        si=(si+1)%strings.length;
        idx=0;
      }
    }
    setTimeout(tick, typing?80:30);
  }
  tick();
})();



const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileNav.classList.toggle("active");
});

document.querySelectorAll("#mobileNav a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileNav.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded",function(){
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".hero .eyebrow, .hero h1, .hero p, .hero-ctas",{opacity:0,y:30,stagger:0.2,duration:1,ease:"power3.out"});
  gsap.from("#feature",{opacity:0,x:60,duration:1,ease:"power3.out",delay:0.5});
  gsap.to("#floatingCard",{y:10,repeat:-1,yoyo:true,duration:2,ease:"sine.inOut"});
  gsap.utils.toArray(".projects-grid .card").forEach(card=>{
    gsap.from(card,{scrollTrigger:{trigger:card,start:"top 80%"},opacity:0,y:50,duration:0.8,ease:"power3.out"});
  });
  gsap.from("#about > div",{scrollTrigger:{trigger:"#about",start:"top 80%"},opacity:0,y:40,stagger:0.2,duration:1,ease:"power3.out"});
});