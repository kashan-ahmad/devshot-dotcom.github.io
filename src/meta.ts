import { BlogsComponent } from './app/blogs/blogs.component';
import { CatMobileComponent } from './app/cat-mobile/cat-mobile.component';
import { CatUiUxComponent } from './app/cat-ui-ux/cat-ui-ux.component';
import { CatWebComponent } from './app/cat-web/cat-web.component';
import { ComponentCollection, ProductsCollection } from './interfaces';

export const appName = 'Devshot';
export const hostMail = 'devshot.coffee@gmail.com';

export const products: ProductsCollection = {
  salahTawqit: {
    title: 'Salah Tawqit - Prayer Times Calculator',
    category: 'Mobile',
    imageName: 'salah-tawqit.png',
    imageAlt: "Salah Tawqit's Banner.",
    url: encodeURI('https://devshot-dotcom.github.io/salah-tawqit/'),
  },
  seoHelpify: {
    title: 'SEO Helpify - Site Optimization',
    category: 'Web',
    imageName: 'seo-helpify.png',
    imageAlt: "SEO Helpify's Banner.",
    url: encodeURI('https://www.seohelpify.com/'),
  },
  orderSummary: {
    title: 'Order Summary Component',
    category: 'UI / UX',
    imageName: 'order-summary.png',
    imageAlt: "Order Summary Component's Banner.",
    url: encodeURI('https://devshot-dotcom.github.io/order-summary-component/'),
  },
};

/** Components that can be navigated upon by the router. */
export const routerComponents: ComponentCollection = {
  web: {
    label: 'Web',
    path: 'web-apps',
    component: CatWebComponent,
  },
  mobile: {
    label: 'Mobile',
    path: 'mobile-apps',
    component: CatMobileComponent,
  },
  ui_ux: {
    label: 'UI - UX',
    path: 'ui-ux-designs',
    component: CatUiUxComponent,
  },
  blogs: {
    label: 'Blogs',
    path: 'blogs',
    component: BlogsComponent,
  },
};
