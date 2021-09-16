import { Component, OnInit } from '@angular/core';
import { hostMail } from 'src/meta';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  hostMail = hostMail;

  constructor() {}

  ngOnInit(): void {}
}
