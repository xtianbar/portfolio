let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 300) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#363638 ${scrollValue}%, gray ${scrollValue}%)`;
  };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
  

  /**
   * Navbar links active state on scroll
   */
  let navbarLinks = select('#navbarLinks .scrollto', true)
  const navbarLinksActive = () => {
    let position = window.scrollY + 200
    navbarLinks.forEach(navbarLinks => {
      if (!navbarLinks.hash) return
      let section = select(navbarLinks.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarLinks.classList.add('active')
      } else {
        navbarLinks.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarLinksActive)
  onscroll(document, navbarLinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }
