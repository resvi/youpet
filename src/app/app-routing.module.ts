import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionServicesComponent } from './section-services/section-services.component';
import { SetionServiceComponent } from './setion-service/setion-service.component';
import { SectionLoverAnimalsComponent } from './section-lover-animals/section-lover-animals.component';
import { SetionSalePetsComponent } from './setion-sale-pets/setion-sale-pets.component';
import { SetionVetcareTeamComponent } from './setion-vetcare-team/setion-vetcare-team.component';
import { SetionResultsComponent } from './setion-results/setion-results.component';
import { SetionRecentPostComponent } from './setion-recent-post/setion-recent-post.component';

const routes: Routes = [
  {
    path : 'home',
    component:HomeComponent
  },
  {
    path : 'about',
    component:SectionServicesComponent
  },
  {
    path : 'services',
    component:SetionServiceComponent
  },
  {
    path : 'contact',
    component:FooterComponent
  },
  {
    path : '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
