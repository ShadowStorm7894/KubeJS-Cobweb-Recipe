ServerEvents.recipes(event => {
	
	function CustomVeinDrillingFluidnDrill(title, output, spacing, separation, salt, id, sizem, sizeM, dimension, drill, speed, stress) {
		event.recipes.createoreexcavation.vein(`Raw ${title}`, output)
		.placement(spacing, separation, salt)
		.veinSize(sizem, sizeM)
		.biomeWhitelist(`minecraft:is_${dimension}`)
		.id(`kubejs:${id}`)

		event.recipes.createoreexcavation.drilling(output, `kubejs:${id}`, speed)
		.drill(`createoreexcavation:${drill}_drill`)
		.fluid('tfmg:lubrication_oil 100')
		.stress(stress)
		.id(`kubejs:${id}_drilling`)
	}
	function CustomVeinDrilling(title, output, spacing, separation, salt, id, sizem, sizeM, dimension, speed, stress) {
		event.recipes.createoreexcavation.vein(`Raw ${title}`, output)
		.placement(spacing, separation, salt)
		.veinSize(sizem, sizeM)
		.biomeWhitelist(`minecraft:is_${dimension}`)
		.id(`kubejs:${id}`)

		event.recipes.createoreexcavation.drilling(output, `kubejs:${id}`, speed)
		.drill('#createoreexcavation:drills')
		.stress(stress)
		.id(`kubejs:${id}_drilling`)
	}

	CustomVeinDrillingFluidnDrill('Aluminum', 'create_tank_defenses:raw_aluminum', 128, 8, 134567, 'raw_aluminum', 10, 30, 'overworld', 'diamond', 600, 256)
	CustomVeinDrillingFluidnDrill('Titanium', 'create_tank_defenses:raw_titanium', 192, 64, 58768674, 'raw_titanium', 15, 40, 'overworld', 'diamond', 1200, 512)
    CustomVeinDrilling('Nickel', 'tfmg:raw_nickel', 128, 8, 987165, 'raw_nickel', 10, 30, 'overworld', 600, 256)
	CustomVeinDrilling('Lithium', 'tfmg:raw_lithium', 128, 8, 6217165, 'raw_lithium', 10, 30, 'overworld', 600, 256)
	CustomVeinDrilling('Lead', 'tfmg:raw_lead', 128, 8, 987165, 'raw_lead', 10, 30, 'overworld', 600, 256)
	CustomVeinDrilling('Silver', 'immersiveengineering:raw_silver', 192, 16, 457165, 'raw_silver', 10, 30, 'overworld', 800, 256)
	CustomVeinDrilling('Sulfur', 'create_the_air_wars:raw_sulfur', 128, 8, 987165, 'raw_sulfur', 15, 35, 'nether', 600, 128)
})

