(function() {

  $(function() {
    $('.image').fancybox();
    return $(this).on('click', 'a:not(:has(img))', function(e) {
      if (/^https?:\/\//.test(this.href) && this.host !== location.host) {
        e.stopPropagation();
        e.preventDefault();
        return window.open(this.href, null);
      }
    });
  });

}).call(this);
