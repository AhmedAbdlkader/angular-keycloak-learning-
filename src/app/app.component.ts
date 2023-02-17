import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { connect } from 'rxjs';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

     baseUrl="http://localhost:8080/auth"
   
    
  constructor(public k : KeycloakService , public  http:HttpClient){

       
  }
loginn()
{
  this.k.login();
  
}


  ngOnInit()  {
    
      
   
  }
  title = 'AngularFrontWebApp';

  logingout()
  {
    this.k.logout();
  }

      changePassword( )
      {   
        
  

      }


}
