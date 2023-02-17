import { Component } from '@angular/core';
import {   OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {


  constructor(public k:KeycloakService)
  {

  }
  ngOnInit()  {
   
    console.log(this.k.getKeycloakInstance());
      
  }

  


}
