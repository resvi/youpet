import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setion-sale-pets',
  templateUrl: './setion-sale-pets.component.html',
  styleUrls: ['./setion-sale-pets.component.css']
})
export class SetionSalePetsComponent implements OnInit {

  idSection = "salePets";
  colorBg = "bg-warning";
  
  
  title = "Title Here";
  parrafo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat asperiores illo?";
  
  rutaImagen1 = "../assets/multimedia/jpg/bulldog-youpet.jpg";
  infoImagen1 = "Bulldog-youpet";
  titleImagen1 ="$30";
  textImagen1 ="Buy Now";

  rutaImagen2 = "../assets/multimedia/jpg/retrato-perro-tabla-clinica.jpg";
  infoImagen2 = "retrato-perro-tabla-clinica";
  titleImagen2 = "$25";
  textImagen2 ="Buy Now";

  rutaImagen3 = "../assets/multimedia/jpg/perro-sentado.JPG";
  infoImagen3 = "perro-sentado";
  titleImagen3 = "$20";
  textImagen3 = "Buy Now";

  constructor() { }

  ngOnInit(): void {
  }

}
