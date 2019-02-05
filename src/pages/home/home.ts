import { MainPage } from './../main/main';
import { Component, OnInit } from '@angular/core';
import { RegisterPage } from '../register/register';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  loginvalidate : FormGroup;

  constructor(public navCtrl: NavController){

  }
  ngOnInit() {
    this.loginvalidate = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(4)]),
    pswd: new FormControl('',[Validators.required, Validators.minLength(6)])
  });

}
login(){
  if(this.loginvalidate.valid){
    this.navCtrl.push(MainPage);
  }
}
register(){
  this.navCtrl.push(RegisterPage);
}
}
