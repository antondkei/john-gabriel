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


/* =========================================================
   YJG FOUNDATION
   DYNAMIC BLOGGER NEWS (FIXED)
========================================================= */

// Menggunakan DOMContentLoaded agar script menunggu HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function () {

  const newsContainer = document.getElementById('yjg-news-feed');
  if (!newsContainer) return;

  /* =======================================================
     CONFIG
  ======================================================= */
  const BLOG_URL = 'https://www.johngabriel.org';
  const POST_LIMIT = 3;
  const FEED_URL = `${BLOG_URL}/feeds/posts/default?alt=json&max-results=${POST_LIMIT}`;

  /* =======================================================
     DATE FORMAT
  ======================================================= */
  function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  }

  /* =======================================================
     GET IMAGE
  ======================================================= */
  function getPostImage(entry) {
    // 1. Coba ambil dari thumbnail Blogger
    if (entry.media$thumbnail && entry.media$thumbnail.url) {
      return entry.media$thumbnail.url.replace('/s72-c/', '/s1200/');
    }

    // 2. Fallback: cari tag <img> di dalam konten artikel
    if (entry.content && entry.content.$t) {
      const imageMatch = entry.content.$t.match(/<img[^>]+src=["']([^"']+)["']/i);
      if (imageMatch) return imageMatch[1];
    }

    // 3. Gambar default jika artikel tidak punya gambar
    return 'https://i.ibb.co.com/TMbTnMNW/Hero-5.avif';
  }

  /* =======================================================
     GET EXCERPT (DIPERBAIKI)
  ======================================================= */
  function getExcerpt(entry) {
    // Gunakan summary jika ada, jika tidak gunakan content penuh
    const rawHtml = (entry.summary && entry.summary.$t) || (entry.content && entry.content.$t) || '';
    if (!rawHtml) return '';

    const temp = document.createElement('div');
    temp.innerHTML = rawHtml;
    
    // Ambil hanya teks murni
    let text = temp.textContent || temp.innerText || '';
    text = text.replace(/\s+/g, ' ').trim();

    // Batasi hingga 120 karakter agar layout card tidak rusak
    return text.length > 120 ? text.substring(0, 120) + '...' : text;
  }

  /* =======================================================
     GET CATEGORY
  ======================================================= */
  function getCategory(entry) {
    if (entry.category && entry.category.length) {
      return entry.category[0].term;
    }
    return 'Berita';
  }

  /* =======================================================
     GET POST URL
  ======================================================= */
  function getPostUrl(entry) {
    if (!entry.link) return '#';
    const alternate = entry.link.find(link => link.rel === 'alternate');
    return alternate ? alternate.href : '#';
  }

  /* =======================================================
     CREATE NEWS CARD
  ======================================================= */
  function createNewsCard(entry, index) {
    const title = entry.title?.$t || 'Tanpa Judul';
    const image = getPostImage(entry);
    const excerpt = getExcerpt(entry);
    const category = getCategory(entry);
    const url = getPostUrl(entry);
    const date = formatDate(entry.published.$t);

    const card = document.createElement('article');
    card.className = index === 0
      ? 'news-card news-card-featured reveal reveal-up'
      : 'news-card reveal reveal-up';

    card.innerHTML = `
      <div class='news-card-image' style='background-image:url("${image}")'></div>
      <div class='news-card-overlay'></div>
      <div class='news-card-content'>
        <span class='news-card-category'>${category}</span>
        <h3 class='news-card-title'>${title}</h3>
        ${
          index === 0 && excerpt
            ? `<p class='news-card-excerpt'>${excerpt}</p>`
            : ''
        }
        <div class='news-card-meta'>
          <span>${date}</span>
          <span class='news-card-meta-dot'></span>
          <span>Baca selengkapnya</span>
        </div>
      </div>
      <a class='news-card-link' href='${url}' aria-label='Baca ${title}'></a>
    `;

    return card;
  }

  /* =======================================================
     LOAD NEWS
  ======================================================= */
  async function loadNews() {
    try {
      const response = await fetch(FEED_URL);

      if (!response.ok) {
        throw new Error('Blogger Feed tidak dapat diakses.');
      }

      const data = await response.json();
      const posts = data.feed?.entry || [];

      /* No posts */
      if (!posts.length) {
        newsContainer.innerHTML = `<div class='news-empty'>Belum ada tulisan terbaru.</div>`;
        return;
      }

      /* Clear loading state */
      newsContainer.innerHTML = '';

      /* Render latest posts */
      posts.slice(0, POST_LIMIT).forEach((entry, index) => {
        const card = createNewsCard(entry, index);
        newsContainer.appendChild(card);
      });

      /* Re-initialize reveal animation (jika ada) */
      if (typeof window.initRevealAnimations === 'function') {
        window.initRevealAnimations();
      }

    } catch (error) {
      console.error('[YJG NEWS]', error);
      newsContainer.innerHTML = `<div class='news-empty'>Belum dapat memuat tulisan terbaru.</div>`;
    }
  }

  /* =======================================================
     INITIALIZE
  ======================================================= */
  loadNews();

});