import { Component, OnInit, Input } from '@angular/core';
import { ComponentAttrSet } from 'src/interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() imageName: string = '';
  @Input() imageAlt: string = '';
  @Input() title: string = '';
  @Input() url: string = '';
  @Input() component: ComponentAttrSet | null = null;

  browse(url: string) {
    window.open(url, '_blank')?.focus();
  }

  constructor() {}

  ngOnInit(): void {}
}
