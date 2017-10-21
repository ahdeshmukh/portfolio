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
      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
          $(".navbar").css({"background":"black", "padding-top":"10px", "padding-bottom":"10px"});
          $(".navbar-brand").css({"font-size":"54px", "padding-top":"20px"});
          $(".navbar-custom .navbar-nav > li > a").css({"color":"#fff"});
        } else{
          $(".navbar").css({"background":"transparent"});
          if (window.matchMedia('(min-width: 520px)').matches) {
            $(".navbar").css({"padding-top":"20px", "padding-bottom":"20px"});
            $(".navbar-brand").css({"font-size":"80px", "padding-top":"30px"});
            $(".navbar-custom .navbar-nav > li > a").css({"color":"#fff"});
          }
          $(".navbar-custom .navbar-nav > li > a").css({"color":"#271f1f"});
        }
      });
    });
  }

}