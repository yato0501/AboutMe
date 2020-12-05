import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-link',
  templateUrl: './other-link.component.html',
  styleUrls: ['./other-link.component.css']
})
export class OtherLinkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public GotoLink(link: string) {
    window.open(link, '_blank');
  }

}
