import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaticSiteComponent } from './static-site.component';

const routes: Routes = [
  {path: '', component: StaticSiteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaticSiteRoutingModule {
}

export const RoutedComponents = [StaticSiteComponent];
