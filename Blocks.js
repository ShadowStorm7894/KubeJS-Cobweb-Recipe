BlockEvents.modification(event => {

  event.modify('pointblank:printer', block => {
    block.requiresTool = false
  })
  event.modify(['create_the_air_wars:sulfur_ore', 'create_the_air_wars:deepdlatesulfurore'], block => {
    block.requiresTool = true
  })
})

