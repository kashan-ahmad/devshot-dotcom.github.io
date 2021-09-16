import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { routerComponents, products, appName } from 'src/meta';

@Component({
  selector: 'app-cat-web',
  templateUrl: './cat-web.component.html',
  styleUrls: ['./cat-web.component.scss'],
})
export class CatWebComponent implements OnInit {
  products = products;
  components = routerComponents;

  constructor(titleService: Title) {
    titleService.setTitle(`Web Applications | ${appName}`);
  }

  ngOnInit(): void {}
}
