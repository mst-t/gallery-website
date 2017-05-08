import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './account/login.component';
import { WorkAddComponent } from './work/work-add/work-add.component';
import { WorkDetailComponent } from './work/work-detail/work-detail.component';
import { WorkEditComponent } from './work/work-edit/work-edit.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutme', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'work-add', component: WorkAddComponent },
  { path: 'work-detail/:id', component: WorkDetailComponent },
  { path: 'work-edit/:id', component: WorkEditComponent },
  { path: '**', redirectTo: '/home' },
];

export const routing = RouterModule.forRoot(APP_ROUTES, { useHash: true });
