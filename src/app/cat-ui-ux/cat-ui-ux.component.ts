import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { routerComponents, products, appName } from 'src/meta';

@Component({
  selector: 'app-cat-ui-ux',
  templateUrl: './cat-ui-ux.component.html',
  styleUrls: ['./cat-ui-ux.component.scss'],
})
export class CatUiUxComponent implements OnInit {
  products = products;
  components = routerComponents;

  constructor(titleService: Title) {
    titleService.setTitle(`UI / UX Designs | ${appName}`);
  }

  ngOnInit(): void {}
}
