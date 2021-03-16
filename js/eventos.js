
const buttonMenu = document.querySelector('.btn--menu');
const contentMenu = document.querySelector('.content--enlaces')
buttonMenu.addEventListener('click', ()=>{
    buttonMenu.classList.toggle('is-active');
    contentMenu.classList.toggle('active-menu');
});
// ---------------------------------------

// mostrar banner;
const showBanner = document.querySelector('.showBanner');
window.addEventListener('DOMContentLoaded', ()=> {
     setTimeout(function(){
        showBanner.classList.add('active--banner');
     },50000);
});

const closeBanner = document.querySelector('.imgClose');
closeBanner.onclick = function(){
    showBanner.classList.remove('active--banner');
}
// --------------------------


// collapse event
const sectionCollapse = document.querySelector(".section--collapse");
const collapseContent = Array.from(document.querySelectorAll(".collapse--content"));
const h4 = Array.from(document.querySelectorAll(".h4--collapse"));

sectionCollapse.addEventListener("click", (e)=>{
 
      
      let indice = h4.indexOf(e.target);
      
      switch(indice){
          case 0:
              collapseContent[0].classList.add('collapse--content-active');
              collapseContent[1].classList.remove('collapse--content-active');
              collapseContent[2].classList.remove('collapse--content-active');
          break;
          case 1:
              collapseContent[0].classList.remove('collapse--content-active');
              collapseContent[1].classList.add('collapse--content-active');
              collapseContent[2].classList.remove('collapse--content-active');
          break;
          case 2:
              collapseContent[0].classList.remove('collapse--content-active');
              collapseContent[1].classList.remove('collapse--content-active');
              collapseContent[2].classList.add('collapse--content-active');
          break;
      }
});


// form
const form = document.querySelector('.form--footer');
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    Swal.fire({
        icon: 'success',
        title: 'Envio Completado!!',
        text: 'Sus datos fueron enviados correctamente',
        showConfirmButton: true,
        confirmButtonColor: '#20c997'
      })

      form.reset();
});


