import "./Loader.css";

export function BootLoader() {
  setTimeout(() => {

    const loader = document.querySelector(".loader");
    const desktop = document.querySelector(".desktop");

    if (!loader || !desktop) return;

    loader.classList.add("loader--hidden");
    desktop.classList.add("desktop--visible");

  }, 2500);

  return `
    <section class="loader">

        <div class="loader__content">

            <p class="loader__status">
                INITIALIZING SYSTEM
            </p>

            <div class="loader__bar">

                <div class="loader__progress"></div>

            </div>

            <p class="loader__message">

                Preparing Desktop...

            </p>

        </div>

    </section>
  `;
}