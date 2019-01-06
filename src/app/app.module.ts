import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillingComponent } from './billing/billing.component';
import { BillService } from './shared/bill/bill.service';
import { InputFileComponent } from './input-file/input-file.component';
import { UploadFileService } from './shared/upload/upload-file.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BillingComponent,
    InputFileComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  
  providers: [BillService, UploadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
