import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilUserComponent } from '../usuario/perfil/usuarioPerfil.component';
import { AprovechamientoComponent } from '../usuario/aprovechamiento/aprovechamiento.component';
import { CompanerosComponent } from '../usuario/companeros/companeros.component';
import { ProfesoresComponent } from '../usuario/profesores/profesores.component';

const userComponents: any[] = [
    PerfilUserComponent,
    AprovechamientoComponent,
    CompanerosComponent,
    ProfesoresComponent
];


@NgModule({
    declarations: userComponents,
    imports: [ CommonModule ],
    exports: userComponents,
    providers: [],
})
export class UsuarioModule {}