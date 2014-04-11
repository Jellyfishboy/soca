(function() {
  $(document).ready(function() {
    $(".user-menu ul li:first-child a").hover((function() {
      return $(".user-menu .fa-caret-up").css('color', '#2f363d');
    }), function() {
      return $(".user-menu .fa-caret-up").css('color', '#ffffff');
    });
    $('.new-file').click(function() {
      return $(this).next('input[type="file"]').trigger('click');
    });
    $('.file-upload').change(function() {
      var clean, parent, value;
      value = $(this).val();
      clean = value.replace(/^.*[\\\/]/, '');
      parent = $(this).prev('.new-file');
      parent.children('div').text(clean);
      parent.css('background-color', '#8DC73F');
      return parent.children('.icon-upload-3').css('top', '20px');
    });
    return $('.current-file').click(function() {
      $(this).next('input[type="radio"]').prop('checked', true);
      $('.current-file').removeClass('default');
      return $(this).addClass('default');
    });
  });

}).call(this);

//# sourceMappingURL=application.js.map
