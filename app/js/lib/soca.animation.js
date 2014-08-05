soca.animation =
{

    loading: function()
    {
        $('.loading-trigger, input[type=submit]').on('click', function() 
        {
            $('.loading-overlay').css('height', '100%').addClass('active');
            return $('.loading5').addClass('active');
        });
    },

    colourCaveat: function()
    {
        $(".user-menu ul li:first-child a").hover((function() 
        {
            return $(".user-menu .fa-caret-up").css('color', '#2f363d');
        }), function() 
        {
            return $(".user-menu .fa-caret-up").css('color', '#ffffff');
        });
    },

    attachmentHandler: function() 
    {
        $('body').on('click', '.new-file', function() 
        {
            return $(this).next('input[type="file"]').trigger('click');
        });
        $('body').on('change', '.file-upload', function()
        {
          var clean, parent, value;
          value = $(this).val();
          clean = value.replace(/^.*[\\\/]/, '');
          parent = $(this).prev('.new-file');
          parent.children('div').text(clean);
          if (clean) 
          {
            return parent.css('background-color', '#8DC73F').children('.icon-upload-3').css('top', '20px');
          } else 
          {
            return parent.css('background-color', '#00aff1').children('.icon-upload-3').css('top', '41px');
          }
        });
        $('.current-file').click(function() 
        {
            $(this).next('input[type="radio"]').prop('checked', true);
            $('.current-file').removeClass('default');
            return $(this).addClass('default');
        });
    }
}