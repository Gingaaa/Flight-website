import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CareerComponent } from './pages/career/career.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DigitalMarketingComponent } from './pages/digital-marketing/digital-marketing.component';
import { FareConsolidationComponent } from './pages/fare-consolidation/fare-consolidation.component';
import { HomeComponent } from './pages/home/home.component';
import { LeadershipComponent } from './pages/leadership/leadership.component';
import { LifeAtSpruceflyComponent } from './pages/life-at-sprucefly/life-at-sprucefly.component';
import { ProductDevelopmentComponent } from './pages/product-development/product-development.component';
import { ServicesComponent } from './pages/services/services.component';
import { SprucefareComponent } from './pages/sprucefare/sprucefare.component';
import { TeamComponent } from './pages/team/team.component';
import { WhatWeDoComponent } from './pages/what-we-do/what-we-do.component';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';


const routes: Routes = [
  { path: '',  redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'who-we-are', component: WhoWeAreComponent},
  { path: 'what-we-do', component: WhatWeDoComponent},
  { path: 'team', component: TeamComponent},
  { path: 'leadership', component: LeadershipComponent},

  { path: 'sprucefare', component: SprucefareComponent},
  { path: 'fare-consolidation', component: FareConsolidationComponent},
  { path: 'digital-marketing', component: DigitalMarketingComponent},
  { path: 'product-development', component: ProductDevelopmentComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'life-at-sprucefly', component: LifeAtSpruceflyComponent},
  { path: 'career', component: CareerComponent},
  { path: 'contact', component: ContactComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
