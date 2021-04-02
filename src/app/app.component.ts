import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] //Köşeli parantezin anlamı arrayden gelir. Birden fazla css dosyası olabilir.
})
//Component html in datasını yönettiğimiz yerdir.
export class AppComponent {
  title = 'northwind'; //Tek çift tırnak farkı yok.
  user: string = "Fikret";
  
}
