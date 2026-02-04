function toggleMenu(){
  const menu = document.getElementById("menu2");
  if(menu) menu.classList.toggle("open");
}

document.addEventListener("click", (e) => {
  const menu = document.getElementById("menu2");
  const btn = document.querySelector(".menuBtn");
  if(!menu || !btn) return;

  const clickedInside = menu.contains(e.target) || btn.contains(e.target);
  if(!clickedInside) menu.classList.remove("open");
});

const year = document.getElementById("year");
if(year) year.textContent = new Date().getFullYear();