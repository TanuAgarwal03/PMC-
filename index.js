const mouseEntered = (element) =>{
    if (element) {
        const UlElement = element.querySelector('ul');
    
        if (UlElement) {
          UlElement.classList.add('show');
        }
      }
  }
  const mouseRemove = (element) =>{
    if (element) {
        const UlElement = element.querySelector('ul');
    
        if (UlElement) {
          UlElement.classList.remove('show');
        }
      }
  }

  let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.documentElement.scrollTop = 0;
}

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navpmc');
  const navbarElements = document.querySelectorAll('.navpmc .nav-link');

  if (window.scrollY > 100) {
    navbar.classList.remove('custom-nav-bg');
    navbar.classList.add('nav-bg-white');
    navbarElements.forEach(element => {
      element.classList.remove('text-white');
      element.classList.add('text-black');
    });
  } else {
    navbar.classList.remove('nav-bg-white');
    navbar.classList.add('custom-nav-bg');
    navbarElements.forEach(element => {
      element.classList.remove('text-black');
      element.classList.add('text-white');
    });
  }
});
