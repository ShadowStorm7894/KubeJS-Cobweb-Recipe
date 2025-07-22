BlockEvents.modification(event => {
  event.modify('pointblank:printer', block => {
    block.requiresTool = false
  })
})

