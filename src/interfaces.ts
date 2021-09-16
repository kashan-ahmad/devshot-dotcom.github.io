import { CatMobileComponent } from './app/cat-mobile/cat-mobile.component';
import { CatWebComponent } from './app/cat-web/cat-web.component';

export interface Product {
  title: string;
  category: string;
  imageName: string;
  imageAlt: string;
  url: string;
}

export interface ProductsCollection {
  [key: string]: Product;
}

export interface ComponentAttrSet {
  label: string;
  path: string;
  component: any;
}

export interface ComponentCollection {
  [key: string]: ComponentAttrSet;
}
