/*
 * GenSpark Shared Shell
 * Loads the canonical GenSpark navbar and footer.
 *
 * Usage on any go.genspark.net page:
 *
 * <div id="genspark-navbar"></div>
 *
 * ... page content ...
 *
 * <div id="genspark-footer"></div>
 *
 * <script src="/shared/genspark/js/genspark.js"></script>
 */

(function () {
  "use strict";

  const COMPONENT_ROOT = "/shared/genspark/components";

  async function loadComponent(targetId, fileName) {
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    try {
      const response = await fetch(`${COMPONENT_ROOT}/${fileName}`);

      if (!response.ok) {
        throw new Error(
          `Unable to load ${fileName}: HTTP ${response.status}`
        );
      }

      target.innerHTML = await response.text();
    } catch (error) {
      console.error(`[GenSpark] ${error.message}`);
    }
  }

  async function initGenSparkShell() {
    await Promise.all([
      loadComponent("genspark-navbar", "navbar.html"),
      loadComponent("genspark-footer", "footer.html")
    ]);

    document.dispatchEvent(
      new CustomEvent("genspark:shell-loaded")
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initGenSparkShell
    );
  } else {
    initGenSparkShell();
  }
})();
