import { Component, OnInit, ViewChild } from '@angular/core'

import { PokemonService } from '../../services/pokemon.service'

import { Pokemon } from '../../models/pokemon.model'
import { PokemonSummary } from '../../models/pokemon-summary.model'

@Component({
  selector: 'ap-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PokemonService],
})
export class HomeComponent implements OnInit {
  private pokemonList: Pokemon[] = []
  private pokemonSummary: PokemonSummary[]

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getAll().subscribe(
      data => {
        this.pokemonSummary = data.results.map(pokemon => new PokemonSummary(pokemon))

        this.pokemonSummary.forEach(summary =>
          this.pokemonService.getSingle(summary.id).subscribe(pokemon =>
            this.pokemonList.push(new Pokemon(pokemon))))
      }
    )
  }
}
