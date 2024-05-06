//Languages ----------------------------------------------------------
function translate() {
    var lg = localStorage.getItem("language");
    console.log(lg);

    if (lg === null || lg === undefined) {
        localStorage.setItem("language", "fr");
        return;
    }

    if (lg == "fr") {
        $(".eng").hide();
        $(".fr").show();
    }

    if (lg == "eng") {
        $(".fr").hide();
        $(".eng").show();
    }
}

translate();
translate();



$("#btn_fr").click(() => {
    localStorage.setItem("language", "fr");
    translate();
})

$("#btn_eng").click(() => {
    localStorage.setItem("language", "eng");
    translate();
})



//Header onScroll display none--------------------------------------------------------------------------------------
$(window).on("scroll", function () {
    if ($(window).scrollTop() === 0) {
        $("header .logo").show();
        header.style.justifyContent = "space-between";
    } else {
        $("header .logo").hide();
        header.style.justifyContent = "flex-end";
    }

    if ($(window).scrollTop() > $("#newHeader").offset().top - 80) {
        document.querySelectorAll(".btn_header").forEach((button) => {
            button.classList.add("blue");
            button.classList.remove("white");
        });
        document.querySelector("header nav").classList.add("bg_header");
        document.querySelector("header nav").classList.add("drop_shadow");
    } else {
        document.querySelectorAll(".btn_header").forEach((button) => {
            button.classList.remove("blue");
            button.classList.add("white");
        });
        document.querySelector("header nav").classList.remove("bg_header");
        document.querySelector("header nav").classList.remove("drop_shadow");
    }
});

if (!window.location.href.includes('index')) {
    document.querySelectorAll(".btn_header").forEach((button) => {
        button.classList.add("blue");
        button.classList.remove("white");
    });
    document.querySelector("header nav").classList.add("bg_header");
    document.querySelector("header nav").classList.add("drop_shadow");
}

//Burger Menu--------------------------------------------------------------------------------------
$("#icons").click(() => {
    document.querySelector("#header").classList.toggle("active");
    $("header .logo").hide();
})

document.querySelectorAll("header nav li").forEach((link) => {
    link.addEventListener("click", () => {
        header.classList.remove("active");
        $("header .logo").show();
    });
});



//Swiper menu--------------------------------------------------------------------------------------
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

/*
//LE DESIGN C'EST QUOI HREF ------------------------------------------------------------------------------
$('#swiper-slide-01').click(function (e) {
    e.preventDefault();
    location.href = "#";
    return false;
});
$('#swiper-slide-02').click(function (e) {
    e.preventDefault();
    location.href = "#";
    return false;
});
$('#swiper-slide-03').click(function (e) {
    e.preventDefault();
    location.href = "#";
    return false;
});
$('#swiper-slide-04').click(function (e) {
    e.preventDefault();
    location.href = "#";
    return false;
});
$('#swiper-slide-05').click(function (e) {
    e.preventDefault();
    location.href = "#";
    return false;
});
$('#swiper-slide-06').click(function (e) {
    e.preventDefault();
    location.href = "#";
    return false;
});
$('#swiper-slide-07').click(function (e) {
    e.preventDefault();
    location.href = "#";
    return false;
});
$('#swiper-slide-08').click(function (e) {
    e.preventDefault();
    location.href = "#";
    return false;
});
$('#swiper-slide-09').click(function (e) {
    e.preventDefault();
    location.href = "#";
    return false;
});

//NOS SERVICES HREF ------------------------------------------------------------------------------
$('.service_case_01').click(function (e) {
    e.preventDefault();
    location.href = "./Design.html";
    return true;
});

$('.service_case_02').click(function (e) {
    e.preventDefault();
    location.href = "#";
    return false;
});*/