// ==========================================
// 1. URL CLEANER (Blogger ?m=1 Fix)
// ==========================================
const prinshm1 = window.location.toString();
if (prinshm1.indexOf("?m=1") > 0) {
  const clean_nprinsh = prinshm1.substring(0, prinshm1.indexOf("?m=1"));
  window.history.replaceState({}, document.title, clean_nprinsh);
}

// ==========================================
// 2. PRELOADER & WINDOW LOAD
// ==========================================
document.body.classList.add('no-scroll');
window.addEventListener('load', function() {
  const preloader = document.getElementById('yjg-preloader');
  if (preloader) {
    setTimeout(function() {
      preloader.classList.add('fade-out');
      document.body.classList.remove('no-scroll');
    }, 500);
  } else {
    document.body.classList.remove('no-scroll'); // Fallback jika tidak ada preloader
  }
});

// ==========================================
// 3. MAIN DOM SCRIPT
// Semua fungsi disatukan di sini agar efisien
// ==========================================
document.addEventListener("DOMContentLoaded", function () {

  // --- A. HERO SLIDER ---
  const slides = document.querySelectorAll(".hero-bg-slider .slide");
  if (slides.length > 0) {
    let index = 0;
    setInterval(() => {
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    }, 5000);
  }

  // --- B. STICKY HEADER ---
  const header = document.querySelector('.yjg-header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('is-sticky');
      } else {
        header.classList.remove('is-sticky');
      }
    });
  }

  // --- C. TIMELINE MODAL ---
  const modal = document.getElementById("timelineModal");
  const timelineCards = document.querySelectorAll(".timeline-card");
  
  if (modal && timelineCards.length > 0) {
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");
    const modalIcon = document.getElementById("modalIcon");
    const closeBtn = document.querySelector(".close-modal");

    timelineCards.forEach(card => {
      card.addEventListener("click", function() {
        const titleEl = this.querySelector('h3');
        const iconEl = this.querySelector('.tl-icon');
        const btnSelengkapnya = this.querySelector('.btn-selengkapnya');
        
        if (modalTitle && titleEl) modalTitle.innerText = titleEl.innerText;
        if (modalIcon && iconEl) modalIcon.innerHTML = iconEl.innerHTML;
        if (modalText && btnSelengkapnya) modalText.innerText = btnSelengkapnya.getAttribute("data-full-text");

        modal.classList.add("active");
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    }

    window.addEventListener("click", function(event) {
      if (event.target === modal) modal.classList.remove("active");
    });
  }

  // --- D. COUNTER ANIMATION ---
  const counters = document.querySelectorAll(".counter");
  if (counters.length > 0) {
    function easeOutExpo(t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function formatNumber(num) {
      return num.toLocaleString("id-ID");
    }

    function animateCounter(el, delay = 0) {
      const target = +el.getAttribute("data-target");
      const duration = 1600;
      let startTime = null;

      setTimeout(() => {
        const statItem = el.closest(".stat-item");
        if(statItem) statItem.classList.add("show");

        function animate(time) {
          if (!startTime) startTime = time;
          const progress = (time - startTime) / duration;
          const eased = easeOutExpo(Math.min(progress, 1));
          const value = Math.floor(eased * target);

          el.innerText = formatNumber(value);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            el.innerText = formatNumber(target);
            if(statItem) statItem.classList.add("done");
          }
        }
        requestAnimationFrame(animate);
      }, delay);
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          counters.forEach((counter, index) => {
            animateCounter(counter, index * 120);
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });

    const statsGrid = document.querySelector(".stats-grid");
    if (statsGrid) observer.observe(statsGrid);
  }

  // --- E. LEADERS TRACK SLIDER ---
  const track = document.querySelector("#yjg-foundation .leaders-track");
  if (track && track.children.length > 0) {
    const originalCards = Array.from(track.children);
    originalCards.forEach(card => {
      const clone = card.cloneNode(true);
      clone.setAttribute("aria-hidden", "true"); 
      track.appendChild(clone);
    });

    const slideInterval = 3000;
    const transitionDuration = 500;
    let slideTimer;

    function slideNext() {
      if (track.children.length < 2) return;
      const firstCard = track.children[0];
      const secondCard = track.children[1];
      const slideDistance = secondCard.getBoundingClientRect().left - firstCard.getBoundingClientRect().left;

      track.style.transition = `transform ${transitionDuration}ms ease-in-out`;
      track.style.transform = `translateX(-${slideDistance}px)`;

      setTimeout(() => {
        track.style.transition = "none";
        track.style.transform = "translateX(0)";
        track.appendChild(firstCard);
      }, transitionDuration);
    }

    function startSlider() {
      clearInterval(slideTimer); 
      slideTimer = setInterval(slideNext, slideInterval);
    }

    function stopSlider() {
      clearInterval(slideTimer);
    }

    setTimeout(startSlider, 500);

    track.addEventListener("mouseenter", stopSlider);
    track.addEventListener("mouseleave", startSlider);
    track.addEventListener("touchstart", stopSlider, {passive: true});
    track.addEventListener("touchend", startSlider, {passive: true});
  }

  // --- F. REVEAL ANIMATION ---
  const revealElements = document.querySelectorAll(".reveal, .stagger-group");
  if (revealElements.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // --- G. MOBILE MENU ---
  const mobileToggle = document.querySelector(".mobile-menu-toggle");
  const headerNav = document.querySelector(".header-nav");
  const dropdownToggles = document.querySelectorAll(".nav-item.has-dropdown > a");

  function closeMobileMenu() {
    if (mobileToggle) mobileToggle.classList.remove("is-active");
    if (headerNav) headerNav.classList.remove("is-active");
    document.body.style.overflow = ""; 

    document.querySelectorAll(".dropdown-menu").forEach(menu => {
      menu.style.maxHeight = null;
    });
    document.querySelectorAll(".dropdown-icon").forEach(icon => {
      icon.style.transform = "rotate(0deg)";
    });
  }

  if (mobileToggle && headerNav) {
    mobileToggle.addEventListener("click", function(e) {
      e.stopPropagation();
      if (headerNav.classList.contains("is-active")) {
        closeMobileMenu();
      } else {
        this.classList.add("is-active");
        headerNav.classList.add("is-active");
        document.body.style.overflow = "hidden";
      }
    });
  }

  document.addEventListener("click", function(e) {
    if (headerNav && headerNav.classList.contains("is-active")) {
      if (!headerNav.contains(e.target) && mobileToggle && !mobileToggle.contains(e.target)) {
        closeMobileMenu();
      }
    }
  });

  const regularLinks = document.querySelectorAll(".nav-item:not(.has-dropdown) > a");
  regularLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 991) closeMobileMenu();
    });
  });

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener("click", function(e) {
      if (window.innerWidth <= 991) {
        e.preventDefault(); 
        const dropdownMenu = this.nextElementSibling;
        const icon = this.querySelector(".dropdown-icon");

        if (dropdownMenu && dropdownMenu.style.maxHeight) {
          dropdownMenu.style.maxHeight = null;
          if (icon) icon.style.transform = "rotate(0deg)";
        } else {
          document.querySelectorAll(".dropdown-menu").forEach(menu => menu.style.maxHeight = null);
          document.querySelectorAll(".dropdown-icon").forEach(ic => ic.style.transform = "rotate(0deg)");
          
          if(dropdownMenu) dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
          if (icon) icon.style.transform = "rotate(180deg)";
        }
      }
    });
  });

  // --- H. BACK TO TOP BUTTON ---
  const backToTopBtn = document.getElementById("btn-back-to-top");
  if (backToTopBtn) {
    window.addEventListener("scroll", function() {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });

    backToTopBtn.addEventListener("click", function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // --- I. ACCORDION ---
  const groupHeaders = document.querySelectorAll(".group-header");
  groupHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      header.classList.toggle("active");
      const content = header.nextElementSibling;
      if (content) content.classList.toggle("open");
    });
  });

  // --- J. FILTER & SEARCH ---
  const filterButtons = document.querySelectorAll(".school-filter button");
  const schoolCards = document.querySelectorAll(".school-card");

  if (filterButtons.length > 0 && schoolCards.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        schoolCards.forEach((card) => {
          if (filter === "all" || card.dataset.category === filter) {
            card.classList.remove("hide");
          } else {
            card.classList.add("hide");
          }
        });
      });
    });
  }

  const searchInput = document.getElementById("schoolSearch");
  if (searchInput && schoolCards.length > 0) {
    searchInput.addEventListener("keyup", () => {
      const keyword = searchInput.value.toLowerCase();

      schoolCards.forEach((card) => {
        const name = card.dataset.name ? card.dataset.name.toLowerCase() : "";
        if (name.includes(keyword)) {
          card.classList.remove("hide");
        } else {
          card.classList.add("hide");
        }
      });
    });
  }

});

/* DOWNLOAD CENTER */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENT
    ===================================================== */

    const searchInput = document.querySelector(".download-search input");
    const cards = document.querySelectorAll(".download-card");
    const filters = document.querySelectorAll(".download-filter button");



    /* =====================================================
       LIVE SEARCH
    ===================================================== */

    searchInput.addEventListener("keyup", function(){

        const keyword = this.value.toLowerCase();

        cards.forEach(card=>{

            const title = card.querySelector("h3").textContent.toLowerCase();

            const desc = card.querySelector("p").textContent.toLowerCase();

            if(
                title.includes(keyword) ||
                desc.includes(keyword)
            ){

                card.style.display="flex";

            }else{

                card.style.display="none";

            }

        });

    });



    /* =====================================================
       CATEGORY FILTER
    ===================================================== */

    filters.forEach(button=>{

        button.addEventListener("click",()=>{

            filters.forEach(btn=>btn.classList.remove("active"));

            button.classList.add("active");

            const category = button.textContent.trim().toLowerCase();

            document.querySelectorAll(".download-section").forEach(section=>{

                const title = section.querySelector("h2")
                    .textContent
                    .trim()
                    .toLowerCase();

                if(category==="semua"){

                    section.style.display="block";

                }else{

                    section.style.display =
                        title===category ? "block":"none";

                }

            });

        });

    });



    /* =====================================================
       CARD REVEAL
    ===================================================== */

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    cards.forEach(card=>observer.observe(card));



    /* =====================================================
       RIPPLE BUTTON
    ===================================================== */

    document.querySelectorAll(".btn").forEach(button=>{

        button.addEventListener("click",function(e){

            const ripple=document.createElement("span");

            ripple.className="ripple";

            const rect=this.getBoundingClientRect();

            ripple.style.left=(e.clientX-rect.left)+"px";

            ripple.style.top=(e.clientY-rect.top)+"px";

            this.appendChild(ripple);

            setTimeout(()=>{

                ripple.remove();

            },600);

        });

    });



});