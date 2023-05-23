import { Component, OnInit } from  '@angular/core';
import { MatDialog, MatDialogRef } from  '@angular/material/dialog';
import {MessageComponent} from '../message/message.component'
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
// .. other imports

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export  class  LoginComponent{

  name=new FormControl('');
  email=new FormControl('');
  phone=new FormControl('');
  password=new FormControl('');
  onSubmit(e:any) {
    e.preventDefault();
    console.log(this.name,this.email,this.phone,this.password);
  };
    // constructor(private  dialog:  MatDialog, private  router:  Router) { }
    // login(){
    //     if(this.email  ===  "email@gmail.com"  &&  this.password  === "p@ssw0rd")
    //     {
    //         this.router.navigate(['success']);
    //     }
    //     else
    //     {
    //         this.dialog.open(MessageComponent,{ data: {
    //         message:  "Error!!!"
    //         }});
    //     }
    // }




}