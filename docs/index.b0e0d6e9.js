function e(){var e=localStorage.getItem("language");console.log(e),null==e&&(localStorage.setItem("language","fr"),console.log(localStorage.language)),"fr"==e&&($(".eng").hide(),$(".fr").show(),console.log("C'est en français")),"eng"==e&&($(".fr").hide(),$(".eng").show(),console.log("It's in English"))}e(),$("#btn_fr").click(()=>{localStorage.setItem("language","fr"),console.log(localStorage.language),e()}),$("#btn_eng").click(()=>{localStorage.setItem("language","eng"),console.log(localStorage.language),e()}),$(window).on("scroll",function(){0===$(window).scrollTop()?($("header .logo").show(),header.style.justifyContent="space-between"):($("header .logo").hide(),header.style.justifyContent="flex-end"),$(window).scrollTop()>$("#newHeader").offset().top-80?(document.querySelectorAll(".btn_header").forEach(e=>{e.classList.add("blue"),e.classList.remove("white")}),document.querySelector("header nav").classList.add("bg_header"),document.querySelector("header nav").classList.add("drop_shadow")):(document.querySelectorAll(".btn_header").forEach(e=>{e.classList.remove("blue"),e.classList.add("white")}),document.querySelector("header nav").classList.remove("bg_header"),document.querySelector("header nav").classList.remove("drop_shadow"))}),window.location.href.includes("index")||(document.querySelectorAll(".btn_header").forEach(e=>{e.classList.add("blue"),e.classList.remove("white")}),document.querySelector("header nav").classList.add("bg_header"),document.querySelector("header nav").classList.add("drop_shadow")),$("#icons").click(()=>{document.querySelector("#header").classList.toggle("active")}),document.querySelectorAll("header nav li").forEach(e=>{e.addEventListener("click",()=>{header.classList.remove("active")})}),new Swiper(".mySwiper",{slidesPerView:"auto",spaceBetween:30,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1}});