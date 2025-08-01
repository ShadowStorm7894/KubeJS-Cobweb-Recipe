ServerEvents.recipes(event => {

  //Removing recipes 
  event.remove({output:'minecraft:gunpowder', type: 'create:mixing'})
  event.remove({input: 'tfmg:sulfur'})
  event.remove({output: 'create_the_air_wars:crashedtitanium'})
  event.remove({output: 'minecraft:bread', input: 'minecolonies:bread_dough'})
  event.remove({output: 'create_tank_defenses:crushed_raw_aluminum'})
  event.remove({output: 'create:crushed_raw_aluminum', input: '#forge:ores/aluminum'})

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

  event.replaceInput(
  {input:'tfmg:slag'},
  'tfmg:slag',
  '#forge:slag'
  )

  event.replaceInput(
  {input:'create_simple_ore_doubling:slag'},
  'create_simple_ore_doubling:slag',
  '#forge:slag'
  )

  //Adding new recipes
  const raw_materials = [
    'aluminum', 'titanium', 'silver',
    'nickel', 'lead', 'uranium'
  ]

  function ore_doubling(output, input) {
    event.recipes.createCompacting([Item.of(output, 2), Item.of('create_simple_ore_doubling:slag').withChance(0.05)],[input, Fluid.lava(50)])
  }

  function ore_tripling(output, input) {
    event.recipes.createCompacting([Item.of(output, 3), Item.of('create_simple_ore_doubling:slag').withChance(0.15)],[input]).heated()
  }

  raw_materials.forEach(material => {
    ore_doubling(`#forge:crushed_raw_materials/${material}`, `#forge:raw_materials/${material}`)
    ore_tripling(`#forge:crushed_raw_materials/${material}`, `#forge:raw_materials/${material}`)
  })
  
  event.recipes.createCrushing(
    [
      Item.of('tfmg:sulfur_dust', 6), 
      Item.of('tfmg:sulfur_dust').withChance(0.75)
    ], 
    'tfmg:sulfur'
  )

  event.recipes.createCrushing(
    [
      Item.of('create_tank_defenses:crushed_raw_titanium', 1), 
      Item.of('create:experience_nugget').withChance(0.75)
    ], 
    'create_the_air_wars:rawtitanium'
  )

event.recipes.createCrushing(
    [
      Item.of('create:crushed_raw_aluminum'), 
      Item.of('create:crushed_raw_aluminum').withChance(0.75),
      Item.of('create:experience_nugget').withChance(0.75),
      Item.of('minecraft:cobblestone').withChance(0.12)
    ], 
    [
      'immersiveengineering:ore_aluminum',
      'create_tank_defenses:aluminum_ore',
    ]
  )
event.recipes.createCrushing(
    [
      Item.of('create:crushed_raw_aluminum', 2), 
      Item.of('create:crushed_raw_aluminum').withChance(0.25),
      Item.of('create:experience_nugget').withChance(0.75),
      Item.of('minecraft:deepslate').withChance(0.12)
    ], 
    [
      'immersiveengineering:deepslate_ore_aluminum',
      'create_tank_defenses:aluminum_deepslate_ore',
    ]
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
