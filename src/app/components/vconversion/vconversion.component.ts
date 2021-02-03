import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vconversion',
  templateUrl: './vconversion.component.html',
  styleUrls: ['./vconversion.component.css']
})
export class VconversionComponent implements OnInit {

  conversion:any;
  respuesta=[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://openexchangerates.org/api/currencies.json?app_id=e28537aca8ab42518b00d60fced32ab2')
    .subscribe(data => {
      this.conversion=data;
      this.respuesta=this.conversion;

      console.log('Prueba', this.respuesta);
    });
  }

}
