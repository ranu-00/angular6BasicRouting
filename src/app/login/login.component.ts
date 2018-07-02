import { Component } from '@angular/core';
/*@sunil rana*/
@Component({
  selector: 'login-screen',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {
    model: any = {};
 
    onSubmit() {
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    }
}
