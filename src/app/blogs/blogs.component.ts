import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { appName } from 'src/meta';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  constructor(titleService: Title) {
    titleService.setTitle(`Platforms where we blog | ${appName}`);
  }

  ngOnInit(): void {}
}
