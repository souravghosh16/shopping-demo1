import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { LoginService } from './../service/login.service';
import { FormService } from './../service/form.service';
import { CustomValidators } from './../libs/custom-validators';
import { Router } from '@angular/router';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    public signUpForm: FormGroup;
    public formErrors = {
        name: '',
        email: '',
        password: '',
        c_password: '',
    };
    constructor(public router: Router,private loginService: LoginService, public form: FormBuilder,private FormService: FormService) {}
    
    public signUp() {

        // mark all fields as touched
        this.FormService.markFormGroupTouched(this.signUpForm);
    
        // right before we submit our form to the server we check if the form is valid
        // if not, we pass the form to the validateform function again. Now with check dirty false
        // this means we check every form field independent of wether it's touched 
       // https://medium.com/@luukgruijs/validating-reactive-forms-with-default-and-custom-form-field-validators-in-angular-5586dc51c4ae
        if (this.signUpForm.valid) {
    
        //   this.snackbar.open('Succesfully submitted a valid form. yay!', 'Close', {
        //     duration: 3000,
        //   });
    
          this.signUpForm.reset();
        } else {
          this.formErrors = this.FormService.validateForm(this.signUpForm, this.formErrors, false)
        }
      }

      public buildForm() {
        this.signUpForm = this.form.group({
          name: ['', [Validators.required, CustomValidators.validateCharacters]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required]],
          c_password: ['', [Validators.required]],
        });
    
        // on each value change we call the validateForm function
        // We only validate form controls that are dirty, meaning they are touched
        // the result is passed to the formErrors object
        this.signUpForm.valueChanges.subscribe((data) => {
          this.formErrors = this.FormService.validateForm(this.signUpForm, this.formErrors, true)
        });
      }
    
    onRegistration(){
        let user = {
            email:'sourav1234@gmail.com',
            name:'deka',
            password:'123456',
            c_password:'123456',
        }
        this.loginService.register(user).subscribe(console.log)
    }
    // this.searchField = new FormControl();
    // this.searchField.valueChanges
    // .subscribe(term => {
    //   this.searches.push(term);
    // });
    ngOnInit() {
        this.buildForm();
    }
}
