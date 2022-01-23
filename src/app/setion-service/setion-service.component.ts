import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setion-service',
  templateUrl: './setion-service.component.html',
  styleUrls: ['./setion-service.component.css']
})
export class SetionServiceComponent implements OnInit {
  idSection = "row-services";
  colorBg = "bg-warning";

  title = "Title Here";
  parrafo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat asperiores illo?";

  rutaImagen1 = "../assets/multimedia/jpg/sonriente-mujer-veterinario-tocando-boca-perro-clinica.jpg";
  infoImagen1 = "sonriente-mujer-veterinario-tocando-boca-perro-clinica";
  titleImagen1 ="Veterinarian";
  textImagen1 ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, odit officiis!";

  rutaImagen2 = "../assets/multimedia/jpg/vista-lateral-veterinario-sexo-femenino-sonriente-perro-tabla-clinica.jpg";
  infoImagen2 = "sonriente-mujer-veterinario-tocando-boca-perro-clinica";
  titleImagen2 ="Vaccination Care";
  textImagen2 ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, odit officiis!";

  rutaImagen3 = "../assets/multimedia/jpg/veterinario-sexo-femenino-que-examina-perro-estetoscopio-clinica.jpg";
  infoImagen3 = "sonriente-mujer-veterinario-tocando-boca-perro-clinica";
  titleImagen3 ="Dental Care ";
  textImagen3 ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, odit officiis!";

  constructor() { }

  ngOnInit(): void {
  }

}
