(() => {
  // Hindari listener ganda ketika script dimuat ulang
  if (window.__trade2govLegacyCleanup) {
    window.__trade2govLegacyCleanup();
  }

  /* ---------- Tab solusi ---------- */

  const tabPanelWrap = document.getElementById("tab-panel-wrap");
  const tabPanelHome = tabPanelWrap?.parentElement;

  let activeTab = "edecl";

  function placeTabPanel() {
    if (!tabPanelWrap || !tabPanelHome) return;

    const choice = document.getElementById("sol-choice-" + activeTab);

    if (!choice) return;

    if (window.innerWidth < 1024) {
      if (choice.nextElementSibling !== tabPanelWrap) {
        choice.after(tabPanelWrap);
      }

      tabPanelWrap.classList.add("mt-2", "mb-3");
    } else {
      if (tabPanelWrap.parentElement !== tabPanelHome) {
        tabPanelHome.appendChild(tabPanelWrap);
      }

      tabPanelWrap.classList.remove("mt-2", "mb-3");
    }
  }

  function changeTab(tabId) {
    const target = document.getElementById("content-" + tabId);

    if (!target) return;

    activeTab = tabId;

    document
      .querySelectorAll("#tab-buttons .solution-choice")
      .forEach((choice) => {
        const active = choice.id === "sol-choice-" + tabId;

        choice.classList.toggle("border-red-600", active);
        choice.classList.toggle("bg-white", active);
        choice.classList.toggle("shadow-sm", active);
        choice.classList.toggle("border-transparent", !active);
      });

    document.querySelectorAll("#tab-buttons .tab-btn").forEach((btn) => {
      const active = btn.id === "btn-" + tabId;

      btn.setAttribute("aria-selected", String(active));
      btn.setAttribute("tabindex", active ? "0" : "-1");
    });

    document
      .querySelectorAll("#solutions-overview .tab-content")
      .forEach((panel) => {
        panel.classList.toggle("hidden", panel !== target);
      });

    placeTabPanel();
  }

  /* ---------- Routing React ---------- */

  function navigateReact(page, sectionId = null) {
    window.dispatchEvent(
      new CustomEvent("trade2gov:navigate", {
        detail: {
          page,
          sectionId,
        },
      }),
    );
  }

  function showAboutPage(sectionId) {
    navigateReact("about", sectionId);
  }

  function showPricingPage(sectionId) {
    navigateReact("pricing", sectionId);
  }

  function showModulePage() {
    navigateReact("modules");
  }

  function showModuleDetail(sectionId) {
    navigateReact("modules", sectionId);
  }

  function showHomeSection(sectionId) {
    navigateReact("home", sectionId);
  }

  function showUseCaseDetail(articleId) {
    navigateReact("usecase");

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.querySelectorAll(".usecase-article").forEach((article) => {
          article.classList.toggle("hidden", article.id !== articleId);
        });
      });
    });
  }

  /* ---------- Routing berdasarkan URL Hash ---------- */

  function applyHashRoute() {
    const hash = window.location.hash.replace("#", "");

    if (
      ["usecase-integrasi", "usecase-otomasi", "usecase-monitoring"].includes(
        hash,
      )
    ) {
      showUseCaseDetail(hash);
    } else if (hash === "modules") {
      showModulePage();
    } else if (hash.startsWith("module-")) {
      showModuleDetail(hash);
    } else if (hash === "pricing") {
      showPricingPage();
    } else if (hash.startsWith("pricing-")) {
      showPricingPage(hash);
    } else if (hash === "about") {
      showAboutPage();
    } else if (hash.startsWith("about-")) {
      showAboutPage(hash);
    } else {
      showHomeSection(hash && hash !== "home" ? hash : "top");
    }
  }

  function syncLangLinks() {
    document.querySelectorAll("a[hreflang]").forEach((link) => {
      const href = link.getAttribute("href");

      if (!href) return;

      link.setAttribute("href", href.split("#")[0] + window.location.hash);
    });
  }

  /* ---------- WhatsApp demo ---------- */

  const TRADE2GOV_DEMO_WHATSAPP = "6282119933623";

  const TRADE2GOV_DEMO_MESSAGE =
    "Halo Tim Trade2Gov EDII,\n\n" +
    "Saya tertarik untuk mengetahui lebih lanjut mengenai solusi Trade2Gov dan ingin menjadwalkan sesi demo.\n\n" +
    "Mohon informasi mengenai jadwal yang tersedia serta proses selanjutnya.\n\n" +
    "Terima kasih.";

  function openDemoWhatsApp() {
    window.open(
      "https://wa.me/" +
        TRADE2GOV_DEMO_WHATSAPP +
        "?text=" +
        encodeURIComponent(TRADE2GOV_DEMO_MESSAGE),
      "_blank",
      "noopener,noreferrer",
    );
  }

  function openPlanWhatsApp(plan) {
    const msg =
      plan === "Enterprise"
        ? "Halo Tim Trade2Gov EDII,\n\nSaya ingin berdiskusi mengenai paket Enterprise Trade2Gov untuk kebutuhan di atas 150 dokumen per bulan.\n\nMohon informasi proses selanjutnya.\n\nTerima kasih."
        : "Halo Tim Trade2Gov EDII,\n\nSaya tertarik dengan paket " +
          plan +
          " Trade2Gov dan ingin mengetahui proses berlangganannya.\n\nMohon informasi proses selanjutnya.\n\nTerima kasih.";

    window.open(
      "https://wa.me/" +
        TRADE2GOV_DEMO_WHATSAPP +
        "?text=" +
        encodeURIComponent(msg),
      "_blank",
      "noopener,noreferrer",
    );
  }

  /* ---------- Testimoni ---------- */

  let reviewIndex = 0;

  const reviewIds = ["client-testimonial-one", "client-testimonial-two"];

  function shiftClientReview(direction) {
    reviewIndex =
      (reviewIndex + direction + reviewIds.length) % reviewIds.length;

    reviewIds.forEach((id, index) => {
      const testimonial = document.getElementById(id);

      if (!testimonial) return;

      testimonial.classList.toggle("hidden", index !== reviewIndex);

      testimonial.setAttribute("aria-hidden", String(index !== reviewIndex));
    });

    const counter = document.getElementById("client-review-counter");

    if (counter) {
      counter.textContent = reviewIndex + 1 + " / " + reviewIds.length;
    }
  }

  function handleHashChange() {
    applyHashRoute();
    syncLangLinks();
  }

  function handleResize() {
    placeTabPanel();
  }

  window.addEventListener("resize", handleResize);
  window.addEventListener("hashchange", handleHashChange);

  /* ---------- Expose fungsi untuk komponen React ---------- */

  window.changeTab = changeTab;

  window.showAboutPage = showAboutPage;
  window.showPricingPage = showPricingPage;
  window.showModulePage = showModulePage;
  window.showModuleDetail = showModuleDetail;
  window.showHomeSection = showHomeSection;
  window.showUseCaseDetail = showUseCaseDetail;

  window.openDemoWhatsApp = openDemoWhatsApp;
  window.openPlanWhatsApp = openPlanWhatsApp;

  window.shiftClientReview = shiftClientReview;

  /* ---------- Inisialisasi ---------- */

  placeTabPanel();
  syncLangLinks();

  // Mendukung URL yang dibuka langsung dengan hash
  if (window.location.hash) {
    applyHashRoute();
  }

  /* ---------- Cleanup ---------- */

    window.__trade2govLegacyCleanup = () => {
    window.removeEventListener("resize", handleResize);
    window.removeEventListener("hashchange", handleHashChange);
    

    const functions = [
      "changeTab",
      "toggleMenu",
      "closeMenu",
      "showAboutPage",
      "showPricingPage",
      "showModulePage",
      "showModuleDetail",
      "showHomeSection",
      "showUseCaseDetail",
      "openDemoWhatsApp",
      "openPlanWhatsApp",
      "shiftClientReview",
    ];

    functions.forEach((name) => {
      delete window[name];
    });

    delete window.__trade2govLegacyCleanup;
  };
})();
