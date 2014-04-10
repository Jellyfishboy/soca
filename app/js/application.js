(function() {
  $(document).ready(function() {
    return $(".user-menu ul li:first-child a").hover((function() {
      return $(".user-menu .fa-caret-up").css('color', '#2f363d');
    }), function() {
      return $(".user-menu .fa-caret-up").css('color', '#ffffff');
    });
  });

}).call(this);

//# sourceMappingURL=application.js.map
