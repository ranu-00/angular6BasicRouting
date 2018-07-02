import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
{path: 'login' ,  component:LoginComponent},
{path: 'register', component : RegisterUserComponent},
{path: '**', redirectTo:'',component:LoginComponent}

];

@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)],
    
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { 

 

}
//export const exportomponet = [LoginComponent,RegisterUserComponent]