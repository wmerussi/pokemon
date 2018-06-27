import { Model } from './model'

import { Move } from './move.model'
import { VersionGroupDetail } from './version-group-detail.model'

export class MoveSummary extends Model {
  public move: Move
  public version_group_details: VersionGroupDetail[]

  constructor(obj?: MoveSummary) {
    super(obj)

    this.move = new Move(this.move)
    this.version_group_details = this.version_group_details.map(
      versionGroupDetails => new VersionGroupDetail(versionGroupDetails))
  }
}
