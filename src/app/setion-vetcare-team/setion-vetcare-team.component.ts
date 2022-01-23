import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setion-vetcare-team',
  templateUrl: './setion-vetcare-team.component.html',
  styleUrls: ['./setion-vetcare-team.component.css']
})
export class SetionVetcareTeamComponent implements OnInit {

  
  idSection = "salePets";
  colorBg = "bg-light";
  
  
  title = "The vetcare team";
  parrafo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat asperiores illo?";
  
  rutaImagen1 = "../assets/multimedia/jpg/concepto-salud-medico-sonriente-doctora-asiatica-uniforme-hospital-estetoscopio-looki.jpg";
  infoImagen1 = "Bulldog-youpet";
  titleImagen1 ="Jennifer Mullen";
  textImagen1 ="VETERINARY";

  rutaImagen2 = "../assets/multimedia/jpg/trabajadores-salud-prevencion-virus-concepto-campana-cuarentena-sonriente-medico-bastante-asiatico-pasante-sexo-femenino-matorrales-muestran-pulgar-arriba-sosteniendo-portapapeles-traen-resultados-positi.jpg";
  infoImagen2 = "retrato-perro-tabla-clinica";
  titleImagen2 = "Sheeren Collins";
  textImagen2 ="ADMINISTRATION";

  rutaImagen3 = "../assets/multimedia/jpg/hermosa-enfermera-afroamericana-uniforme-azul-sonriendo-mirando-camara.jpg";
  infoImagen3 = "perro-sentado";
  titleImagen3 = "Jennifer Mullen";
  textImagen3 = "VETERINARY";

  constructor() { }

  ngOnInit(): void {
  }

}
