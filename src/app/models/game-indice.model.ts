import { Model } from './model'

import { Version } from './version.model'

export class GameIndice extends Model {
  public game_index: number
  public version: Version

  constructor(obj?: GameIndice) {
    super(obj)

    this.version = new Version(this.version)
  }
}
