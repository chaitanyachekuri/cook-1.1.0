import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiManagerService} from "../../services/api-manager.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  focus;
  focus1;
  focus2;focus3;
  registerForm: FormGroup;

    data : Date = new Date();

    constructor(private fb: FormBuilder, private apiManager: ApiManagerService) { }

    ngOnInit() {
        let body = document.getElementsByTagName('body')[0];
        body.classList.add('signup-page');
        let navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-absolute');
        navbar.classList.remove('fixed-top');
        this.createForm();
    }

    createForm(){
        this.registerForm = this.fb.group({
            'firstName':['', Validators.compose([Validators.required])],
            'lastName':['', Validators.compose([Validators.required])],
            'email':['', Validators.compose([Validators.required])],
            'password':['', Validators.compose([Validators.required])],
        })
    }

    register(){
            this.apiManager.fetchData(ApiManagerService.register, ApiManagerService.POST, this.registerForm.value).toPromise().then(v =>{
                console.log(v);}).catch(err =>{
                console.log(err);})
    }

    ngOnDestroy(){
        let body = document.getElementsByTagName('body')[0];
        body.classList.remove('signup-page');
        let navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-absolute');
        navbar.classList.add('fixed-top');
      }

}
