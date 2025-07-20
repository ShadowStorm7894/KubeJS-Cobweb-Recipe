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
  ),
  event.shaped(
   Item.of('immersiveenginnering:raw_aluminium', 1),
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
 }
)
