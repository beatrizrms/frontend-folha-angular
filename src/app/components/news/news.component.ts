import { Component, Input, OnInit } from '@angular/core';
import { INew } from 'src/app/models/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @Input() item : INew | undefined;
  @Input() type: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
