// URAVTODOR Script

document.addEventListener("DOMContentLoaded", () => {

    // Меню

    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");

    if(menuBtn && menu){

        menuBtn.addEventListener("click", () => {
            menu.classList.toggle("active");
        });

        document.querySelectorAll("#menu a").forEach(link => {

            link.addEventListener("click", () => {
                menu.classList.remove("active");
            });

        });

    }

    // Плавний скрол

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);

            if(target){

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

    // Анімація елементів

    const animatedElements = document.querySelectorAll(
        ".card, .section-text, h2, .contact-box"
    );

    animatedElements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "0.7s ease";

    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },{
        threshold:0.15
    });

    animatedElements.forEach(el => observer.observe(el));

    // Активний пункт меню

    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if(window.scrollY >= sectionTop &&
               window.scrollY < sectionTop + sectionHeight){

                current = section.getAttribute("id");

            }

        });

        document.querySelectorAll("#menu a").forEach(link => {

            link.classList.remove("active-link");

            if(link.getAttribute("href") === "#" + current){

                link.classList.add("active-link");

            }

        });

    });

});
