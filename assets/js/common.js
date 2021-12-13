$(function() {
    $("#header").load("./header.html");
    $("#footer").load("./footer.html");
});

function showDropdown(obj) {
    $('.header-dropdown').slideUp(300);
    $(obj).closest('div').find('.header-dropdown').slideDown(300);
}

function hideDropdown() {
    $('.header-dropdown').slideUp(300);
}