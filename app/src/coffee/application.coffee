$(document).ready ->

    ## Handle colour change for user-menu caveat
    $(".user-menu ul li:first-child a").hover (->
        $(".user-menu .fa-caret-up").css 'color', '#2f363d'
    ), ->
        $(".user-menu .fa-caret-up").css 'color', '#ffffff'

    ## Attachment upload UI
    $('.new-file').click ->
        $(@).next('input[type="file"]').trigger('click');

    $('.file-upload').change ->
        value = $(@).val()
        clean = value.replace(/^.*[\\\/]/, '')
        parent = $(@).prev('.new-file')
        parent.children('div').text clean
        parent.css 'background-color', '#8DC73F'
        parent.children('.icon-upload-3').css 'top', '20px'
        
    $('.current-file').click ->
        $(@).next('input[type="radio"]').prop 'checked', true
        $('.current-file').removeClass 'default'
        $(@).addClass 'default'