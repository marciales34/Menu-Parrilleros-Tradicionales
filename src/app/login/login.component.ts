import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef, private router: Router) {}

  ngAfterViewInit(): void {
    const signUpButton = this.elementRef.nativeElement.querySelector("#signUp");
    const signInButton = this.elementRef.nativeElement.querySelector("#signIn");
    const container = this.elementRef.nativeElement.querySelector("#container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });


  }

  redirigiraRegisitro(){
    this.router.navigateByUrl('/inicio'); 
  }
}

