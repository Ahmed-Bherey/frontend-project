window.addEventListener('load', () => {

    // --------------------- Start Side Menu
    let mobielBtn = document.querySelector(".mobile-btn"),
        sideMenu = document.querySelector(".side-menu"),
        bodyMove = document.getElementsByTagName("body")[0],
        overlayMenu = document.querySelector(".overlayMenu");

    mobielBtn.addEventListener("click", () => {
        sideMenu.classList.add("show-menu")
        mobielBtn.classList.add("open")
        bodyMove.classList.add("body-move")
        overlayMenu.classList.add("showOverlayBlock")
        setTimeout(function() {
            overlayMenu.classList.add("showOverlayOpacity")
        }, 100)
    })
    overlayMenu.addEventListener("click", () => {
            sideMenu.classList.remove("show-menu")
            mobielBtn.classList.remove("open")
            bodyMove.classList.remove("body-move")
            overlayMenu.classList.remove("showOverlayOpacity")
            setTimeout(function() {
                overlayMenu.classList.remove("showOverlayBlock")
            }, 700)
        })
        // --------------------- End Side Menu


    // --------------------- Start FAQ
    let disease = document.querySelector(".disease-item"),
        spread = document.querySelector(".spread-item"),
        protect = document.querySelector(".protect-item"),
        Symptoms = document.querySelector(".Symptoms-item"),
        Outbreak = document.querySelector(".Outbreak-item"),
        buster = document.querySelector(".buster-item"),
        diseaseItem = document.querySelector(".disease"),
        spreadItem = document.querySelector(".spreadv"),
        protectItem = document.querySelector(".protect"),
        SymptomsItem = document.querySelector(".symptom"),
        busterItem = document.querySelector(".buster"),
        outbreakItem = document.querySelector(".outbreak");

    spread.addEventListener('click', () => {
        spreadItem.classList.remove("hidden");
        diseaseItem.classList.add("hidden")
        protectItem.classList.add("hidden")
        SymptomsItem.classList.add("hidden")
        outbreakItem.classList.add("hidden")
        busterItem.classList.add("hidden")
    })
    protect.addEventListener('click', () => {
        protectItem.classList.remove("hidden");
        diseaseItem.classList.add("hidden")
        spreadItem.classList.add("hidden")
        SymptomsItem.classList.add("hidden")
        outbreakItem.classList.add("hidden")
        busterItem.classList.add("hidden")
    })
    disease.addEventListener('click', () => {
        protectItem.classList.add("hidden");
        diseaseItem.classList.remove("hidden")
        spreadItem.classList.add("hidden")
        SymptomsItem.classList.add("hidden")
        outbreakItem.classList.add("hidden")
        busterItem.classList.add("hidden")
    })
    Symptoms.addEventListener('click', () => {
        protectItem.classList.add("hidden");
        diseaseItem.classList.add("hidden")
        spreadItem.classList.add("hidden")
        SymptomsItem.classList.remove("hidden")
        outbreakItem.classList.add("hidden")
        busterItem.classList.add("hidden")
    })
    Outbreak.addEventListener('click', () => {
        protectItem.classList.add("hidden");
        diseaseItem.classList.add("hidden")
        spreadItem.classList.add("hidden")
        SymptomsItem.classList.add("hidden")
        outbreakItem.classList.remove("hidden")
        busterItem.classList.add("hidden")
    })
    buster.addEventListener('click', () => {
            protectItem.classList.add("hidden");
            diseaseItem.classList.add("hidden")
            spreadItem.classList.add("hidden")
            SymptomsItem.classList.add("hidden")
            outbreakItem.classList.add("hidden")
            busterItem.classList.remove("hidden")
        })
        // --------------------- End FAQ


    // --------------------- Start Accordion
    let accordionTitle = document.querySelectorAll(".accordion-title");
    accordionTitle.forEach((accordionTitle) => {
            accordionTitle.addEventListener("click", () => {
                let height = accordionTitle.nextElementSibling.scrollHeight;
                accordionTitle.classList.toggle("active-header");
                if (accordionTitle.classList.contains("active-header")) {
                    accordionTitle.nextElementSibling.style.maxHeight = `${height}px`
                } else {
                    accordionTitle.nextElementSibling.style.maxHeight = "0px"
                }
            })
        })
        // --------------------- End Accordion


    // --------------------- Start Sticky Navbar
    let navBar = document.querySelector(".sticky-navbar");
    window.addEventListener('scroll', () => {
            if (body.scrollTop >= 100) {
                navBar.style.display = "block";
            } else {
                navBar.style.display = "none";
            }
        })
        // --------------------- End Sticky Navbar


    // --------------------- Start Active NavBar
    let activeBar = document.querySelectorAll(".activeBar");
    for (let index = 0; index < activeBar.length; index++) {
        activeBar[index].addEventListener("click", () => {
            for (let i = 0; i < activeBar.length; i++) {
                activeBar[i].classList.remove("active")
            }
            activeBar[index].classList.add("active")
        })
    }
    // --------------------- End Active NavBar


    // --------------------- Start Active Ask Item
    let lItem = document.querySelectorAll(".l-item");
    for (let index = 0; index < lItem.length; index++) {
        lItem[index].addEventListener("click", () => {
            for (let i = 0; i < lItem.length; i++) {
                lItem[i].classList.remove("active-ask")
            }
            lItem[index].classList.add("active-ask")
        })
    }
    // --------------------- END Active Ask Item


    // --------------------- Start Active Answer Item
    let actTitle = document.querySelectorAll(".accordion-title");
    for (let index = 0; index < actTitle.length; index++) {
        actTitle[index].addEventListener("click", () => {
            for (let i = 0; i < actTitle.length; i++) {
                actTitle[i].classList.remove("active-title")
            }
            actTitle[index].classList.add("active-title")
        })
    }
    // --------------------- End Active Answer Item


    // --------------------- Start Scroll Top
    let ScrolTop = document.querySelector(".go-top"),
        body = document.querySelector("html,body");
    window.addEventListener("scroll", () => {
            if (body.scrollTop >= 200) {
                ScrolTop.style.display = "block";
                ScrolTop.addEventListener("click", () => {
                    window.scrollTo(0, 0);
                })
            } else {
                ScrolTop.style.display = "none";
            }
        })
        // --------------------- End Scroll Top


})