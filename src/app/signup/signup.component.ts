import { Component, OnInit } from "@angular/core";

import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormGroupName
} from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  isLock: String = "password";
  isLockRepeat: String = "password";
  theImg: String = "../../assets/images/lock.svg";
  theImgRepeat: String = "../../assets/images/lock.svg";

  // 1) pongo una variable que voy a llenar con el formulario y la pongo de tipo FormGroup
  user: FormGroup;

  // 2) aqui llamo a formBuilder en el constructor
  // y luego lo uso para rellenar mi variable de arriba user con los datos del form

  constructor(public formBuilder: FormBuilder) {
    this.user = this.formBuilder.group({
      username: ["", [Validators.required, Validators.minLength(2)]],
      emails: this.formBuilder.group({
        email: ["", [Validators.required, Validators.email]],
        emailRepeat: ["", [Validators.required, Validators.email] ]
      }, { validator: this.checkEmails}),
      passwords: this.formBuilder.group({
        password: [undefined, Validators.required],
        passwordRepeat: [undefined, Validators.required]
      }, { validator: this.checkPasswords}),
      personalData: this.formBuilder.group({
        name: [""],
        gender: [""],
        birthday: [""],
        city: [""]
      })
    });
  }

  ngOnInit() {}

checkPasswords(group: FormGroup){
 
   let pass = group.value.password;
   let confirmPass = group.value.passwordRepeat

  return pass === confirmPass ? null : { notSamePassword: true }
}

checkEmails(group: FormGroup){

  let pass = group.value.email;
  let confirmPass = group.value.emailRepeat

 return pass === confirmPass ? null : { notSameEmail: true }
}

  showPassword() {
    if (this.isLock === "password") {
      this.isLock = "text";
      this.theImg = "../../assets/images/unlock.svg";
    } else {
      this.isLock = "password";
      this.theImg = "../../assets/images/lock.svg";
    }
   
  }

  showRepeatPassword() {
    if (this.isLockRepeat === "text") {
      this.isLockRepeat = "password";
      this.theImgRepeat = "../../assets/images/lock.svg";
    } else {
      this.isLockRepeat = "text";
      this.theImgRepeat = "../../assets/images/unlock.svg";
    }
   
  }
}
