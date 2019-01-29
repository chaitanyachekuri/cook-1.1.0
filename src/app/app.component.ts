
import {filter} from 'rxjs/operators';
import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

import { DOCUMENT } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {ApiEmitterServcie} from "./services/api-emitter.servcie";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private _router: Subscription;
    @ViewChild(NavbarComponent) navbar: NavbarComponent;

    constructor( private renderer : Renderer, private router: Router, @Inject(DOCUMENT,) private document: any, private element : ElementRef, public location: Location, private apiEmitter: ApiEmitterServcie) {

    }
    ngOnInit() {
        var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
            if (this.location.path() !== '/sections') {
                if (window.outerWidth > 991) {
                    window.document.children[0].scrollTop = 0;
                }else{
                    window.document.activeElement.scrollTop = 0;
                }
            }
            this.navbar.sidebarClose();

            this.renderer.listenGlobal('window', 'scroll', () => {
                const number = window.scrollY;
                var _location = this.location.path();
                _location = _location.split('/')[2];
                if (this.location.path() !== '/sections') {

                    if (number > 150 || window.pageYOffset > 150) {
                        // add logic
                          if (_location !== 'register') {
                                navbar.classList.remove('navbar-transparent');
                          }
                    } else if (_location !== 'addproduct'  && _location !== 'login' && _location !== 'register' && this.location.path() !== '/nucleoicons') {
                        // remove logic
                        navbar.classList.add('navbar-transparent');
                    }
                }
            });
        });

        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');

        }

        this.apiEmitter.recieveEvent(ApiEmitterServcie.connect).subscribe(v =>{
            console.log(v);
        });

    }
    removeFooter() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice( 1 );
        return !(titlee === 'signup' || titlee === 'nucleoicons');
    }
}
