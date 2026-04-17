
  const PRODUCTS = {
    'BALUCHARI-405': {
      product: 'Baluchari Silk Saree',
      artisan: 'Ananya Devi',
      origin: 'Bishnupur, West Bengal',
      date: '12 Mar 2025',
      gi: 'WB-GI-2409',
      block: '48,221',
      hash: '0x3f4a8c2d91b7e6f0a45...d82c'
    },
    'DARJ-2024-881': {
      product: 'Darjeeling First Flush Tea',
      artisan: 'Makaibari Estate',
      origin: 'Darjeeling, West Bengal',
      date: '04 Apr 2024',
      gi: 'WB-GI-0102',
      block: '41,998',
      hash: '0x9b2c7e4f13a0d56f8...a931'
    }
  };
//edited
  document.addEventListener("DOMContentLoaded", function () {

  const mobileBtn = document.getElementById("mobile-nav-btn");
  const desktopBtn = document.getElementById("desktop-nav-btn");

  function launchApp() {

    window.location.href = "aura.html"; 
   
  }

  if (mobileBtn) {
    mobileBtn.addEventListener("click", launchApp);
  }

  if (desktopBtn) {
    desktopBtn.addEventListener("click", launchApp);
  }

});
document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById("view-all-btn");
  const extraProducts = document.querySelectorAll(".extra-product");

  let expanded = false;

  btn.addEventListener("click", function () {

    expanded = !expanded;

    extraProducts.forEach(product => {
      product.style.display = expanded ? "block" : "none";
    });

    btn.textContent = expanded ? "Show Less" : "View All Products";

  });

});

document.addEventListener("DOMContentLoaded", function () {

  const verifyButtons = document.querySelectorAll(".view-btn");

  verifyButtons.forEach(button => {
    button.addEventListener("click", function () {

     
      alert("Product Verified ✅\nAuthentic GI Tagged Item");

    });
  });

});
//
  function runVerify() {
    const input = document.getElementById('hashInput');
    const val = input.value.trim().toUpperCase();
    const res = document.getElementById('scanResult');
    const notFound = document.getElementById('notFoundResult');
    const btn = input.nextElementSibling;

    if (!val) return;

    res.classList.remove('visible');
    notFound.style.display = 'none';

    const originalText = btn.textContent;
    btn.classList.add('btn-loading');

    setTimeout(() => {
      btn.classList.remove('btn-loading');
      btn.textContent = originalText;

      const data = PRODUCTS[val] || PRODUCTS[Object.keys(PRODUCTS).find(k => k === val) || ''];
      if (data) {
        document.getElementById('rProduct').textContent = data.product;
        document.getElementById('rArtisan').textContent = data.artisan;
        document.getElementById('rOrigin').textContent = data.origin;
        document.getElementById('rDate').textContent = data.date;
        document.getElementById('rGI').textContent = data.gi;
        document.getElementById('rBlock').textContent = data.block;
        document.getElementById('rHash').textContent = data.hash;
        document.getElementById('resultSub').textContent = 'Authentic GI-tagged product · ' + data.gi;
        res.classList.add('visible');
        res.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        notFound.style.display = 'block';
        notFound.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 1200);
  }
  document.getElementById('hashInput').addEventListener('keydown', e => { if (e.key === 'Enter') runVerify(); });

  // Scroll Reveal Observer
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal').forEach(el => {
    const parent = el.parentElement;
    if (parent.classList.contains('how-grid') || parent.classList.contains('products-grid') || parent.classList.contains('stats-strip')) {
      const index = Array.from(parent.children).indexOf(el);
      el.style.transitionDelay = `${index * 0.1}s`;
    }
    revealObserver.observe(el);
  });

  // Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  document.getElementById("mobile-nav-btn").addEventListener("click", function() {
    window.open("https://yourapp.com");
});
  // Number Counter Animation
  const countObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetText = el.textContent;
        const isCurrency = targetText.includes('₹');
        const targetNum = parseFloat(targetText.replace(/[^0-9.]/g, ''));
        const duration = 2000;
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
          const elapsed = currentTime - startTime;
          if (elapsed < duration) {
            const progress = elapsed / duration;
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = targetNum * easeOut;

            if (isCurrency) el.textContent = '₹' + currentVal.toFixed(2);
            else el.textContent = Math.floor(currentVal).toLocaleString('en-IN');

            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = targetText;
          }
        };
        requestAnimationFrame(updateCounter);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-num').forEach(el => countObserver.observe(el));

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => navLinks.classList.toggle('nav-open'));
  }

  // Smooth scrolling for internal links
  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const text = this.textContent.trim();
      let targetSection;
      const sections = document.querySelectorAll('section');
      if (text === 'How It Works') targetSection = sections[1];
      else if (text === 'Products') targetSection = sections[3];
      else if (text === 'AI Guardian') targetSection = sections[2];
      else if (text === 'Artisans') targetSection = document.querySelector('.testimonial-section');
      else if (text === 'Verify') targetSection = document.querySelector('.scan-section');

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        navLinks.classList.remove('nav-open');
      }
    });
  });

  // Live Feed Simulation
  const feedContainer = document.querySelector('.ai-feed');
  const feedTemplates = [
    { status: 'status-scan', text: '<strong>New batch minted</strong> — Artisan Priya Das registered Kanchipuram Silk batch #89 via WhatsApp', time: 'Just now · Block 48,225' },
    { status: 'status-verify', text: '<strong>Authentication success</strong> — Consumer scan in Mumbai verified Baluchari Silk #WB-2409', time: 'Just now' },
    { status: 'status-blocked', text: '<strong>Counterfeit blocked</strong> — Listing "Original Pashmina" on Amazon flagged: Vision mismatch detected', time: 'Just now · Takedown filed' }
  ];

  setInterval(() => {
    if (!document.hidden && Math.random() > 0.4) {
      const template = feedTemplates[Math.floor(Math.random() * feedTemplates.length)];
      const newItem = document.createElement('div');
      newItem.className = 'feed-item new-item';
      newItem.innerHTML = `
      <div class="feed-status ${template.status}"></div>
      <div class="feed-text">
        ${template.text}
        <div class="feed-time">${template.time}</div>
      </div>
    `;

      const header = feedContainer.querySelector('.feed-header');
      header.insertAdjacentElement('afterend', newItem);

      const items = feedContainer.querySelectorAll('.feed-item:not(.feed-header)');
      if (items.length > 5) items[items.length - 1].remove();
    }
  }, 8000);
