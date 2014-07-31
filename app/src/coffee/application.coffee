$(document).ready ->
    attachmentUi()
    
    $('td.inner-table').each ->
        $(@).find('table').height($(@).outerHeight())

    unless $('html').hasClass 'touch'
        $('[data-toggle="tooltip"]').tooltip()
    ## Handle colour change for user-menu caveat
    $(".user-menu ul li:first-child a").hover (->
        $(".user-menu .fa-caret-up").css 'color', '#2f363d'
    ), ->
        $(".user-menu .fa-caret-up").css 'color', '#ffffff'

    $('.current-file').click ->
        $(@).next('input[type="radio"]').prop 'checked', true
        $('.current-file').removeClass 'default'
        $(@).addClass 'default'

    $('#menu-trigger-input').change ->
        if @checked
            $('body').css 'overflow', 'hidden'
        else
            $('body').css 'overflow', 'auto'

    $('.loading-trigger').on 'click', ->
        $('.loading-overlay').css('height', '100%').addClass 'active'
        $('.loading5').addClass 'active'

attachmentUi = ->
    $('body').on 'click', '.new-file', ->
        $(@).next('input[type="file"]').trigger 'click'

    $('body').on 'change', '.file-upload', ->
        value = $(@).val()
        clean = value.replace(/^.*[\\\/]/, '')
        parent = $(@).prev '.new-file'
        parent.children('div').text clean
        if clean
            parent.css('background-color', '#8DC73F').children('.icon-upload-3').css 'top', '20px'
        else 
            parent.css('background-color', '#00aff1').children('.icon-upload-3').css 'top', '41px'