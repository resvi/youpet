import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  textLogo = 'youpet';
  infoBrand = 'Mas que salud, es cariño';
  rutaLogo = '../assets/multimedia/png/youpet.png';
  constructor() { }

  ngOnInit(): void {
  }

}
