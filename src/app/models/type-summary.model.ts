import { Model } from './model'

import { Type } from './type.model'

export class TypeSummary extends Model {
  public slot: number
  public type: Type

  constructor(obj?: TypeSummary) {
    super(obj)

    this.type = new Type(this.type)
  }
}
