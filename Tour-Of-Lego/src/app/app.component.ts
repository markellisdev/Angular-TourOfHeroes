import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lego: Lego = {
    id: 1,
    name: 'Lloyd Garmadon'
  }
}
export class Lego {
  id: number;
  name: string;
}
