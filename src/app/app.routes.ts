import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'profile',
    children: [
      {
        path: 'edit',
        component: EditUserComponent,
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
