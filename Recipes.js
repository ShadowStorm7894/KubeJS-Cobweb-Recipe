ServerEvents.recipes(event => {

event.replaceInput(
  { input:'create_the_air_wars:titaniumsheet'},
  'create_the_air_wars:titaniumsheet',
  '#forge:plates/titanium'
)
event.replaceInput(
  { input:'create_the_air_wars:titaniumnugget'},
  'create_the_air_wars:titaniumnugget',
  '#forge:nuggets/titanium'
)
event.replaceInput(
  { input:'create_the_air_wars:titaniumingot'},
  'create_the_air_wars:titaniumingot',
  '#forge:ingots/titanium'
)
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

   event.remove({output:'minecraft:gunpowder', type: 'create:mixing'})
   event.remove({input: 'tfmg:sulfur'})
   event.remove({output: 'create_the_air_wars:crashedtitanium'})
   event.recipes.createCrushing(
    [
      '6x tfmg:sulfur_dust', 
      Item.of('tfmg:sulfur_dust').withChance(0.75)
    ], 
      'tfmg:sulfur')

   event.recipes.createCrushing(
    [
      '1x create_tank_defenses:crushed_raw_titanium', 
      Item.of('create:experience_nugget').withChance(0.75)
    ], 
      'create_the_air_wars:rawtitanium')
 
 
 
 
  })
