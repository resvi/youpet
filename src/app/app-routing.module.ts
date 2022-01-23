import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SectionServicesComponent } from './section-services/section-services.component';
import { SetionServiceComponent } from './setion-service/setion-service.component';

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
