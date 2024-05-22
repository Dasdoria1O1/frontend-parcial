import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntityListComponent } from './components/entity-list/entity-list.component';
import { EntityFormComponent } from './components/entity-form/entity-form.component';

const routes: Routes = [
  { path: 'entities', component: EntityListComponent },
  { path: 'create', component: EntityFormComponent },
  { path: '', redirectTo: '/entities', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
