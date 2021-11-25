import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  linkVal = "https://www.google.rs/";
  newLink = "https://animate.style/"

  constructor() { }

  ngOnInit(): void {
  }

}
