import { Model } from './model'

import { Stat } from './stat.model'

export class StatSummary extends Model {
  public base_stat: number
  public effort: number
  public stat: Stat

  constructor(obj?: StatSummary) {
    super(obj)

    this.stat = new Stat(this.stat)
  }
}
