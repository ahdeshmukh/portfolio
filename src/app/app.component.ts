import { Component, OnInit } from '@angular/core';
declare const $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  my_photo = '/assets/images/amit_photo.jpg';
  flask_image = '/assets/images/projects/flask.png';
  angular2_cli = '/assets/images/projects/angular2cli.png';
  vcn_image = '/assets/images/projects/vcn.png';
  directsource_image = '/assets/images/projects/directsource.png';
  resume = '/assets/resume.pdf';

  /*flask_image = '/assets/images/projects/1.png';
  angular2_cli = '/assets/images/projects/2.png';*/

  ngOnInit(): void {
    $(document).ready(function(){
      if (window.matchMedia('(min-width: 1224px)').matches) {
         $('.navbar').removeClass('navbar-static-top').addClass("navbar-fixed-top");
      }
      
      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
          $(".navbar").css({"background":"black", "padding-top":"10px", "padding-bottom":"10px"});
          $(".navbar-brand").css({"font-size":"54px", "padding-top":"20px"});
          $(".navbar-custom .navbar-nav > li > a").css({"color":"#fff"});
        } else{
          $(".navbar-custom .navbar-nav > li > a").css({"color":"#fff"});
          if (window.matchMedia('(min-width: 1224px)').matches) {
            $(".navbar").css({"background":"transparent"});
            $(".navbar").css({"padding-top":"20px", "padding-bottom":"20px"});
            $(".navbar-brand").css({"font-size":"90px", "padding-top":"30px"});
            $(".navbar-custom .navbar-nav > li > a").css({"color":"#271f1f"});
          }
        }
      });

      $("#myNavbar a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });

        } // End if

      });


    });
  }

}