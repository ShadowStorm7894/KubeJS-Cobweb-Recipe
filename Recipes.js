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

  event.replaceInput(
  {input:'create_tank_defenses:aluminum_ingot'},
  'create_tank_defenses:aluminum_ingot',
  '#forge:ingots/aluminum'
  )

  event.replaceInput(
  {input:'create_tank_defenses:thermite_dust'},
  'create_tank_defenses:thermite_dust',
  '#forge:dusts/thermite'
  )

  event.replaceInput(
  {input:'tfmg:thermite_powder'},
  'tfmg:thermite_powder',
  '#forge:dusts/thermite'
  )

  event.replaceInput(
  {input:'minecraft:string'},
  'minecraft:string',
  '#forge:string'
  )

  event.replaceInput(
  {input:'minecraft:leather'},
  'minecraft:leather',
  '#forge:leather'
  )

  event.replaceInput(
  {input:'tfmg:sulfur_dust'},
  'tfmg:sulfur_dust',
  '#forge:dusts/sulfur'
  )

  event.replaceInput(
  {input:'tfmg:nitrate_dust'},
  'tfmg:nitrate_dust',
  '#forge:dusts/saltpeter'
  )

  event.replaceInput(
  {input:'create:red_toolbox'},
  'create:red_toolbox',
  '#create:toolboxes'
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
  
 /* const cbc_mw_MCC = [
    'ap', 'aphe', 'apds', 'apfsds', 'canister', 'he', 'hef', 'heap', 'smoke'

  ]

 cbc_mw_MCC.forEach(ammo => {
  event.shapeless(
    Item.of(`cbcmodernwarfare:${ammo}_mediumcannon_cartridge`, 1,
  `{Projectile:{id:"cbcmodernwarfare:${ammo}_mediumcannon_round",Count:1b}}`
 ),
    [
      `cbcmodernwarfare:${ammo}_mediumcannon_round`,
      'cbcmodernwarfare:filled_mediumcannon_cartridge'
    ]
  )
 })*/
 //cbcmodernwarfare medium cannon crafting

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
      '#forge:stone_ore/aluminum'
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
      '#forge:deepslate_ore/aluminum'
    ]
  )

  event.recipes.createCrushing(
    [
      Item.of('minecraft:dirt', 2), 
      Item.of('minecraft:dirt').withChance(0.5),
    ], 
    [
      'minecraft:coarse_dirt'
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
