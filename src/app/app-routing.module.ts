import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuissnessDetailsComponent } from './buissness-details/buissness-details.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  //   // { path: '', loadChildren: () => import('./consumer-portal/consumer-portal.module').then(m => m.ConsumerPortalModule) },
  // { path: 'Result', component: BuissnessDetailsComponent },
  { path: 'Result', component: ResultComponent },

  // { path: 'personal-details', component:PersonalDetailsComponent},
  { path: 'Home', component: CreateAccountComponent },
  { path: 'Twitter-analises', component: HomeComponentComponent },
  // { path: 'bank-details',component:BankDetailsComponent},
  // { path: 'KYC-Document', component:KycDocumentComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
