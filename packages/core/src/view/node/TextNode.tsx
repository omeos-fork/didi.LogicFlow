import Rect from '../shape/Rect'
import BaseNode from './BaseNode'
import { GraphModel, TextNodeModel } from '../../model'

export type ITextNodeProps = {
  model: TextNodeModel
  graphModel: GraphModel
}

export class TextNode extends BaseNode<ITextNodeProps> {
  getBackground() {
    const { model } = this.props
    const style = model.getTextStyle()
    // 背景框宽度，最长一行字节数/2 * fontsize + 2
    // 背景框宽度， 行数 * fontsize + 2
    // FIX: #1067
    const { width, height, x, y } = model
    const rectAttr = {
      ...style.background,
      x,
      y: y - 1,
      width,
      height,
    }
    return <Rect {...rectAttr} />
  }

  getShape() {
    return <g>{this.getBackground()}</g>
  }
}

export default TextNode
