import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing';
 constructor(private router:Router){}

 myhome(){
   this.router.navigate(['/home']);
 }
 myangular(){
   this.router.navigate(['/angular']);
 }
 aboutme(){
   this.router.navigate(['/about-us']);
 }
}
