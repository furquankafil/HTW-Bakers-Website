/* HTW Bakers & Sweets — interactions */
(function () {
  "use strict";
  var WA = "https://wa.me/919999272709?text=";
  var FALLBACK = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=900&auto=format&fit=crop";
  function U(id, w) { return "https://images.unsplash.com/" + id + "?q=80&w=" + (w || 900) + "&auto=format&fit=crop"; }
  function orderLink(name) { return WA + encodeURIComponent("Hi HTW Bakers, I would like to order " + name + "."); }

  /* Every image below was individually verified: resolves (no 404s) and
     matches the product flavour it represents. */
  var PRODUCTS = [
    // CAKES
    { name: "Black Forest Cake", cat: "cakes", img: U("photo-1606890737304-57a1ca8a5b62"), desc: "Classic chocolate sponge, whipped cream, chocolate shavings and cherries." },
    { name: "Black Currant Cake", cat: "cakes", img: U("photo-1464965911861-746a04b4bca6"), desc: "Berry-kissed cream cake with a tangy black currant glaze and fresh fruit." },
    { name: "Mix Fruit Cake", cat: "cakes", img: U("photo-1535141192574-5d4897c12636"), desc: "Light vanilla sponge crowned with seasonal fresh fruit and glaze." },
    { name: "Pineapple Cake", cat: "cakes", img: U("photo-1464349095431-e9a21285b5f3"), desc: "Featherlight sponge layered with juicy pineapple and fresh cream." },
    { name: "Rasmalai Cake", cat: "cakes", img: U("photo-1488477181946-6428a0291777"), desc: "Our milky-sweet signature — saffron-kissed cream, pistachio dust, malai softness in every spoon." },
    { name: "Red Velvet Cake", cat: "cakes", img: U("photo-1586788680434-30d324b2d46f"), desc: "Velvety cocoa crumb with smooth cream-cheese style frosting." },
    { name: "Strawberry Cake", cat: "cakes", img: U("photo-1562440499-64c9a111f713"), desc: "Fresh strawberry cream over soft sponge, finished festive pink." },
    { name: "Butterscotch Cake", cat: "cakes", img: U("photo-1551024506-0bccd828d307"), desc: "Caramel crunch, butterscotch glaze and silky cream on vanilla sponge." },
    { name: "Chocolate Truffle Cake", cat: "cakes", img: U("photo-1578985545062-69928b1d9587"), desc: "Deep, dark and indulgent — rich ganache over moist chocolate layers." },
    { name: "Choco Vanilla Cake", cat: "cakes", img: U("photo-1605807646983-377bc5a76493"), desc: "Dark chocolate sponge layered with vanilla cream — the best of both in every slice." },
    { name: "Mango Cake", cat: "cakes", img: U("photo-1591073113125-e46713c829ed"), desc: "Sunny mango cream and pulp over soft sponge — a summer celebration." },
    { name: "Choco Chips Cake", cat: "cakes", img: U("photo-1550617931-e17a7b70dce2"), desc: "Chocolate-chip studded sponge with fudge frosting. A kid-approved classic." },
    { name: "Vanilla Chocolate Cake", cat: "cakes", img: U("photo-1557925923-cd4648e211a0"), desc: "Vanilla cream folded through chocolate sponge — light, marbled and deeply comforting." },
    { name: "Choco Zebra Cake", cat: "cakes", img: U("photo-1563805042-7684c019e1cb"), desc: "Bold bands of chocolate and vanilla with cookie crunch — our marbled showpiece." },
    // PASTRIES
    { name: "Black Forest Pastry", cat: "pastries", img: U("photo-1606890737304-57a1ca8a5b62", 600), desc: "Single-serve Black Forest — cream, chocolate curls, cherry on top." },
    { name: "Black Currant Pastry", cat: "pastries", img: U("photo-1488900128323-21503983a07e", 600), desc: "Tangy-sweet dark-berry glaze over a petite cream sponge." },
    { name: "Butterscotch Pastry", cat: "pastries", img: U("photo-1551024506-0bccd828d307", 600), desc: "Caramel drizzle and butterscotch cream in a perfect small serve." },
    { name: "Choco Chips Pastry", cat: "pastries", img: U("photo-1550617931-e17a7b70dce2", 600), desc: "Fudgy mini layers studded with chocolate chips." },
    { name: "Choco Flexy Pastry", cat: "pastries", img: U("photo-1578985545062-69928b1d9587", 600), desc: "Extra-flexible gooey chocolate layers for serious chocoholics." },
    { name: "Choco Truffle Pastry", cat: "pastries", img: U("photo-1602351447937-745cb720612f", 600), desc: "A dense ganache-topped truffle square — small bite, big finish." },
    { name: "Mango Pastry", cat: "pastries", img: U("photo-1591073113125-e46713c829ed", 600), desc: "Sunshine in a square — mango cream over featherlight sponge." },
    { name: "Pineapple Pastry", cat: "pastries", img: U("photo-1464349095431-e9a21285b5f3", 600), desc: "Juicy pineapple and fresh cream — light, bright, classic." },
    { name: "Rasmalai Pastry", cat: "pastries", img: U("photo-1488477181946-6428a0291777", 600), desc: "Saffron-milk softness with pistachio dust, served chilled." },
    { name: "Red Velvet Pastry", cat: "pastries", img: U("photo-1586788680434-30d324b2d46f", 600), desc: "Crimson crumb, smooth frosting — luxury in miniature." },
    // COOKIES
    { name: "Amul Butter Cookies", cat: "cookies", img: U("photo-1499636136210-6f4ee915583e"), desc: "Rich, golden, melt-in-the-mouth — made with real Amul butter." },
    { name: "Strawberry Eggless Cookies", cat: "cookies", img: U("photo-1598839950984-034f6dc7b495"), desc: "Soft-baked, fruity and fully eggless — a delicate crumb with real strawberry notes." },
    // DESSERTS (today's selection — enquire)
    { name: "Tiramisu Jar Dessert", cat: "desserts", img: U("photo-1542124948-dc391252a940"), desc: "Espresso-soaked layers and mascarpone cream, sealed in a jar. Ask about today's selection." },
    { name: "Strawberry Cream Cups", cat: "desserts", img: U("photo-1464965911861-746a04b4bca6"), desc: "Chilled vanilla cream crowned with glazed strawberries. Ask about today's selection." },
    { name: "Butterscotch Mousse Cup", cat: "desserts", img: U("photo-1551024506-0bccd828d307", 600), desc: "The same caramel comfort as our Butterscotch Cake — by the spoon." }
  ];

  var FEATURED_CAKES = ["Black Forest Cake", "Black Currant Cake", "Butterscotch Cake", "Chocolate Truffle Cake", "Pineapple Cake", "Rasmalai Cake", "Red Velvet Cake", "Strawberry Cake", "Mango Cake", "Choco Vanilla Cake"];
  function byName(n) { return PRODUCTS.filter(function (p) { return p.name === n; })[0]; }
  function catLabel(c) { return { cakes: "CAKES", pastries: "PASTRIES", cookies: "COOKIES", desserts: "DESSERTS" }[c] || c.toUpperCase(); }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;"); }

  /* ---- Cake gallery (featured 10) ---- */
  var cakeGrid = document.getElementById("cakeGrid");
  if (cakeGrid) {
    cakeGrid.innerHTML = FEATURED_CAKES.map(function (n, i) {
      var p = byName(n);
      return '<button class="cake-card reveal' + (i === 0 ? " featured" : "") + '" data-product="' + esc(p.name) + '">' +
        '<div class="cake-img"><img src="' + p.img + '" alt="' + esc(p.name) + ' — HTW Bakers Zakir Nagar" loading="lazy" onerror="this.onerror=null;this.src=\'' + FALLBACK + '\';"></div>' +
        '<div class="cake-body"><h3 class="font-serif">' + esc(p.name) + '</h3><p>' + esc(p.desc) + '</p>' +
        '<div class="cake-row"><span class="cake-tag">CAKE &bull; FRESH</span><span class="cake-order">ENQUIRE / ORDER</span></div></div></button>';
    }).join("");
  }

  /* ---- Pastry rail ---- */
  var rail = document.getElementById("pastryRail");
  if (rail) {
    rail.innerHTML = PRODUCTS.filter(function (p) { return p.cat === "pastries"; }).slice(0, 8).map(function (p) {
      return '<button class="pastry-card" data-product="' + esc(p.name) + '">' +
        '<div class="pastry-img"><img src="' + p.img + '" alt="' + esc(p.name) + ' close-up" loading="lazy" onerror="this.onerror=null;this.src=\'' + FALLBACK + '\';"></div>' +
        '<div class="pastry-body"><p class="card-label" style="padding:0">PASTRY</p><h3 class="font-serif">' + esc(p.name) + '</h3><p>' + esc(p.desc) + '</p></div></button>';
    }).join("");
  }

  /* ---- Full menu + filters ---- */
  var menuGrid = document.getElementById("menuGrid");
  if (menuGrid) {
    menuGrid.innerHTML = PRODUCTS.map(function (p) {
      return '<button class="menu-card" data-cat="' + p.cat + '" data-product="' + esc(p.name) + '">' +
        '<div class="menu-img"><img src="' + p.img + '" alt="' + esc(p.name) + ' — ' + catLabel(p.cat) + ' at HTW Bakers" loading="lazy" onerror="this.onerror=null;this.src=\'' + FALLBACK + '\';"></div>' +
        '<div class="menu-body"><p class="menu-cat">' + catLabel(p.cat) + '</p><h3 class="font-serif">' + esc(p.name) + '</h3><p>' + esc(p.desc) + '</p>' +
        '<span class="menu-price">ENQUIRE / ORDER</span></div></button>';
    }).join("");
  }
  var filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.classList.remove("active"); b.setAttribute("aria-selected", "false"); });
      btn.classList.add("active"); btn.setAttribute("aria-selected", "true");
      var f = btn.getAttribute("data-filter");
      document.querySelectorAll(".menu-card").forEach(function (card) {
        card.classList.toggle("hide", !(f === "all" || card.getAttribute("data-cat") === f));
      });
    });
  });

  /* ---- Product modal ---- */
  var modal = document.getElementById("productModal");
  var mImg = document.getElementById("modalImg");
  var mCat = document.getElementById("modalCat");
  var mName = document.getElementById("modalName");
  var mDesc = document.getElementById("modalDesc");
  var mOrder = document.getElementById("modalOrder");
  var lastFocus = null;
  function openProduct(name) {
    var p = byName(name);
    if (!p || !modal) return;
    lastFocus = document.activeElement;
    mImg.src = p.img; mImg.alt = p.name + " — HTW Bakers & Sweets";
    mImg.onerror = function () { this.onerror = null; this.src = FALLBACK; };
    mCat.textContent = catLabel(p.cat) + " — HTW BAKERS";
    mName.textContent = p.name;
    mDesc.textContent = p.desc;
    mOrder.href = orderLink(p.name);
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    var close = modal.querySelector(".modal-close");
    if (close) close.focus();
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-product]");
    if (t) { openProduct(t.getAttribute("data-product")); return; }
    if (e.target.closest("[data-close]")) closeModal();
  });
  document.querySelectorAll(".order-btn").forEach(function (b) {
    b.addEventListener("click", function (e) { e.stopPropagation(); window.open(orderLink(b.getAttribute("data-product")), "_blank", "noopener"); });
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeModal(); closeMenu(); } });

  /* ---- Header on scroll ---- */
  var header = document.getElementById("siteHeader");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 24); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  var menuBtn = document.getElementById("menuBtn");
  var mobileMenu = document.getElementById("mobileMenu");
  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("open");
    mobileMenu.setAttribute("aria-hidden", "true");
    menuBtn.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open menu");
    if (!modal || !modal.classList.contains("open")) document.body.style.overflow = "";
  }
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function () {
      var open = mobileMenu.classList.toggle("open");
      mobileMenu.setAttribute("aria-hidden", String(!open));
      menuBtn.classList.toggle("open", open);
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.style.overflow = open ? "hidden" : "";
    });
    mobileMenu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });
  }

  /* ---- Reveal on scroll ---- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal,.reveal-delay,.reveal-delay-2").forEach(function (el) { io.observe(el); });

  /* ---- Active nav link ---- */
  var sections = ["home", "about", "cakes", "pastries", "cookies", "gallery", "contact"].map(function (id) { return document.getElementById(id); }).filter(Boolean);
  var navLinks = document.querySelectorAll(".nav-link");
  var navIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        navLinks.forEach(function (l) { l.classList.toggle("active", l.getAttribute("data-nav") === en.target.id); });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(function (s) { navIO.observe(s); });

  /* ---- Footer year ---- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
