import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { AdddataComponent } from './adddata/adddata.component';
import { EditdataComponent } from './editdata/editdata.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListComponent,
    AdddataComponent,
    EditdataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
