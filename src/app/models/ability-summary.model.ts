import { Model } from './model'

import { Ability } from './ability.model'

export class AbilitySummary extends Model {
  public is_hidden: boolean
  public slot: number
  public ability: Ability

  constructor(obj?: AbilitySummary) {
    super(obj)

    this.ability = new Ability(this.ability)
  }
}
