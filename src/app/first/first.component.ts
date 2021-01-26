import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  heroes = HEROES;
  value="mostrar";
  valueB="Ocultar";
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  constructor() { }
  selectedHero: Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  }
  ngOnInit(): void {
  }
  eventoButton():void{
    if (this.value=="mostrar"){
      this.value="ocultar";
      this.valueB="Mostrar";
    }else{
      this.value="mostrar"
      this.valueB="Ocultar";
    }
}

}
