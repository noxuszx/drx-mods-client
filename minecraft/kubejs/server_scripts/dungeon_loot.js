// DRX - Reforged: Dungeon Crawl - Simply Swords Integration
// Stage 2-3: Iron gear
// Stage 4: Enchanted iron + rare diamond
// Stage 5: Enchanted diamond

const DUNGEON_LOOT_EMPTY_WEIGHT = 24
const IRON_SIMPLY_SWORDS = [
    "simplyswords:iron_chakram",
    "simplyswords:iron_scythe",
    "simplyswords:iron_rapier",
    "simplyswords:iron_glaive",
    "simplyswords:iron_warglaive",
    "simplyswords:iron_spear",
    "simplyswords:iron_sai",
    "simplyswords:iron_katana",
    "simplyswords:iron_cutlass",
    "simplyswords:iron_longsword",
    "simplyswords:iron_claymore",
    "simplyswords:iron_twinblade",
    "simplyswords:iron_greathammer",
    "simplyswords:iron_greataxe",
    "simplyswords:iron_halberd"
]

const DIAMOND_SIMPLY_SWORDS = [
    "simplyswords:diamond_chakram",
    "simplyswords:diamond_scythe",
    "simplyswords:diamond_rapier",
    "simplyswords:diamond_glaive",
    "simplyswords:diamond_warglaive",
    "simplyswords:diamond_spear",
    "simplyswords:diamond_sai",
    "simplyswords:diamond_katana",
    "simplyswords:diamond_cutlass",
    "simplyswords:diamond_longsword",
    "simplyswords:diamond_claymore",
    "simplyswords:diamond_twinblade",
    "simplyswords:diamond_greathammer",
    "simplyswords:diamond_greataxe",
    "simplyswords:diamond_halberd"
]

const ARTIFACT_ITEMS = [
    "artifacts:umbrella",
    "artifacts:everlasting_beef",
    "artifacts:eternal_steak",
    "artifacts:plastic_drinking_hat",
    "artifacts:novelty_drinking_hat",
    "artifacts:snorkel",
    "artifacts:night_vision_goggles",
    "artifacts:villager_hat",
    "artifacts:superstitious_hat",
    "artifacts:cowboy_hat",
    "artifacts:anglers_hat",
    "artifacts:lucky_scarf",
    "artifacts:scarf_of_invisibility",
    "artifacts:cross_necklace",
    "artifacts:panic_necklace",
    "artifacts:shock_pendant",
    "artifacts:flame_pendant",
    "artifacts:thorn_pendant",
    "artifacts:charm_of_sinking",
    "artifacts:charm_of_shrinking",
    "artifacts:cloud_in_a_bottle",
    "artifacts:obsidian_skull",
    "artifacts:antidote_vessel",
    "artifacts:universal_attractor",
    "artifacts:crystal_heart",
    "artifacts:helium_flamingo",
    "artifacts:chorus_totem",
    "artifacts:warp_drive",
    "artifacts:digging_claws",
    "artifacts:feral_claws",
    "artifacts:power_glove",
    "artifacts:fire_gauntlet",
    "artifacts:pocket_piston",
    "artifacts:vampiric_glove",
    "artifacts:golden_hook",
    "artifacts:onion_ring",
    "artifacts:pickaxe_heater",
    "artifacts:withered_bracelet",
    "artifacts:aqua_dashers",
    "artifacts:bunny_hoppers",
    "artifacts:kitty_slippers",
    "artifacts:running_shoes",
    "artifacts:snowshoes",
    "artifacts:steadfast_spikes",
    "artifacts:flippers",
    "artifacts:rooted_boots",
    "artifacts:strider_shoes",
    "artifacts:whoopee_cushion"
]

const UNIQUE_SIMPLY_SWORDS = [
    "simplyswords:watcher_claymore",
    "simplyswords:brimstone_claymore",
    "simplyswords:storms_edge",
    "simplyswords:stormbringer",
    "simplyswords:bramblethorn",
    "simplyswords:watching_warglaive",
    "simplyswords:toxic_longsword",
    "simplyswords:emberblade",
    "simplyswords:frostfall",
    "simplyswords:soulpyre",
    "simplyswords:molten_edge",
    "simplyswords:livyatan",
    "simplyswords:icewhisper",
    "simplyswords:arcanethyst",
    "simplyswords:thunderbrand",
    "simplyswords:hearthflame",
    "simplyswords:twisted_blade",
    "simplyswords:soulrender",
    "simplyswords:soulkeeper",
    "simplyswords:soulstealer",
    "simplyswords:mjolnir",
    "simplyswords:slumbering_lichblade",
    "simplyswords:waking_lichblade",
    "simplyswords:awakened_lichblade",
    "simplyswords:shadowsting",
    "simplyswords:dormant_relic",
    "simplyswords:tainted_relic",
    "simplyswords:righteous_relic",
    "simplyswords:sunfire",
    "simplyswords:harbinger",
    "simplyswords:whisperwind",
    "simplyswords:emberlash",
    "simplyswords:waxweaver",
    "simplyswords:hiveheart",
    "simplyswords:stars_edge",
    "simplyswords:wickpiercer",
    "simplyswords:tempest",
    "simplyswords:flamewind",
    "simplyswords:ribboncleaver",
    "simplyswords:caelestis",
    "simplyswords:wraithfang",
    "simplyswords:chompolotl"
]

const DELIGHT_FOOD_ITEMS = [
    "farmersdelight:bacon_and_eggs",
    "farmersdelight:beef_stew",
    "farmersdelight:chicken_soup",
    "farmersdelight:fried_rice",
    "farmersdelight:honey_glazed_ham",
    "farmersdelight:melon_juice",
    "farmersdelight:steak_and_potatoes",
    "farmersdelight:stuffed_potato",
    "farmersdelight:bacon_sandwich",
    "farmersdelight:hamburger",
    "farmersdelight:dumplings",
    "farmersdelight:egg_sandwich",
    "farmersdelight:apple_pie",
    "farmersdelight:chocolate_pie",
    "farmersdelight:sweet_berry_cheesecake",
    "farmersdelight:apple_cider",
    "farmersdelight:hot_cocoa",
    "farmersdelight:milk_bottle",
    "compatdelight:void_steak",
    "compatdelight:dark_chocolate_bar",
    "compatdelight:milk_chocolate_bar",
    "compatdelight:marshmallow",
    "compatdelight:toasted_marshmallow",
    "lendersdelight:cooked_amethyst_crab_meat",
    "lendersdelight:cooked_berserker",
    "lendersdelight:cooked_coral_golem_meat",
    "lendersdelight:cooked_crab_legs",
    "lendersdelight:cooked_ender_golem_meat",
    "lendersdelight:cooked_koboleton_meat",
    "lendersdelight:cooked_leviathan",
    "lendersdelight:cooked_lionfish",
    "lendersdelight:cooked_netherite_monstrosity_meat"
]

const DUNGEONS_ARISE_TREASURE_TABLES = [
    "dungeons_arise:chests/mechanical_nest/mechanical_nest_treasure",
    "dungeons_arise:chests/foundry/foundry_treasure",
    "dungeons_arise:chests/aviary/aviary_treasure",
    "dungeons_arise:chests/kisegi_sanctuary/kisegi_sanctuary_vault_normal_treasure",
    "dungeons_arise:chests/keep_kayra/keep_kayra_treasure",
    "dungeons_arise:chests/desert_hall/desert_hall_vault_treasure",
    "dungeons_arise:chests/heavenly_challenger/heavenly_challenger_treasure",
    "dungeons_arise:chests/keep_kayra/keep_kayra_garden_treasure",
    "dungeons_arise:chests/infested_temple/infested_temple_vault_treasure",
    "dungeons_arise:chests/ceryneian_hind/ceryneian_hind_treasure",
    "dungeons_arise:chests/bandit_towers/bandit_towers_treasure",
    "dungeons_arise:chests/mining_complex/mining_complex_treasure",
    "dungeons_arise:chests/infested_temple/infested_temple_top_treasure",
    "dungeons_arise:chests/thornborn_towers/thornborn_towers_top_treasure",
    "dungeons_arise:chests/merchant_campsite/merchant_campsite_treasure",
    "dungeons_arise:chests/keep_kayra/keep_kayra_library_treasure",
    "dungeons_arise:chests/desert_hall/desert_hall_treasure",
    "dungeons_arise:chests/heavenly_conqueror/heavenly_conqueror_treasure",
    "dungeons_arise:chests/scorched_mines/scorched_mines_treasure",
    "dungeons_arise:chests/kisegi_sanctuary/kisegi_sanctuary_treasure",
    "dungeons_arise:chests/illager_campsite/illager_campsite_treasure",
    "dungeons_arise:chests/kisegi_sanctuary/kisegi_sanctuary_vault_ominous_treasure",
    "dungeons_arise:chests/heavenly_rider/heavenly_rider_treasure"
]

const DUNGEONS_ARISE_FOOD_TABLES = [
    "dungeons_arise:chests/merchant_campsite/merchant_campsite_tent",
    "dungeons_arise:chests/merchant_campsite/merchant_campsite_supply",
    "dungeons_arise:chests/greenwood_pub/greenwood_pub_normal",
    "dungeons_arise:chests/greenwood_pub/greenwood_pub_barrels_normal",
    "dungeons_arise:chests/greenwood_pub/greenwood_pub_barrels_hallways",
    "dungeons_arise:chests/bathhouse/bathhouse_normal",
    "dungeons_arise:chests/bathhouse/bathhouse_barrels",
    "dungeons_arise:chests/bandit_towers/bandit_towers_supply",
    "dungeons_arise:chests/illager_campsite/illager_campsite_supply",
    "dungeons_arise:chests/bandit_village/bandit_village_supply"
]

function weightedEmpty(weight) {
    const entry = LootEntry.empty()
    entry.setWeight(weight)
    return entry
}

function addItems(pool, items, weight, modifyEntry) {
    items.forEach(item => {
        let entry = LootEntry.of(item).withWeight(weight)

        if (modifyEntry) {
            entry = modifyEntry(entry)
        }

        pool.addEntry(entry)
    })
}

// ===================================================================
// --> DUNGEON CRAWL
// ===================================================================

function applySharedTreasureLoot(table) {
    table.firstPool().removeItem("minecraft:rotten_flesh")
    table.firstPool().removeItem("minecraft:feather")
    table.firstPool().removeItem("minecraft:egg")

    table.createPool(pool => {
        addItems(pool, DIAMOND_SIMPLY_SWORDS, 3, entry => entry.enchantWithLevels([20, 30]))
        pool.addEntry(LootEntry.of("minecraft:ender_pearl").setCount([2, 6]).withWeight(12))
        pool.addEntry(LootEntry.of("minecraft:blaze_powder").setCount([2, 5]).withWeight(9))
        pool.addEntry(LootEntry.of("minecraft:quartz").setCount([3, 8]).withWeight(9))
        addItems(pool, ARTIFACT_ITEMS, 1)
        addItems(pool, UNIQUE_SIMPLY_SWORDS, 1)
        pool.addEntry(weightedEmpty(14))
    })
}

function applySharedNormalLoot(table) {
    table.createPool(pool => {
        addItems(pool, IRON_SIMPLY_SWORDS, 1)
        pool.addEntry(weightedEmpty(12))
    })

    table.createPool(pool => {
        addItems(pool, IRON_SIMPLY_SWORDS, 1, entry => entry.enchantRandomly())
        addItems(pool, DIAMOND_SIMPLY_SWORDS, 1, entry => entry.enchantWithLevels([20, 30]))
        pool.addEntry(weightedEmpty(120))
    })
}

function applyFoodLoot(table) {
    table.createPool(pool => {
        addItems(pool, DELIGHT_FOOD_ITEMS, 1)
        pool.addEntry(weightedEmpty(8))
    })
}

LootJS.lootTables(event => {
    // Stage 2 & 3 - unenchanted iron weapons
    ["dungeoncrawl:chests/stage_2", "dungeoncrawl:chests/stage_3"].forEach(id => {
        event.getLootTable(id).createPool(pool => {
            addItems(pool, IRON_SIMPLY_SWORDS, 1)
            pool.addEntry(weightedEmpty(12))
        })
    })

    // Stage 4 - enchanted iron with small chance of diamond
    event.getLootTable("dungeoncrawl:chests/stage_4").createPool(pool => {
        addItems(pool, IRON_SIMPLY_SWORDS, 5, entry => entry.enchantRandomly())
        addItems(pool, DIAMOND_SIMPLY_SWORDS, 1, entry => entry.enchantRandomly())
        pool.addEntry(weightedEmpty(50))
    })

    // Stage 5 - enchanted diamond weapons
    event.getLootTable("dungeoncrawl:chests/stage_5").createPool(pool => {
        addItems(pool, DIAMOND_SIMPLY_SWORDS, 1, entry => entry.enchantWithLevels([20, 30]))
        pool.addEntry(weightedEmpty(10))
    })

    // Treasure - enchanted diamond, resources, artifacts
    applySharedTreasureLoot(event.getLootTable("dungeoncrawl:chests/treasure"))


// ===================================================================
// --> DUNGEONS ARISE
// ===================================================================
    // Dungeons Arise - treasure chests
    DUNGEONS_ARISE_TREASURE_TABLES.forEach(id => {
        const table = event.getLootTable(id)
        if (table) {
            applySharedTreasureLoot(table)
        }
    })

    // Dungeons Arise - normal chests
    event.getLootTableIds(/dungeons_arise:chests\/.*/).forEach(id => {
        const tableId = id.toString()
        if (!tableId.includes("treasure")) {
            const table = event.getLootTable(tableId)
            if (table) {
                applySharedNormalLoot(table)
            }
        }
    })

    // Dungeons Arise - food-oriented chests
    DUNGEONS_ARISE_FOOD_TABLES.forEach(id => {
        const table = event.getLootTable(id)
        if (table) {
            applyFoodLoot(table)
        }
    })
})
