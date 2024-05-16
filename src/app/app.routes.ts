import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/shared/login-page/login-page.component';
import { LinkBankAccountShopperComponent } from './components/shopper/link-bank-account-shopper/link-bank-account-shopper.component';
import { UpdateShopperAccountComponent } from './components/shopper/update-shopper-account/update-shopper-account.component';
import { ViewTransactionHistoryComponent } from './components/shopper/view-transaction-history/view-transaction-history.component';
import { ShopperProfilComponent } from './components/shopper/shopper-profil/shopper-profil.component';
import { ProviderComponent } from './components/provider/provider.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'shopProfile', component: ShopperProfilComponent},
  { path: 'shopProfile/addBankAccount', component: LinkBankAccountShopperComponent},
  { path:'shopProfile/transHistory', component: ViewTransactionHistoryComponent},
  { path:'shopProfile/updateShopperAccount', component: UpdateShopperAccountComponent},
  { path:'providerProfile', component: ProviderComponent}
];
