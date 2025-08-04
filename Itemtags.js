ServerEvents.tags('item', event => {
  //constants
  
  const crushed_raw_materials = [
    'aluminum', 'silver', 'nickel', 'lead', 'uranium', 'titanium'
  ]
  
  //Creating item tags for grouping
  crushed_raw_materials.forEach(material => {
    event.add(`forge:crushed_raw_materials/${material}`, `create:crushed_raw_${material}`)
  })
  
  event.add('forge:stone_ore/aluminum',
    [
      'immersiveengineering:ore_aluminum',
      'create_tank_defenses:aluminum_ore'
    ]
  )

  event.add('forge:deepslate_ore/aluminum',
    [
      'immersiveengineering:deepslate_ore_aluminum',
      'create_tank_defenses:aluminum_deepslate_ore'
    ]
  )

  event.add('forge:ingots/aluminum',
    [
    'create_tank_defenses:aluminum_ingot'
  ])

  event.add('forge:raw_materials/aluminum',
    [
    'create_tank_defenses:raw_aluminum'
    ])

  event.add('forge:dusts/sulfur',
    [
      'tfmg:sulfur_dust',
      'create_the_air_wars:crashedsulfur'
  ])

  event.add('forge:ores/sulfur', 
    [
      'create_the_air_wars:sulfur_ore',
      'create_the_air_wars:deepdlatesulfurore'
  ])

  event.add('forge:dusts/saltpeter',
    [
      'tfmg:nitrate_dust',
  ])

  event.add('forge:ingots/titanium',
    [
    'create_the_air_wars:titaniumingot',
  ])

  event.add('forge:plates/titanium',
    [
    'create_the_air_wars:titaniumsheet',
  ])

  event.add('forge:nuggets/titanium',  
    [
    'create_the_air_wars:titaniumnugget',
    'create_tank_defenses:titanium_nugget'
  ])

  event.add('forge:raw_materials/titanium',
    [
    'create_the_air_wars:rawtitanium'
  ])
  
  event.add('forge:slag',
    [
      'tfmg:slag',
      'create_simple_ore_doubling:slag',
      'create_tank_defenses:slag_scraps'
    ]
  )
  event.add('forge:dusts/aluminum',
    [
      'create_tank_defenses:aluminum_dust'
    ]
  )

  event.add('forge:plates/aluminum',
    [
      'create_tank_defenses:aluminum_sheet'
    ]
  )
  event.add('forge:dusts/thermite',
    [
      'tfmg:thermite_powder',
    ]
  )
})