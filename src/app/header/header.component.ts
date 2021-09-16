import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ComponentAttrSet } from 'src/interfaces';
import { appName, routerComponents } from 'src/meta';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  appName = appName;
  isLandingComponent = true;
  currentComponent: ComponentAttrSet | null = null;

  constructor(router: Router) {
    // Observe router events.
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setCurrentComponentFrom(event.url.substring(1));

        // null for LandingComponent and ComponentAttrSet otherwise
        this.isLandingComponent = this.currentComponent == null;
      }
    });
  }

  ngOnInit(): void {}

  /**
   * Setter for the currentComponent property.
   * Matches the provided path to every path of the routerComponents object.
   * Matching path's object is assigned to the currentComponent, otherwise it's assigned null.
   * @param {string} path - The current router event url.
   */
  setCurrentComponentFrom(path: string) {
    Object.values(routerComponents).some((component) => {
      if (component.path === path) {
        this.currentComponent = component;
        return true;
      }

      this.currentComponent = null;
      return false;
    });
  }
}
