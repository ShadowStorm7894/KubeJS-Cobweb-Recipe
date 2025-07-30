ServerEvents.recipes(event => {

  //Removing recipes 
  event.remove({output:'minecraft:gunpowder', type: 'create:mixing'})
  event.remove({input: 'tfmg:sulfur'})
  event.remove({output: 'create_the_air_wars:crashedtitanium'})
  event.remove({output: 'minecraft:bread', input: 'minecolonies:bread_dough'})

  //Replacing recipes that us item IDs with item tags
  event.replaceInput(
  {input:'create_the_air_wars:titaniumsheet'},
  'create_the_air_wars:titaniumsheet',
  '#forge:plates/titanium'
  )

  event.replaceInput(
  {input:'create_the_air_wars:titaniumnugget'},
  'create_the_air_wars:titaniumnugget',
  '#forge:nuggets/titanium'
  )

  event.replaceInput(
  {input:'create_the_air_wars:titaniumingot'},
  'create_the_air_wars:titaniumingot',
  '#forge:ingots/titanium'
  )

  event.replaceInput(
  {input:'create:dough'},
  'create:dough',
  '#forge:dough'
  )

  event.replaceInput(
  {input:'minecolonies:bread_dough'},
  'minecolonies:bread_dough',
  '#forge:dough'
  )

  event.replaceInput(
  {input:'croptopia:dough'},
  'croptopia:dough',
  '#forge:dough'
  )

  event.replaceInput(
  {input:'create:wheat_flour'},
  'create:wheat_flour',
  '#forge:flour'
  )
  
  //Adding new recipes
  event.recipes.createCrushing(
    [
      '6x tfmg:sulfur_dust', 
      Item.of('tfmg:sulfur_dust').withChance(0.75)
    ], 
    'tfmg:sulfur'
  )

  event.recipes.createCrushing(
    [
      '1x create_tank_defenses:crushed_raw_titanium', 
      Item.of('create:experience_nugget').withChance(0.75)
    ], 
    'create_the_air_wars:rawtitanium'
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
})
