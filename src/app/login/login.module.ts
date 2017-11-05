import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';

@NgModule({
    declarations:[LoginComponent],
    imports:[
        RouterModule.forChild([
            {path:'login', component: LoginComponent}
        ])
    ],
    exports: [LoginComponent]
})

export class LoginModule {}