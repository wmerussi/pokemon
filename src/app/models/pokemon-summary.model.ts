import { Model } from './model'

export class PokemonSummary extends Model {
  public name: string
  public url: string

  get id(): number {
    return Number(this.url.split('/')[6])
  }
}
