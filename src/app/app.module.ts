import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { SetionServiceComponent } from './setion-service/setion-service.component';
import { SetionSalePetsComponent } from './setion-sale-pets/setion-sale-pets.component';
import { SetionVetcareTeamComponent } from './setion-vetcare-team/setion-vetcare-team.component';
import { SetionResultsComponent } from './setion-results/setion-results.component';
import { SetionRecentPostComponent } from './setion-recent-post/setion-recent-post.component';
import { FooterComponent } from './footer/footer.component';
import { SectionServicesComponent } from './section-services/section-services.component';
import { SectionLoverAnimalsComponent } from './section-lover-animals/section-lover-animals.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SetionServiceComponent,
    SetionSalePetsComponent,
    SetionVetcareTeamComponent,
    SetionResultsComponent,
    SetionRecentPostComponent,
    FooterComponent,
    SectionServicesComponent,
    SectionLoverAnimalsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
