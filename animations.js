$(window).on('load', function () {
  $('.info-btn').on('click', function(){
    let $infoBtn = $('.info-btn');
    $infoBtn.removeClass('active');
    $(this).addClass('active');
    $changeBox = $(this).attr('rel');
    
    $('.info-box.active').slideUp(300, changePanel)

    function changePanel(){
      $(this).removeClass('active');
      $('#'+ $changeBox).slideDown(300, function(){
        $(this).addClass('active');
      })
    }
  })
})