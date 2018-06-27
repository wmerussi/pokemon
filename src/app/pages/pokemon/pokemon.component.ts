import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'

import { PokemonService } from '../../services/pokemon.service'

import { Pokemon } from '../../models/pokemon.model'
import { Stat } from '../../models/stat.model'
import { Type } from '../../models/type.model'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  providers: [PokemonService],
})
export class PokemonComponent implements OnInit {
  private pokemon: Pokemon

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (!params['id']) {
        this.router.navigate(['/404'])
        return
      }

      this.pokemonService.getSingle(params['id']).subscribe(
        pokemon => this.pokemon = new Pokemon(pokemon))
    })
  }

  private getHeight(): string {
    return this.pokemon && `${ this.pokemon.height / 10 } m`
  }

  private getStats(): Stat[] {
    return this.pokemon && this.pokemon.stats.map(summ => summ.stat)
  }

  private getTitle(): string {
    return this.pokemon && `#${ this.pokemon.id } - ${ this.pokemon.name }`
  }

  private getTypes(): Type[] {
    return this.pokemon && this.pokemon.types.map(summ => summ.type)
  }

  private getWeight(): string {
    return this.pokemon && `${ this.pokemon.weight / 10 } Kg`
  }
}
