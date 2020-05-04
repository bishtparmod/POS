import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './Landing/landing/landing.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { ProductModule } from './product/product.module';


const routes: Routes = [
  // { path: "", redirectTo: "", pathMatch: "full" },
  { path: "", component: LandingComponent  },
  { path: "dashboard", component: DashboardComponent  },
  { path: "product", loadChildren: "./product/product.module#ProductModule"  },
  { path: "order", loadChildren: "./order/order.module#OrderModule"  },
  { path: "offer", loadChildren: "./offer/offer.module#OfferModule"  },
  { path: "chat", loadChildren: "./chat/chat.module#ChatModule"  },
  { path: "category", loadChildren: "./category/category.module#CategoryModule"  },
  // { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
