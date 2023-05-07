import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ContentComponent } from './theme/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';
import { WhatWeDoComponent } from './pages/what-we-do/what-we-do.component';
import { TeamComponent } from './pages/team/team.component';
import { LeadershipComponent } from './pages/leadership/leadership.component';
import { ProductDevelopmentComponent } from './pages/product-development/product-development.component';
import { DigitalMarketingComponent } from './pages/digital-marketing/digital-marketing.component';
import { FareConsolidationComponent } from './pages/fare-consolidation/fare-consolidation.component';
import { SprucefareComponent } from './pages/sprucefare/sprucefare.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServicesComponent } from './pages/services/services.component';
import { LifeAtSpruceflyComponent } from './pages/life-at-sprucefly/life-at-sprucefly.component';
import { CareerComponent } from './pages/career/career.component';
import { ContactComponent } from './pages/contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    AboutComponent,
    WhoWeAreComponent,
    WhatWeDoComponent,
    TeamComponent,
    LeadershipComponent,
    ProductDevelopmentComponent,
    DigitalMarketingComponent,
    FareConsolidationComponent,
    SprucefareComponent,
    ServicesComponent,
    LifeAtSpruceflyComponent,
    CareerComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
