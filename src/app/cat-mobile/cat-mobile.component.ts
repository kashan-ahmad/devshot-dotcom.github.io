import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { routerComponents, products, appName } from 'src/meta';

@Component({
  selector: 'app-cat-mobile',
  templateUrl: './cat-mobile.component.html',
  styleUrls: ['./cat-mobile.component.scss'],
})
export class CatMobileComponent implements OnInit {
  products = products;
  components = routerComponents;

  constructor(titleService: Title) {
    titleService.setTitle(`Mobile Applications | ${appName}`);
  }

  ngOnInit(): void {}
}
