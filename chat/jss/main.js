jQuery(document).ready(function(){

    $('.slider').ripples({
        dropRadius: 13,
        perturbance: 0.01,
        
      });

      //$(".text").typed({
           // strings:["<strong>i love</strong><strong class='primary'> codings.</strong>","<strong> and to </strong><strong
            // class='primary' share!! .</strong>"],
            //typespeed:0,
            //loop:true
            

      $(window).scroll(function(){
            var top =$(window).scrollTop();
            if(top>=60){
                  $("nav").addclass('secondary');
            }
            else
            if($("nav").hasclass('secondary')){
                  $("nav").removeclass('secondary');
            }
      });

      $('.work').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            // other options
            gallery: {
                  enabled: true
                }
                
          });

          

          







});