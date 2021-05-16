import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logScrollStarts(){
    console.log("iniciou o Scroll")
  }

  ionScrollEnd(){
    console.log("Parou o scroll")
  }

  ionScrolling(e){
    console.log(e)
  }

}
