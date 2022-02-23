import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { RouterModule,Routes }              from '@angular/router';
import { LayoutRoutingRoutingModule }       from './layout-routing.module';
import { LayoutComponent }                  from '../layout.component';
import { LayoutService }                    from '../_service/layout.service';
import { HttpClientModule }                 from "@angular/common/http";


@NgModule({
    declarations: [
        LayoutComponent,
    ],
    imports: [
      LayoutRoutingRoutingModule,
      RouterModule,
      CommonModule,
      HttpClientModule,
    ],
    providers: [
      LayoutService
    //   {
    //     provide: HTTP_INTERCEPTORS,
    //     useClass: CredentialInterceptor,
    //     multi: true,
    //   },
    //   {
    //     provide: HTTP_INTERCEPTORS,
    //     useClass: IpInterceptor,
    //     multi: true,
    //   },
    ],
  })
  export class LayoutModule {}