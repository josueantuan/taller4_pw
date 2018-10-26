import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {BaseProvider} from "../../providers/base/base";
import {HomePage} from "../home/home";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userInfo: any = {};
  authForm: FormGroup;
  username: AbstractControl;
  password: AbstractControl;
  responseData : any;
  userData = {"role":"","id":""};
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public authService: BaseProvider,public formBuilder: FormBuilder,
    public menuCtrl: MenuController) {
      this.menuCtrl.enable(false, 'myMenu');
    localStorage.clear();
    this.authForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(8), Validators.maxLength(30)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }
  /*ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    console.log(this.username,this.password);
    this.navCtrl.push(HomePage);
  
  }*/


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  ionViewWillEnter () {
    this.menuCtrl.enable (false);
  }

  login(value: any) {
    let promise = this.authService.login(value.username, value.password).then((data) => {
        this.responseData = data;
        console.log(this.responseData);
        if(this.responseData.principal.role == "USER" ){
          localStorage.setItem('userData',JSON.stringify(this.responseData));
          this.navCtrl.setRoot(HomePage);
        }
        else if (this.responseData.principal.role == "SADMIN"){
          localStorage.setItem('userData',JSON.stringify(this.responseData));
          this.navCtrl.setRoot(HomePage);
        } else{
          console.log("Nothig permisson");
      }

      });
  }
}
