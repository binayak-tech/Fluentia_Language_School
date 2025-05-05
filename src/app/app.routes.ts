import { Routes } from '@angular/router';
import { LanguageDetailComponent } from './pages/languages/language-detail/language-detail.component';
import { BlogListingComponent } from './pages/blog-listing/blog-listing.component';
import { BlogViewComponent } from './pages/blog-view/blog-view.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'careers',
    loadComponent: () => import('./pages/career/career.component').then(m => m.CareerComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq.component').then(m => m.FaqComponent)
  },
  {
    path: 'sample-sessions',
    loadComponent: () => import('./pages/sample-sessions/sample-sessions.component').then(m => m.SampleSessionsComponent)
  },
  {
    path: 'languages/:language',
    component: LanguageDetailComponent
  },
  {
    path: 'languages',
    redirectTo: '/',
    pathMatch: 'full'
  },
  // Blog routes
  {
    path: 'blogs',
    component: BlogListingComponent
  },
  {
    path: 'blog/:slug',
    component: BlogViewComponent
  },
  {
    path: 'not-found',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];
