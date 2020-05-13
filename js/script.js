$(document).ready(function () {
  $('.menu-btn').on('click', function () {
    $('.menu-btn i').toggleClass('fa-times');
    $('.menu').toggleClass('menu_active');

    $('.content').toggleClass('content_active')
    $('.icons').toggleClass('active')
    $('.bl').toggleClass('active')
  })
})