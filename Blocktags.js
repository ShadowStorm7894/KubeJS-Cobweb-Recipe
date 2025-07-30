ServerEvents.tags('block', event => {
  
  //Creating block tag for grouping
  event.add('forge:ores/sulfur', 
    [
      'create_the_air_wars:sulfur_ore',
      'create_the_air_wars:deepdlatesulfurore'
  ])

  event.add('forge:ores/titanium', 
    [
      //'create_the_air_wars:deepslatetitaniumore',
      //'create_the_air_wars:titanium_ore',
      'create_tank_defenses:titanium_ore',
      'create_tank_defenses:titanium_deepslate_ore'
  ])
  
  //Adding block group tags to interative tags
  event.add('minecraft:needs_diamond_tool', '#forge:ores/titanium')
  event.add('minecraft:mineable/pickaxe', '#forge:ores/sulfur')
})