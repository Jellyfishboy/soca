(function(){$(document).ready(function(){return $(".user-menu ul li:first-child a").hover(function(){return $(".user-menu .fa-caret-up").css("color","#2f363d")},function(){return $(".user-menu .fa-caret-up").css("color","#ffffff")}),$(".new-file").click(function(){return $(this).next('input[type="file"]').trigger("click")}),$(".file-upload").change(function(){var a,b,c;return c=$(this).val(),a=c.replace(/^.*[\\\/]/,""),b=$(this).prev(".new-file"),b.children("div").text(a),b.css("background-color","#8DC73F"),b.children(".icon-upload-3").css("top","20px")}),$(".current-file").click(function(){return $(this).next('input[type="radio"]').prop("checked",!0),$(".current-file").removeClass("default"),$(this).addClass("default")})})}).call(this);