import Konva from 'konva'
import { ImageConfig } from 'konva/lib/shapes/Image'

import { imageToDataUrl } from '../../../utils/image-to-url'
import { createImageFromUrl } from '../../../utils/create-image-from-url'

import { Board } from '../../../Board'
import { ImageModel } from '../../models/ImageModel'


export class ImageDrawer {
  /**
   * Represents the [[Board]]
   */
  private board: Board

  /**
   * Creates a new image builder component
   *
   * @param board The [[Board]
   */
  constructor(board: Board) {
    this.board = board
  }

  /**
   * Inserts a new image into the board
   *
   * @param file The image [[File]]
   * @param config The image node configuration
   */
  public async insert(
    file: File | string,
    config: Partial<Konva.ImageConfig> = {}
  ): Promise<ImageModel> {
    const url = file instanceof File ? await imageToDataUrl(file) : file
    let image: Konva.Image

    if (config.image) {
      image = new Konva.Image(config as ImageConfig)
    } else {
      image = await createImageFromUrl(url)
    }
    const ratio = image.width() / image.height()
    const defaultHeight = this.board.stage.height() / 2
    const defaultWidth = defaultHeight * ratio

    image.setAttrs({
      width: defaultWidth,
      height: defaultHeight,
      x: (this.board.stage.width() - defaultWidth) / 2,
      y: (this.board.stage.height() - defaultHeight) / 2,
      rotation: this.board.stage.rotation() * -1,
      draggable: this.board.settings.selection?.interactive,
      ...config
    })

    return new ImageModel(this.board, image, {
      transformer: {
        keepRatio: true
      }
    })
  }
}
