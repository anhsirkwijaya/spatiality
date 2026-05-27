document.addEventListener('DOMContentLoaded', () => {

    /* =========================
    1. ACTIVE NAV LINK
    ========================= */

    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (link.getAttribute('href') !== "#" && currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }

    });


    /* =========================
    2. SMOOTH SCROLL
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener('click', function (e) {

            if (this.getAttribute('href') !== "#") {

                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });

            }

        });

    });


    /* =========================
    3. MOBILE MENU
    ========================= */

    const toggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const dropdownBtn = document.querySelector(".mobile-dropdown-btn");
    const dropdown = document.querySelector(".mobile-dropdown");


    if(toggle){

        toggle.onclick = () => {

            toggle.classList.toggle("active");
            mobileMenu.classList.toggle("active");

            // reset dropdown if menu closes
            if(!mobileMenu.classList.contains("active")){
                dropdown.classList.remove("open");
            }

        };

    }


    /* =========================
    ESC CLOSE
    ========================= */

    document.addEventListener("keydown", function(e){

        if(e.key === "Escape"){

            toggle.classList.remove("active");
            mobileMenu.classList.remove("active");

            if(dropdown){
                dropdown.classList.remove("open");
            }

        }

    });


    /* =========================
    CLICK OUTSIDE CLOSE
    ========================= */

    if(mobileMenu){

        mobileMenu.addEventListener("click", function(e){

            if(e.target === mobileMenu){

                toggle.classList.remove("active");
                mobileMenu.classList.remove("active");

                if(dropdown){
                    dropdown.classList.remove("open");
                }

            }

        });

    }


    /* =========================
    MOBILE DROPDOWN
    ========================= */

    if(dropdownBtn){

        dropdownBtn.onclick = () =>{

            dropdown.classList.toggle("open");

        };

    }


    /* =========================
    READY LOG
    ========================= */

    console.log("Spatiality JS Loaded - Ready for GIS Portfolio 🚀");

});