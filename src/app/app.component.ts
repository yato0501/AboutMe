import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AboutMe';

  constructor() {

  }

  public GotoLink(link: string) {
    window.open(link, '_blank');
  }
}
