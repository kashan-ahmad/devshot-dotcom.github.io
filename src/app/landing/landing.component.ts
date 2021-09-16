import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { routerComponents, products, appName } from 'src/meta';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  products = products;
  components = routerComponents;

  constructor(titleService: Title) {
    titleService.setTitle(`Welcome to ${appName}`);
  }

  ngOnInit(): void {}
}
