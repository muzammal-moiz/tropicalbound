//navbar outerclick close code 

function closeNavbar(event) {
    const navbar = document.getElementById('navbarText');
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbar.contains(event.target) || navbarToggler.contains(event.target)) {
      
    } else {
      if (navbar.classList.contains('show')) {
        navbarToggler.click();
      }
    }
  }
  
  document.addEventListener('click', closeNavbar);
  