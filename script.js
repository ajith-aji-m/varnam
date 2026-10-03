const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();const observer=new IntersectionObserver((entries)=>entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll(".reveal").forEach((el)=>observer.observe(el));

/* Varnam pointer ripple */
document.querySelectorAll(".art-wrap,.editorial-image,.full-bleed-stage").forEach((area)=>{
  area.addEventListener("pointermove",(event)=>{
    const rect=area.getBoundingClientRect();
    area.style.setProperty("--mx",((event.clientX-rect.left)/rect.width)*100+"%");
    area.style.setProperty("--my",((event.clientY-rect.top)/rect.height)*100+"%");
  });
  area.addEventListener("pointerleave",()=>{
    area.style.setProperty("--mx","50%");
    area.style.setProperty("--my","50%");
  });
});


/* Give the contact section a denser, organic star field */
const contactStars=document.querySelector(".contact-stars");
if(contactStars){
  const stars=document.createDocumentFragment();
  for(let i=0;i<34;i++){
    const star=document.createElement("i");
    star.setAttribute("aria-hidden","true");
    const size=(Math.random()*2.2+.7).toFixed(2);
    star.style.cssText=`position:absolute;left:${55+Math.random()*43}%;top:${Math.random()*100}%;width:${size}px;height:${size}px;border-radius:50%;background:#f4d8aa;opacity:${(.25+Math.random()*.65).toFixed(2)};box-shadow:0 0 ${(2+Math.random()*5).toFixed(1)}px #e7bf7a66;animation:individualStar ${(5+Math.random()*8).toFixed(2)}s ease-in-out ${(-Math.random()*8).toFixed(2)}s infinite alternate;`;
    stars.appendChild(star);
  }
  contactStars.appendChild(stars);
}
