import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [GlobalService]
})
export class DetailComponent implements OnInit {

  public title_home: string;
  public character: Array<any>;

  constructor(
    private _service: GlobalService,    
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.title_home = "Descripcion del personaje";
  }

  ngOnInit(): void {
    this.getCharacter();
  }

  //Traer personaje por id
  getCharacter(){
    this._route.params.subscribe( params =>{
      let id = +params['id'];

      this._service.getCharacter(id).subscribe(
        response =>{
          if(response){
            this.character = response;
            console.log(this.character);
          } else {
            this._router.navigate(['inicio']);
            console.log('Error al asignar al array')
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }

}
