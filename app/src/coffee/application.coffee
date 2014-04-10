$(document).ready ->
    $(".user-menu ul li:first-child a").hover (->
        $(".user-menu .fa-caret-up").css 'color', '#2f363d'
    ), ->
        $(".user-menu .fa-caret-up").css 'color', '#ffffff'
