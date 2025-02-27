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

//Swiper menu--------------------------------------------------------------------------------------
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "2.5",
    spaceBetween: 0,
    loop: true,
    speed: 5000,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
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