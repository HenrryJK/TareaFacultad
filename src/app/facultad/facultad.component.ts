import { Component, OnInit } from '@angular/core';
import { Facultad } from './facultad';

@Component({
  selector: 'app-facultad',
  templateUrl: './facultad.component.html',
  styleUrls: ['./facultad.component.css']
})
export class FacultadComponent implements OnInit {
  facultades : Facultad[]= [
    {idfacultad : 1 , nomfacultad: "FIA-SISTEMAS"},
    {idfacultad: 2 , nomfacultad : "FACTEO"},
    {idfacultad :3 , nomfacultad: "FACIET"} ,
    {idfacultad :4 , nomfacultad: "TALINT"} ,
    {idfacultad :5 , nomfacultad: "FMEDIC"} 
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
