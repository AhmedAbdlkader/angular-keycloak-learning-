import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { SecuritykcService } from '../Services/securitykc.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 b=true;
 products!: { id: number; name: string; price: number; }[];

constructor(public k : KeycloakService , public sec : SecuritykcService)
{

}

ngOnInit()

{ 
       this.sec.isConnected().then(data=>{
        console.log(data
          );
        
       })
        console.log( "rolesssss");
         console.log(this.sec.AllRoles());
        console.log( "name");
        

        console.log(this.sec.Username());
        console.log("token");
        console.log(this.sec.GetToken());

        
        
        


  
      
     
  
  this.products =[
    {id:1 , name:"Ahmed", price:522},
    {id:2 , name:"pk", price:522},
    {id:3 , name:"mm", price:522},
    {id:4, name:"oo", price:522}
  ]

}


}
