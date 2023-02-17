import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecuritykcService {

  constructor( public keycloack: KeycloakService , public http:HttpClient) {}


  isConnected()
  {
        return this.keycloack.isLoggedIn();
  }

  HasUserRole()
  {
      if(this.keycloack.getKeycloakInstance().realmAccess?.roles.includes('USER_NORMALE'))
      {
        return true;
      }
      else
      return false
      

  }
  HasAdminRole()
  {
    if(this.keycloack.getKeycloakInstance().realmAccess?.roles.includes('ADMIN'))
      {
        return true;
      }
      else
      return false
      
  }

  AllRoles()
  {
    return this.keycloack.getKeycloakInstance().realmAccess?.roles
  }

  Username()
  {  if(!this.keycloack.loadUserProfile)
   { console.log("not loadede");
  }
    else
    console.log(this.keycloack.getKeycloakInstance().idTokenParsed?.preferred_username);
    
  }

  GetToken()
  {
    return this.keycloack.getKeycloakInstance();
  }
  
  
  




   }

  

