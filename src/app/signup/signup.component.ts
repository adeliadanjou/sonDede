import { Component, OnInit } from "@angular/core";
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
  isLockRepeat:String ="text";
  theImg: String = "../../assets/images/lock.svg";
  theImgRepeat: String = "../../assets/images/lock.svg";
  user: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.user = this.formBuilder.group({
      username: ["", Validators.required],
      email: ["", Validators.required],
      emailRepeat: ["", Validators.required],
      password: ["", Validators.required],
      passwordRepeat: ["", Validators.required],
      personalData: this.formBuilder.group({
        name: [""],
        gender:[""],
        birthday:[""],
        city: [""],

      })
    });
  }

  ngOnInit() {}


  getErrorEmail() {
    return this.email.hasError("required")
      ? "You must enter a value"
      : this.email.hasError("email")
      ? "Not a valid email"
      : "";
  }

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
      this.theImg = "../../assets/images/unlock.svg";
    } else {
      this.isLockRepeat = "text";
      this.theImg = "../../assets/images/lock.svg";
    }
  }
}
