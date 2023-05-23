import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    public dialog: MatDialog
    ){
      
    }
    openLogin(){
    
    this.dialog.open(LoginComponent,{
      height: '400px',
      width: '600px',
    })
  }
  openReg(){
    this.dialog.open(RegistrationComponent,{
      height:'400px',
      width:'600px'
    });
  }
}
