(function() {
  $(function() {
    $(".navbar-expand-toggle").click(function() {
      $(".app-container").toggleClass("expanded");
      return $(".navbar-expand-toggle").toggleClass("fa-rotate-90");
    });
    return $(".navbar-right-expand-toggle").click(function() {
      $(".navbar-right").toggleClass("expanded");
      return $(".navbar-right-expand-toggle").toggleClass("fa-rotate-90");
    });
  });

  $(function() {
    $('.input-checkbox, .input-radio').iCheck({
      checkboxClass: 'icheckbox_flat',
      radioClass: 'iradio_flat'
    });
  });

  $(function() {
    return $('.toggle-checkbox').bootstrapSwitch();
  });

  $(function() {
    return $('.match-height').matchHeight();
  });

  $(function() {
    return $('.datatable').DataTable();
  });

}).call(this);