import { Component } from '@angular/core'

import { Pokemon } from '../../models/pokemon.model'

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss'],
  inputs: ['pokemon'],
  outputs: ['onButtonClick'],
})
export class PokemonItemComponent {
  public pokemon: Pokemon

  private getTitle(): string {
    return this.pokemon && `#${ this.pokemon.id } - ${ this.pokemon.name }`
  }
}
