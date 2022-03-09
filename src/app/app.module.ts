import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppRoutingModule } from './app-routing.module';
import { InterceptorModule } from './interceptors/interceptor.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { SwitchMenuComponent } from './components/switch-menu/switch-menu.component';
import { CardComponent } from './components/card/card.component';
import { RatingComponent } from './components/rating/rating.component';
import { IconComponent } from './components/icon/icon.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    InputTextComponent,
    SwitchMenuComponent,
    CardComponent,
    RatingComponent,
    IconComponent,
    MovieListComponent,
  ],
  imports: [
    AngularSvgIconModule.forRoot(),
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InterceptorModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
