import { Model } from './model'

import { AbilitySummary } from './ability-summary.model'
import { Form } from './form.model'
import { GameIndice } from './game-indice.model'
import { MoveSummary } from './move-summary.model'
import { Species } from './species.model'
import { Sprites } from './sprites.model'
import { StatSummary } from './stat-summary.model'
import { TypeSummary } from './type-summary.model'

export class Pokemon extends Model {
  public abilities: AbilitySummary[]
  public base_experience: number
  public forms: Form[]
  public game_indices: GameIndice[]
  public height: number
  public held_items: any[]
  public id: number
  public is_default: boolean
  public location_area_encounters: string
  public moves: MoveSummary[]
  public name: string
  public order: number
  public species: Species
  public sprites: Sprites
  public stats: StatSummary[]
  public types: TypeSummary[]
  public weight: number

  constructor(obj?: Pokemon) {
    super(obj)

    this.abilities = this.abilities.map(abilitySummary => new AbilitySummary(abilitySummary))
    this.forms = this.forms.map(form => new Form(form))
    this.game_indices = this.game_indices.map(gameIndice => new GameIndice(gameIndice))
    this.moves = this.moves.map(move => new MoveSummary(move))
    this.species = new Species(this.species)
    this.stats = this.stats.map(stat => new StatSummary(stat))
    this.types = this.types.map(type => new TypeSummary(type))
  }
}
