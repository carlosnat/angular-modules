import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId:module.id,
    selector: 'login-form',
    templateUrl: 'login.component.html',
    styleUrls: []
})
export class LoginComponent implements OnInit {
    constructor(private _router: Router) { }

    ngOnInit() { }

    ir_a_dashboard(){
        this._router.navigate(['/dashboard']);
    }
}