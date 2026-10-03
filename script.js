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
