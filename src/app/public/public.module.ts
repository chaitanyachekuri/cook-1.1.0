import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {NgModule} from "@angular/core";
import {PublicRouting} from "./public.routing";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([]),
        PublicRouting
    ],
    declarations: [ LoginComponent, RegisterComponent ],
    providers: []
})

export class PublicModule {

}