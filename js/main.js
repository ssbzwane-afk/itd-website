// ======================================
// ITD Website - main.js
// Institute for Transformative Development
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    // ============================
    // Highlight Active Navigation
    // ============================

    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(function(link) {

        const href = link.getAttribute("href");

        if (href === currentPage || (currentPage === "" && href === "index.html")) {

            link.classList.add("active");

        }

    });

    // ============================
    // Smooth Scrolling
    // ============================

    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach(function(anchor) {

        anchor.addEventListener("click", function(e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    // ============================
    // Mobile Menu Toggle
    // ============================

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("show");

        });

    }

    // ============================
    // Close Mobile Menu
    // ============================

    navLinks.forEach(function(link){

        link.addEventListener("click", function(){

            if(navMenu){

                navMenu.classList.remove("show");

            }

        });

    });

    // ============================
    // Footer Year
    // ============================

    const year = document.getElementById("year");

    if(year){

        year.textContent = new Date().getFullYear();

    }

    console.log("ITD Website Loaded Successfully.");

});