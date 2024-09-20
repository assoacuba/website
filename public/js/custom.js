// Attendre que le document soit prêt avant d'initialiser Slick
$(document).ready(function() {
    $('.custom_slick_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        fade: true,
        adaptiveHeight: true,
        asNavFor: '.slick_slider_nav',
        responsive: [{
            breakpoint: 768,
            settings: {
                dots: false
            }
        }]
    });

    $('.owl-carousel .owl-theme').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.custom_slick_slider',
        centerMode: false,
        focusOnSelect: true,
        variableWidth: true
    });
});

// Filtrage des éléments
document.addEventListener("DOMContentLoaded", function() {
    const filters = document.querySelectorAll("#furniture-filters li");
    const items = document.querySelectorAll(".furn-item");

    filters.forEach(function(filter) {
        filter.addEventListener("click", function() {
            const selectedFilter = this.getAttribute("data-filter");

            items.forEach(function(item) {
                const itemFilter = item.getAttribute("data-filter");

                if (selectedFilter === "*" || selectedFilter === itemFilter) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });

            // Mettre à jour la classe active du filtre
            filters.forEach(function(filter) {
                filter.classList.remove("filter-active");
            });
            this.classList.add("filter-active");
        });
    });
});
