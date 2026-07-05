LootJS.lootTables(event => {
    // 1. Fetch ALL loot table IDs
    let allIds = event.getLootTableIds();
    
    // 2. Convert to string and filter for "chest"
    let chestIds = allIds.filter(id => id.toString().includes("chest"));
    
    let sortedByMod = {};

    // 3. Group the loot tables by mod
    chestIds.forEach(id => {
        let stringId = id.toString();
        let splitId = stringId.split(":");
        let modName = splitId[0]; 
        
        if (!sortedByMod[modName]) {
            sortedByMod[modName] = [];
        }
        
        sortedByMod[modName].push(stringId);
    });

    // 4. Safely write directly to the root kubejs/ directory
    for (let modName in sortedByMod) {
        JsonIO.write(`kubejs/chest_loot_${modName}.json`, {
            mod: modName,
            total_chest_tables: sortedByMod[modName].length,
            loot_tables: sortedByMod[modName]
        });
    }
    
    console.log(`Successfully dumped ${chestIds.length} chest loot tables for ${Object.keys(sortedByMod).length} mods directly into the kubejs folder!`);
});