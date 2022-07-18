// Swal.fire({
//     title: 'Masukkan Nama Kamu',
//     input: 'text',
//     inputAttributes: {
//         autocapitalize: 'off'
//     },
//     showCancelButton: false,
//     confirmButtonText: 'Kirim',
//     preConfirm: (nama) => {

//     }
// })
// $(".tujuan").html(nama);
// auto animation

$('.fade-right').addClass("oke");
$(".in-auto").addClass("scale-in");
// cover-down
$('.cover-down').each(function (i) {
    setTimeout(function () {
        $('.cover-down').eq(i).addClass('show');
    }, 250 * (i + 1))
})
// buka
var buka = document.querySelector(".buka");
buka.addEventListener("click", function () {
    $(".cover").addClass("hilang");
    $('.fade-left').addClass("oke");
    $("#player").get(0).play();
    document.getElementById('player').muted = false;
})
// $(".buka").on("click", function () {

// })
// animation
// lah
// document.body.lah.addEventListener("scroll", function () {
//     document.getElementById('player').play();
// })

$('.lah').scroll(function () {
    // $("#player").get(0).play();
    document.getElementById('player').muted = false;
    document.getElementById('player').play();
    if (!$(".music").hasClass("mactive")) {
        $(".music").addClass("mactive");
        $(".music").removeClass("shadow-md");
        $(".music").addClass("shadow-lg");
        $(".music").removeClass("bg-primary");
        $(".music").addClass("bg-secondary");

    }

    var wsScroll = $(this).scrollTop();
    if (wsScroll > $('.fade-left').offset().top - 100) {
        // alert("oke");
        $('.fade-left').addClass("oke");
    }
    $('.couple').each(function (i) {
        if (wsScroll > $(".couple").eq(i).offset().top - 50) {
            setTimeout(function () {
                $('.couple').eq(i).addClass('show');
            }, 300 * (i + 1))
        }
    })
    if (($(".waktu").offset().top - 100 < 200)) {
        $(".waktu").addClass("oke");
        console.log($(".waktu").offset().top - 100)
        console.log(wsScroll)
    }
    if ($(".location").offset().top - 100 < 200) {
        $(".lokasi-down").each(function (i) {
            setTimeout(function () {
                $('.lokasi-down').eq(i).addClass("show");
            }, 300 * (i + 1))
        })
    }
    //story
    if ($(".ls").offset().top - 100 < 200) {
        $(".story").each(function (i) {
            setTimeout(function () {
                $('.story').eq(i).addClass("oke");
            }, 300 * (i + 1))
        })
    }
    // image
    if ($(".galeri").offset().top - 100 < 200) {
        $(".image").each(function (i) {
            setTimeout(function () {
                $('.image').eq(i).addClass("tampil");
            }, 300 * (i + 1))
        })
    }
    // form
    if ($(".form").offset().top - 100 < 200) {
        $('.form').addClass("show");
    }
    // pesan
    if ($(".pesan").offset().top - 100 < 200) {
        $(".psn").each(function (i) {
            setTimeout(function () {
                $('.psn').eq(i).addClass("show");
            }, 300 * (i + 1))
        })
    }
})
// window
$(window).scroll(function () {
    // $("#player").get(0).play();
    document.getElementById('player').muted = false;
    document.getElementById('player').play();
    $("#player").get(0).play();
    if (!$(".music").hasClass("mactive")) {
        $(".music").addClass("mactive");
        $(".music").removeClass("shadow-md");
        $(".music").addClass("shadow-lg");
        $(".music").removeClass("bg-primary");
        $(".music").addClass("bg-secondary");

    }

    var wsScroll = $(this).scrollTop();
    if (wsScroll > $('.fade-left').offset().top - 250) {
        // alert("oke");
        $('.fade-left').addClass("oke");
    }
    $('.couple').each(function (i) {
        if (wsScroll > $(".couple").eq(i).offset().top - 300) {
            $('.couple').eq(i).addClass('show');

        }
    })
    if (wsScroll > $(".waktu").offset().top - 250) {
        $(".waktu").addClass("oke");
    }
    if (wsScroll > $(".location").offset().top - 250) {
        $(".lokasi-down").each(function (i) {
            setTimeout(function () {
                $('.lokasi-down').eq(i).addClass("show");
            }, 300 * (i + 1))
        })
    }
    //story
    if (wsScroll > $(".ls").offset().top - 250) {
        $(".story").each(function (i) {
            setTimeout(function () {
                $('.story').eq(i).addClass("oke");
            }, 300 * (i + 1))
        })
    }
    //galeri
    if (wsScroll > $(".galeri").offset().top - 250) {
        $(".image").each(function (i) {
            setTimeout(function () {
                $('.image').eq(i).addClass("tampil");
            }, 300 * (i + 1))
        })
    }
    // form
    if (wsScroll > $(".form").offset().top - 250) {
        $('.form').addClass("show");
    }
    // pesan
    if (wsScroll > $(".pesan").offset().top - 250) {
        $(".psn").each(function (i) {
            setTimeout(function () {
                $('.psn').eq(i).addClass("show");
            }, 300 * (i + 1))
        })
    }
})
$('.page-scroll').on('click', function (e) {
    //ambil isi href
    var tujuan = $(this).attr('href')
    //tangkap elemen ybs
    console.log(tujuan)
    var elementTujuan = $(tujuan);
    console.log(elementTujuan)
    //pindahkan scroll
    $(".lah").animate({
        scrollTop: elementTujuan.offset().top
    }, 1000, 'swing');
    e.preventDefault();
});
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
