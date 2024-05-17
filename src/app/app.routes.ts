import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/shared/login-page/login-page.component';
import { LinkBankAccountShopperComponent } from './components/shopper/link-bank-account-shopper/link-bank-account-shopper.component';
import { UpdateShopperAccountComponent } from './components/shopper/update-shopper-account/update-shopper-account.component';
import { ViewTransactionHistoryComponent } from './components/shopper/view-transaction-history/view-transaction-history.component';
import { ShopperProfilComponent } from './components/shopper/shopper-profil/shopper-profil.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ProviderComponent } from './components/provider/provider.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'providerProfile', component: ProviderComponent },
  { path: 'shopProfile', component: ShopperProfilComponent },
  {
    path: 'shopProfile/addBankAccount',
    component: LinkBankAccountShopperComponent,
  },
  {
    path: 'shopProfile/transHistory',
    component: ViewTransactionHistoryComponent,
  },
  {
    path: 'shopProfile/updateShopperAccount',
    component: UpdateShopperAccountComponent,
  },
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
