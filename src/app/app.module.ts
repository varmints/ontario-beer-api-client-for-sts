import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ColumnsComponent } from './columns/columns.component';
import { SharedModule } from './_modules/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ListBeersComponent } from './list-beers/list-beers.component';
import { FooterComponent } from './footer/footer.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { OptionsModalComponent } from './options-modal/options-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    NotFoundComponent,
    ColumnsComponent,
    ListBeersComponent,
    FooterComponent,
    ImageViewerComponent,
    OptionsModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
