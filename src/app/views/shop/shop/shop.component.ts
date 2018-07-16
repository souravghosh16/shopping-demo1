import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { LoginRegistrationService } from 'src/app/services/login-registration.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  animations: [routerTransition()]
})
export class ShopComponent implements OnInit {

  constructor( 
    private loginRegistrationService: LoginRegistrationService) 
    { }
    public login(){
      let abc={
        name:'sourav',
        email:'souravghosh16@gmail.com',
        password:'123456'
      }
      this.loginRegistrationService.login(abc).subscribe(result=>console.log())
    }
  ngOnInit() {
    
  }

}
