import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TreeMapComponent } from './tree-map/tree-map.component';
import { TreeStadisticsComponent } from './tree-stadistics/tree-stadistics.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'about/:id',
      component: AboutComponent
  },
  {
    path: 'tree-map/:id',
    component: TreeMapComponent
  },
  {
    path: 'tree-stadistics/:id',
    component: TreeStadisticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }