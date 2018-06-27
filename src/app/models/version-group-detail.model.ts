import { Model } from './model'

import { MoveLearnMethod } from './move-learn-method.model'
import { VersionGroup } from './version-group.model'

export class VersionGroupDetail extends Model {
  public level_learned_at: number
  public move_learn_method: MoveLearnMethod
  public version_group: VersionGroup

  constructor(obj?: VersionGroupDetail) {
    super(obj)

    this.move_learn_method = new MoveLearnMethod(this.move_learn_method)
    this.version_group = new VersionGroup(this.version_group)
  }
}
