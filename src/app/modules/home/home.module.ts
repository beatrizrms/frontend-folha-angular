import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { CarouselModule } from 'src/app/components/carousel/carousel.module';
import { NewsModule } from 'src/app/components/news/news.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    NewsModule
  ]
})
export class HomeModule { }
