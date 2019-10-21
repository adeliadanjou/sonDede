import { Component, OnInit } from "@angular/core";
import { ErrorStateMatcher } from "@angular/material/core";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  isLock: String = "text";
  isLockRepeat: String = "text";
  theImg: String = "../../assets/images/lock.svg";
  theImgRepeat: String = "../../assets/images/lock.svg";

  // 1) pongo una variable que voy a llenar con el formulario y la pongo de tipo FormGroup
  user: FormGroup;

  // 2) aqui llamo a formBuilder en el constructor
  // y luego lo uso para rellenar mi variable de arriba user con los datos del form

  constructor(public formBuilder: FormBuilder) {
    this.user = this.formBuilder.group({
      username: ["", Validators.required, Validators.minLength(2)],
      emails: this.formBuilder.group({
        email: ["", Validators.required],
        emailRepeat: ["", Validators.required]
      }),
      passwords: this.formBuilder.group({
        password: [undefined, Validators.required],
        passwordRepeat: [undefined, Validators.required]
      }),
      personalData: this.formBuilder.group({
        name: [""],
        gender: [""],
        birthday: [""],
        city: [""]
      })
    });
  }

  ngOnInit() {}



  showPassword() {
    if (this.isLock === "text") {
      this.isLock = "password";
      this.theImg = "../../assets/images/unlock.svg";
    } else {
      this.isLock = "text";
      this.theImg = "../../assets/images/lock.svg";
    }
  }

  showRepeatPassword() {
    if (this.isLockRepeat === "text") {
      this.isLockRepeat = "password";
      this.theImgRepeat = "../../assets/images/unlock.svg";
    } else {
      this.isLockRepeat = "text";
      this.theImgRepeat = "../../assets/images/lock.svg";
    }
  }
}
