import "./Loader.css";

export default function Loader() {
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