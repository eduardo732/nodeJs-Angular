import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public web: string;

  constructor() {
    this.title='Eduardo Fuentes';
    this.subtitle='Desarrollador web'
    this.web= 'Mi web';
   }

  ngOnInit(): void {
  }

}
