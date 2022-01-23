import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setion-recent-post',
  templateUrl: './setion-recent-post.component.html',
  styleUrls: ['./setion-recent-post.component.css']
})
export class SetionRecentPostComponent implements OnInit {

  idSection = "row-services";
  colorBg = "bg-light";

  title = "Recent Post";
  parrafo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat asperiores illo?";

  rutaImagen1 = "../assets/multimedia/jpg/sonriente-mujer-veterinario-tocando-boca-perro-clinica.jpg";
  infoImagen1 = "sonriente-mujer-veterinario-tocando-boca-perro-clinica";
  titleImagen1 ="As veterinarian and lover animals";
  textImagen1 ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, odit officiis!";

  rutaImagen2 = "../assets/multimedia/jpg/vista-lateral-veterinario-sexo-femenino-sonriente-perro-tabla-clinica.jpg";
  infoImagen2 = "sonriente-mujer-veterinario-tocando-boca-perro-clinica";
  titleImagen2 ="As veterinarian and lover animals";
  textImagen2 ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, odit officiis!";

  rutaImagen3 = "../assets/multimedia/jpg/veterinario-sexo-femenino-que-examina-perro-estetoscopio-clinica.jpg";
  infoImagen3 = "sonriente-mujer-veterinario-tocando-boca-perro-clinica";
  titleImagen3 ="As veterinarian and lover animals ";
  textImagen3 ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, odit officiis!";

  constructor() { }

  ngOnInit(): void {
  }

}
