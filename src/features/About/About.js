import "./About.css";

export default function About() {
    const page = document.createElement("article");
    page.className = "about";

    page.innerHTML = `
        <header class="about__header">

            <p class="about__eyebrow">
                ABOUT
            </p>

            <div class="about__divider"></div>

            <h1 class="about__headline">
                I build systems that make complex work feel simple.
            </h1>

        </header>

        <section class="about__content">

            <div class="about__intro">

                <p>
                    My work sits at the intersection of project
                    coordination, operations, contract management,
                    customer success and automation.
                </p>

                <p>
                    I enjoy bringing structure to fast-moving teams,
                    improving communication and building processes
                    that help people execute with confidence.
                </p>

            </div>

            <aside class="about__meta">

                <div>

                    <span>Focus</span>

                    <p>
                        Project Operations<br>
                        Contract Management<br>
                        Process Improvement<br>
                        Automation
                    </p>

                </div>

                <div>

                    <span>Location</span>

                    <p>India</p>

                </div>

                <div>

                    <span>Status</span>

                    <p>Open to Opportunities</p>

                </div>

            </aside>

        </section>
    `;

    return page;
}