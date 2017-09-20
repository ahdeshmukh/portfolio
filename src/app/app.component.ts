import { Component } from '@angular/core';

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

  /*flask_image = '/assets/images/projects/1.png';
  angular2_cli = '/assets/images/projects/2.png';*/
}
