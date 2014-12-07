$(document).ready(function() {

      $('.back-to-top').fadeOut(0);

      $('#simple-menu').sidr({
          onOpen: function(){
            $('body').append('<div class="sidroverlay"></div>');
            $('#simple-menu').fadeOut(500);
        },
          onClose: function(){
            $('.sidroverlay').remove();

        },
        speed: 500
      });

      $(document).on('click','.sidroverlay',function(){
         $.sidr('close');
         $('#simple-menu').fadeIn(500);
      });


      $("#search-button-id").click(function(){
        $('.back-to-top').click();
        $(this).fadeOut(500)
        $("#search-field").fadeIn(500);
        $("#search-field").focus();
      });

      $(document).keyup(function(e) {
          if (e.keyCode == 13 || e.keyCode == 27) { 
            $("#search-field").val("").change();
              $("#search-button-id").fadeIn(500);
              $("#search-field").fadeOut(500);
          } 
      });


      $(document).on('scroll', function(){
        if ($(window).scrollTop() > $(window).height()){
          $('.back-to-top').fadeIn(500);
        }else{
           $('.back-to-top').fadeOut(500);
        }
      });

      $('.back-to-top').on('click', function(){
        var distanceToTop = $('.back-to-top').offset().top
        console.log(distanceToTop);
        $('html, body').animate({scrollTop: 0}, 1000, 'linear');
      });

      $("#qr-code").qrcode({
          render: "canvas",
          size: 100,
          fill: "#232323",
          text: "hi there",
          background: "#FFFFFF"
      });
});