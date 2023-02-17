import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
 
import { SuppliersComponent } from './suppliers/suppliers.component';

  function initializeKeycloak(keycloak: KeycloakService)
      { return async ()=> await keycloak.init({
    config: {
      url: 'http://localhost:8080/auth',
      realm: 'ecom-realm',
      clientId: 'AngularProductsApp'
    },
    initOptions: {
      onLoad: 'check-sso',
      checkLoginIframe:false,
      silentCheckSsoRedirectUri:
        window.location.origin + '/assets/silent-check-sso.html'
    }
  });
}
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SuppliersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
     HttpClientModule
    
  ],
  providers: [

    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
