import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketviewComponent } from './marketview/marketview.component';
import { MarketlistComponent } from './marketlist/marketlist.component';
import { ChartviewComponent } from './chartview/chartview.component';

const routes: Routes = [
  {path:'view/:id',component:MarketviewComponent,title:'Market View'},
  {path:'list',component:MarketlistComponent,title:'Market List'},
  {path:'chart',component:ChartviewComponent,title:'Chart'},
  {path:'',redirectTo:'list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
