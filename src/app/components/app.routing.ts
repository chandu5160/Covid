import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiaMapComponent } from './india-map/india-map.component';
import { MultiplelinechartsComponent } from './multiplelinecharts/multiplelinecharts.component';

const routes: Routes = [
    { path: '', component: IndiaMapComponent },
    { path: 'state-chart', component: MultiplelinechartsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
