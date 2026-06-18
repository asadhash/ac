// =====================================
// LANGUAGE SWITCHING
// =====================================

let currentLanguage = "en";

const englishButton = document.getElementById("btn-en");
const dutchButton = document.getElementById("btn-nl");

function setLanguage(language) {

    currentLanguage = language;

    document.documentElement.lang = language;

    document
        .querySelectorAll("[data-en]")
        .forEach(element => {

            const translation =
                element.getAttribute(
                    `data-${language}`
                );

            if (translation) {
                element.textContent =
                    translation;
            }

        });

    englishButton.classList.remove("active");
    dutchButton.classList.remove("active");

    if (language === "en") {
        englishButton.classList.add("active");
    } else {
        dutchButton.classList.add("active");
    }

    localStorage.setItem(
        "preferredLanguage",
        language
    );

}

englishButton?.addEventListener(
    "click",
    () => setLanguage("en")
);

dutchButton?.addEventListener(
    "click",
    () => setLanguage("nl")
);

// Load saved language

const savedLanguage =
    localStorage.getItem(
        "preferredLanguage"
    );

if (
    savedLanguage === "en" ||
    savedLanguage === "nl"
) {
    setLanguage(savedLanguage);
}

// =====================================
// EMAIL PROTECTION
// =====================================

(function renderEmail() {

    const emailContainer =
        document.getElementById("email");

    if (!emailContainer) return;

    const user = "arun";
    const domain = "arunconsulting.com";

    const email =
        `${user}@${domain}`;

    const link =
        document.createElement("a");

    link.href =
        `mailto:${email}`;

    link.textContent =
        email;

    emailContainer.appendChild(link);

})();

// =====================================
// SMOOTH SCROLL ENHANCEMENT
// =====================================

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (e) {

                const target =
                    document.querySelector(
                        this.getAttribute(
                            "href"
                        )
                    );

                if (!target) return;

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });

// =====================================
// HEADER SHADOW ON SCROLL
// =====================================

const header =
    document.querySelector(".header");

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 20
        ) {
            header.style.boxShadow =
                "0 4px 20px rgba(0,0,0,.06)";
        } else {
            header.style.boxShadow =
                "none";
        }

    }
);

// =====================================
// SIMPLE FADE-IN ANIMATION
// =====================================

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );

document
    .querySelectorAll(
        ".service-card, .logo-grid img, .section"
    )
    .forEach(
        element => {

            element.classList.add(
                "fade-element"
            );

            observer.observe(
                element
            );

        }
    );

// =====================================
// FUTURE MOBILE MENU SUPPORT
// =====================================

const mobileMenuButton =
    document.querySelector(
        ".mobile-menu-btn"
    );

mobileMenuButton?.addEventListener(
    "click",
    () => {

        alert(
            "Mobile menu can be expanded in Version 2."
        );

    }
);