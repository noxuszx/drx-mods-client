// RECIPE - TWEAKS

// END REM RECIPES REMOVAL
ServerEvents.recipes(event => {
  [
    'endrem:nether_eye',
    'endrem:exotic_eye',
    'endrem:old_eye',
    'endrem:lost_eye',
    'endrem:rogue_eye',
    'endrem:cold_eye',
    'endrem:evil_eye',
    'endrem:guardian_eye',
    'endrem:magical_eye',
    'endrem:cursed_eye',
    'endrem:black_eye'
  ].forEach(eye => {
    event.remove({ output: eye });
  });



  // QUARK DIAMONID HEART
  event.remove({ output: 'quark:diamond_heart' });
  event.shaped(
    Item.of('quark:diamond_heart'),
    [
      'DPD',
      'EHE',
      'DED'
    ],
    {
      D: 'minecraft:diamond_block',
      E: 'minecraft:emerald_block',
      H: 'butchery:heart',
      P: 'minecraft:potion[potion_contents={potion:"legendarysurvivaloverhaul:temperature_immunity_long"}]'
    }
  );
});
