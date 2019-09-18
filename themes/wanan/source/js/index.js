$(function () {
    var post = new PerfectScrollbar('#post', {
        wheelSpeed: 2,
        wheelPropagation: true
    })
});

$('.category').on('click', 'li', function () {
    var category = $(this).text().replace(/^\s+|\s+$/g, "");
    $(".category li").removeClass('active');
    $(this).addClass('active');
    if (!($(this).hasClass("all"))) {
        $(".tag ul li a").each(function () {
            if ($(this).data('category') != category) {
                $(this).css('display', 'none');
            } else {
                $(this).css('display', 'block');
            };
        });
    } else {
        $(".tag ul li a").each(function () {
            $(this).css('display', 'block');
        });
    }
})