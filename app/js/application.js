(function(){var a;$(document).ready(function(){return $('[data-toggle="tooltip"]').tooltip(),$(".user-menu ul li:first-child a").hover(function(){return $(".user-menu .fa-caret-up").css("color","#2f363d")},function(){return $(".user-menu .fa-caret-up").css("color","#ffffff")}),a(),$(".current-file").click(function(){return $(this).next('input[type="radio"]').prop("checked",!0),$(".current-file").removeClass("default"),$(this).addClass("default")}),$("#menu-trigger-input").change(function(){return this.checked?$("body").css("overflow","hidden"):$("body").css("overflow","auto")})}),$(document).ajaxComplete(function(){return a()}),a=function(){return $(".new-file").on("click",function(){return $(this).next('input[type="file"]').trigger("click")}),$(".file-upload").change(function(){var a,b,c;return c=$(this).val(),a=c.replace(/^.*[\\\/]/,""),b=$(this).prev(".new-file"),b.children("div").text(a),a?(b.css("background-color","#8DC73F"),b.children(".icon-upload-3").css("top","20px")):(b.css("background-color","#00aff1"),b.children(".icon-upload-3").css("top","41px"))})}}).call(this);