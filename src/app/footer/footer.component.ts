import { Component, OnInit } from '@angular/core';
import { hostMail } from 'src/meta';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  hostMail = hostMail;

  constructor() {}

  ngOnInit(): void {}
}
