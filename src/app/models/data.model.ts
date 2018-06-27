import { Model } from './model'

import { PokemonSummary } from './pokemon-summary.model'

export class Data extends Model {
  public count: number
  public next: string
  public previous: string
  public results: PokemonSummary[]

  constructor(obj?: Data) {
    super(obj)

    this.results = this.results.map(pokemon => new PokemonSummary(pokemon))
  }
}
