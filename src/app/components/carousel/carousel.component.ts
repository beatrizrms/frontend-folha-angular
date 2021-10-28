import { Component, Input, OnInit } from '@angular/core';
import { INew } from 'src/app/models/news.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() items : INew[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
