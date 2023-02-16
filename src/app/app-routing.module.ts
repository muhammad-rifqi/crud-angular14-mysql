import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { AdddataComponent } from './adddata/adddata.component';
import { EditdataComponent } from './editdata/editdata.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'list', component: ListComponent },
  { path: 'adddata', component: AdddataComponent },
  { path: 'editdata/:id', component: EditdataComponent },
  { path: '**',   redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
