import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularSvgIconModule } from 'angular-svg-icon';
import { LAZYLOAD_IMAGE_HOOKS, LazyLoadImageModule, ScrollHooks } from 'ng-lazyload-image';

import { AppRoutingModule } from './app-routing.module';
import { InterceptorModule } from './interceptors/interceptor.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { SwitchMenuComponent } from './components/switch-menu/switch-menu.component';
import { CardComponent } from './components/card/card.component';
import { RatingComponent } from './components/rating/rating.component';
import { IconComponent } from './components/icon/icon.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { DebounceKeyupDirective } from './directives/debounce-keyup.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AtEndOfThePageDirective } from './directives/at-end-of-page.directive';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { CustomDatePipe } from './components/pipes/date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchInputComponent,
    InputTextComponent,
    SwitchMenuComponent,
    CardComponent,
    RatingComponent,
    IconComponent,
    MovieListComponent,
    DebounceKeyupDirective,
    NotFoundComponent,
    AtEndOfThePageDirective,
    MovieDetailsComponent,
    CustomDatePipe,
  ],
  imports: [
    AngularSvgIconModule.forRoot(),
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InterceptorModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
  ],
  providers: [{provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks}],
  bootstrap: [AppComponent],
})
export class AppModule {}
