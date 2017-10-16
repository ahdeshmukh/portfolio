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
	$(window).on("scroll",function(){
  	var wn = $(window).scrollTop();
    if(wn > 120){
    	$(".navbar-default").css("background","rgba(255,0,0,1)");
    }
    else{
    	$(".navbar-default").css("background","rgba(1,1,1,1)");
    }
  });
});
  }


}
