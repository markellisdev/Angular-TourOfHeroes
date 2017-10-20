import { Component, OnInit } from '@angular/core';
import { Lego } from '../lego';

@Component({
  selector: 'app-lego-detail',
  templateUrl: './lego-detail.component.html',
  styleUrls: ['./lego-detail.component.css']
})
export class LegoDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lego: Lego;

}
