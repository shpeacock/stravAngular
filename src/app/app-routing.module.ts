import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MestuffComponent } from './mestuff/mestuff.component';
import { ClubComponent } from './club/club.component';
import { FinishlistComponent } from './finishlist/finishlist.component';
import { AbparkComponent } from './abpark/abpark.component';
import { SegmentComponent } from './abpark/segment/segment.component';

const routes: Routes = [
  { path: '', component: MestuffComponent },
  { path: 'clubs', component: ClubComponent},
  { path: 'finishes', component: FinishlistComponent},
  { path: 'ab', component: AbparkComponent},
  { path: 'ab/{id}', component: SegmentComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
