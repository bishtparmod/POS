import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './Landing/landing/landing.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { FooterComponent } from './common/footer/footer.component';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { OfferModule } from './offer/offer.module';
import { ChatModule } from './chat/chat.module';
import { ShareModule } from './share/share.module';
import { PaginationComponent } from './share/pagination/pagination.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { ForgotpasswordComponent } from './Auth/forgotpassword/forgotpassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Module
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    OrderModule,
    OfferModule,
    ChatModule,
    ShareModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
