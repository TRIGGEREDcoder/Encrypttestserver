import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { AppswiftDemSharedModule } from 'app/shared/shared.module';
import { AppswiftDemCoreModule } from 'app/core/core.module';
import { AppswiftDemAppRoutingModule } from './app-routing.module';
import { AppswiftDemHomeModule } from './home/home.module';
import { AppswiftDemEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    AppswiftDemSharedModule,
    AppswiftDemCoreModule,
    AppswiftDemHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    AppswiftDemEntityModule,
    AppswiftDemAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class AppswiftDemAppModule {}
