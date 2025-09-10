// simple collapsible sections
document.querySelectorAll('.section-toggle').forEach(btn=>{
  btn.addEventListener('click',()=>btn.nextElementSibling.classList.toggle('open'));
});
document.querySelectorAll('.sub-toggle').forEach(btn=>{
  btn.addEventListener('click',()=>btn.nextElementSibling.classList.toggle('open'));
});

// mark current page in sidebar (basic)
const here = location.pathname.split('/').pop();
document.querySelectorAll('.nav-item').forEach(a=>{
  if (a.getAttribute('href').endsWith(here)) a.classList.add('active');
});
