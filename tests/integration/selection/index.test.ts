import { createEditor } from '../../../jest/utils/create-editor'

describe('Selection', () => {
  const shapeConfig = {
    x: 100,
    y: 100,
    radius: 50
  }

  it('should select the shape', () => {
    const editor = createEditor()

    const circle = editor.shapes.circle.insert(shapeConfig)

    circle.select()
    expect(editor.board.shapes.length).toBe(1)
  })

  it('should deselect the shape', () => {
    const editor = createEditor()

    const circle = editor.shapes.circle.insert(shapeConfig)

    circle.select()
    expect(editor.board.selection.list.length).toBe(1)

    circle.deselect()
    expect(editor.board.selection.list.length).toBe(0)
  })

  it('should delete the selected shape', () => {
    const editor = createEditor()

    const circle = editor.shapes.circle.insert(shapeConfig)

    circle.select()
    editor.selection.delete()

    expect(circle.isDeleted).toBe(true)
  })

  it('should select multiple shapes', () => {
    const editor = createEditor()

    new Array(2).fill(null).forEach(() => {
      editor.shapes.circle.insert(shapeConfig)
    })

    editor.board.selection.selectAll()

    expect(editor.board.selection.list.length).toBe(2)
  })

  it('should deselect all shapes', () => {
    const editor = createEditor()

    new Array(2).fill(null).forEach(() => {
      editor.shapes.circle.insert(shapeConfig)
    })

    editor.board.selection.selectAll()
    expect(editor.board.selection.list.length).toBe(2)

    editor.board.selection.deselectAll()
    expect(editor.board.selection.list.length).toBe(0)
  })

  it('should reselect all shapes', () => {
    const editor = createEditor()

    new Array(2).fill(null).forEach(() => {
      editor.shapes.circle.insert(shapeConfig)
    })

    editor.board.selection.selectAll()
    expect(editor.board.selection.list.length).toBe(2)

    editor.board.selection.reselect()
    expect(editor.board.selection.list.length).toBe(2)
  })

  it('should add a shape to the selection list', () => {
    const editor = createEditor()

    const circle1 = editor.shapes.circle.insert(shapeConfig)
    const circle2 = editor.shapes.circle.insert(shapeConfig)

    circle1.select()
    expect(editor.board.selection.list.length).toBe(1)

    editor.board.selection.add(circle2)
    expect(editor.board.selection.list.length).toBe(2)
  })

  it('should toggle selection', () => {
    const editor = createEditor()

    const circle = editor.shapes.circle.insert(shapeConfig)

    circle.select()
    expect(editor.board.selection.list.length).toBe(1)

    editor.board.selection.toggle(circle)
    expect(editor.board.selection.list.length).toBe(0)

    editor.board.selection.toggle(circle)
    expect(editor.board.selection.list.length).toBe(1)
  })

  it('should move the selections horizontally', async () => {
    const editor = createEditor()

    const circle = editor.shapes.circle.insert(shapeConfig)
    circle.select()

    await editor.board.selection.moveX(-10)
    expect(circle.node.attrs.x).toBe(shapeConfig.x - 10)
  })

  it('should move the selections vertically', async () => {
    const editor = createEditor()

    const circle = editor.shapes.circle.insert(shapeConfig)
    circle.select()

    await editor.board.selection.moveY(10)
    expect(circle.node.attrs.y).toBe(shapeConfig.y + 10)
  })

  it('should add filter to the selected shapes', async () => {
    const editor = createEditor()

    const circle = editor.shapes.circle.insert(shapeConfig)
    circle.select()

    editor.board.selection.addFilter({
      name: 'Invert'
    })

    expect(circle.node.filters().length).toBe(1)
  })

  it('should remove filter from the selected shapes', async () => {
    const editor = createEditor()

    const circle = editor.shapes.circle.insert(shapeConfig)
    circle.select()

    editor.board.selection.addFilter({
      name: 'Invert'
    })
    expect(circle.node.filters().length).toBe(1)

    editor.board.selection.removeFilter('Invert')
    expect(circle.node.filters().length).toBe(0)
  })
})
