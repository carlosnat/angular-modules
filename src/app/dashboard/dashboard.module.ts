import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { TopbarComponent } from '../dashboard/topBar/topbar.component';
import { SidebarComponent } from '../dashboard/sideBar/sidebar.component';

import { PerfilUserComponent } from '../usuario/perfil/usuarioPerfil.component';
import { AprovechamientoComponent } from '../usuario/aprovechamiento/aprovechamiento.component';
import { CompanerosComponent } from '../usuario/companeros/companeros.component';
import { ProfesoresComponent } from '../usuario/profesores/profesores.component';


@NgModule({
    declarations: [
        DashboardComponent,
        TopbarComponent,
        SidebarComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule.forChild([
            {
                path:'dashboard', 
                component: DashboardComponent,
                children: [
                    {path:'perfil', component: PerfilUserComponent},
                    {path:'aprovechamiento', component: AprovechamientoComponent},
                    {path:'companeros', component: CompanerosComponent},
                    {path:'profesores', component: ProfesoresComponent}
                ]
            }
        ])
     ],
    exports: [],
    providers: [],
})
export class DashboardModule {}