$(window).on('load', function () {
  $('.info-btn').on('click', function(){
    let $infoBtn = $('.info-btn');
    $infoBtn.removeClass('active');
    $changeBox = $(this).attr('rel')
    
    $('.info-box.active').slideUp(250, changePanel)

    function changePanel(){
      $(this).removeClass('active');
      $('#'+ $changeBox).slideDown(250, function(){
        $(this).addClass('active');
      })
    }
  })
})