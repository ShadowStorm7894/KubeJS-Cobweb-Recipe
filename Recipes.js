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
   })
 })
