import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { SectionsModule } from './sections/sections.module';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { PresentationModule } from './presentation/presentation.module';
import {PublicModule} from "./public/public.module";
import {ApiManagerService} from "./services/api-manager.service";
import {ApiEmitterServcie} from "./services/api-emitter.servcie";
import { HttpClientModule} from "@angular/common/http";
import {BrowserXhr} from "@angular/http";
import {CustExtBrowserXhr} from "./services/cors-fix.service";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingModule,
        PresentationModule,
        SectionsModule,
        ComponentsModule,
        ExamplesModule
    ],
    providers: [ApiManagerService, ApiEmitterServcie],
    bootstrap: [AppComponent]
})
export class AppModule { }
