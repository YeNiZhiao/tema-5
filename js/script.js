$(document).ready(function () {

    Swal.fire({
        title: 'Nama Anda',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: false,
        confirmButtonText: 'Kirim',
        preConfirm: (nama) => {
            $(".nama").html(nama);
            AOS.init();
        }
    })

    $(".burger-button").on("click", function () {
        $(".nav-atas").toggleClass("tampil");
        $(".nav-bawah").toggleClass("tampil");
        $(".burger").toggleClass("fa-times")
        $(".burger").toggleClass("fa-bars")
        $(".burger-button").toggleClass("bg-textPrimary");
        $(".burger-button").toggleClass("bg-secondary");
        $(".burger-button").toggleClass("text-secondary");
        $(".burger-button").toggleClass("text-textPrimary");
        $(".burger-button").toggleClass("hover:text-textPrimary");
        $(".burger-button").toggleClass("hover:text-secondary");
        $(".burger-button").toggleClass("hover:bg-secondary");
        $(".burger-button").toggleClass("hover:bg-textPrimary");

    })
    function hitungmundur() {
        var angka = 5;
        $(".cd").html(angka);
        var cntdwn = setInterval(function () {
            $(".cd").html(angka);
            angka--;
            if (angka < 0) {
                $(".cd").html("Nice");
                $("#player").get(0).play();
                document.getElementById('player').muted = false;
                clearInterval(cntdwn);
                $(".starting").addClass("hilang");
            }
        }, 1000);
    }

    var buka = document.querySelector(".buka");
    buka.addEventListener("click", function () {
        $(".cover").addClass("remove");
        hitungmundur();
        $(".elemenbuka").hide();
        $(".start").toggleClass("show");
        $('.fade-left').addClass("oke");

    })

    // nav
    $(".navwaktu").on("click", function (e) {
        e.preventDefault();
        $(".waktu").toggleClass("navmuncul");
    })
    $(".navlokasi").on("click", function (e) {
        e.preventDefault();
        $(".lokasi").toggleClass("navmuncul");
    })
    $(".navcouple").on("click", function (e) {
        e.preventDefault();
        $(".couple").toggleClass("navmuncul");
    })
    $(".navcerita").on("click", function (e) {
        e.preventDefault();
        $(".cerita").toggleClass("navmuncul");
    })
    $(".navgaleri").on("click", function (e) {
        e.preventDefault();
        $(".galeri").toggleClass("navmuncul");
    })
    $(".navpesan").on("click", function (e) {
        e.preventDefault();
        $(".pesan").toggleClass("navmuncul");
    })

    // close
    $(".tutupwaktu").on("click", function () {
        $(".waktu").toggleClass("navmuncul");
    })
    $(".tutuplokasi").on("click", function () {
        $(".lokasi").toggleClass("navmuncul");
    })
    $(".tutupcouple").on("click", function () {
        $(".couple").toggleClass("navmuncul");
    })
    $(".tutupcerita").on("click", function () {
        $(".cerita").toggleClass("navmuncul");
    })
    $(".tutupgaleri").on("click", function () {
        $(".galeri").toggleClass("navmuncul");
    })
    $(".tutuppesan").on("click", function () {
        $(".pesan").toggleClass("navmuncul");
    })
    // save the date
    // $(".simpan").on("click", function () {
    //     console.log($('.tanggal').html());
    //     $('.tanggal').select();
    //     navigator.clipboard.writeText($('.tanggal').html())
    //     alert("Tanggal telah disalin")
    // })
    $('.page-scroll').on('click', function (e) {
        //ambil isi href
        var tujuan = $(this).attr('href')
        //tangkap elemen ybs
        console.log(tujuan)
        var elementTujuan = $(tujuan);
        console.log(elementTujuan)
        //pindahkan scroll
        $("html,body").animate({
            scrollTop: elementTujuan.offset().top
        }, 1000, 'swing');
        e.preventDefault();
    });

});



