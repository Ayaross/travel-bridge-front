import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdVerificationComponent } from './id-verification/id-verification.component';

const routes: Routes = [
  { path: 'id-verification', component: IdVerificationComponent },
  { path: '', redirectTo: '/id-verification', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
