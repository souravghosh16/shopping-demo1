import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from './../service/login.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router,private loginService: LoginService) {}

    ngOnInit() {}

    onLoggedin() {
        let user = {
            email:'sourav@gmail.com',
            password:'123456',
        }
        this.loginService.login(user).subscribe(console.log)
        //localStorage.setItem('isLoggedin', 'true');
    }
}
