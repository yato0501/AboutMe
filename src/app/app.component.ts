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

  public GotoLinkedIn() : void {
    window.open('https://www.linkedin.com/in/tou-yang-8a88a059/', '_blank');
  }

  
  public GotoGitHub() : void {
    window.open('https://github.com/yato0501', '_blank');
  }
}
