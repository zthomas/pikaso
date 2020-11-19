import Konva from 'konva'

import { Board } from '../../Board'
import { Events } from '../../Events'
import { History } from '../../History'
import { ShapeDrawer } from '../../ShapeDrawer'

import { DrawType } from '../../types'

export class Line extends ShapeDrawer {
  /**
   *
   */
  public shape: Konva.Line

  constructor(board: Board, events: Events, history: History) {
    super(board, events, history, DrawType.Line)
  }

  /**
   *
   * @param config
   */
  public insert(config: Konva.LineConfig) {
    return super.insert(config)
  }

  /**
   *
   * @param config
   */
  public draw(config: Partial<Konva.LineConfig> = {}) {
    super.draw(config)
  }

  /**
   *
   * @param config
   */
  protected createShape(config: Konva.LineConfig) {
    this.shape = new Konva.Line({
      hitStrokeWidth: 15,
      ...config
    })

    return this.board.addShape(this.shape)
  }
}
