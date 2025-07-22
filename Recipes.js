ServerEvents.recipes(event => {
 event.shaped(
  Item.of('minecraft:cobweb', 1),
   [
     'AAA',
     'ABA',
     'AAA'
   ],
   {
     A: 'minecraft:string',
     B: 'minecraft:slime_ball'
   }
  )
  event.shaped(
   Item.of('immersiveengineering:raw_aluminum', 1),
   [
     'AB ',
     'BA ',
     '   '
   ],
   {
     A: 'minecraft:raw_iron',
     B: 'minecraft:redstone'
   }
  )
  event.shapeless(
    Item.of('create:wheat_flour', 1), 
  [
    'croptopia:flour'
  ]
  )
  event.shapeless(
    Item.of('croptopia:flour', 1), 
  [
    'create:wheat_flour'
  ]
  )
 }
)
