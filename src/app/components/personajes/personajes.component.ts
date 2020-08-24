import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
  providers: [GlobalService]
})
export class PersonajesComponent implements OnInit {

  public title_home: string;
  public characters: Array<any>;

  constructor(
    private _service: GlobalService
  ) {
   this.title_home = "Personajes de la serie Rick and Morty";
  }

  ngOnInit(): void {
    this.getAllCharacter();
  }

  //Traer todos los personajes
  getAllCharacter(){
    this._service.getAllCharacter().subscribe(
      response => {
        if(response){
          this.characters = response.results;
          console.log(this.characters);
        } else {
          console.log('No se asigno los resultados al array.');
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
