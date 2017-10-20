import { Component } from '@angular/core';
import { Lego } from './lego'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour Of Legos';
  // lego: Lego = {
  //   id: 1,
  //   name: 'Lloyd Garmadon'
  // }
  legos = LEGOS;
  selectedLego: Lego;
  onSelect(lego: Lego): void {
    this.selectedLego = lego;
  }
}

const LEGOS: Lego[] = [
  {id: 11, name: 'Lord Garmadon'},
  {id: 12, name: 'Master Wu'},
  {id: 13, name: 'Kai'},
  {id: 14, name: 'Jay'},
  {id: 15, name: 'Nya'},
  {id: 16, name: 'Zane'},
  {id: 17, name: 'Cole'},
  {id: 18, name: 'Sushi Chef'},
  {id: 19, name: 'Shark Army Great White'},
  {id: 20, name: 'Star Wars Inquisitor'},
]