// DRX - Reforged: Boss Eye Drops

console.info('[DRX] Server scripts loaded.');

const END_REM_BOSS_EYES = {
  'cataclysm:ignis': 'endrem:nether_eye',
  'cataclysm:the_leviathan': 'endrem:exotic_eye',
  'cataclysm:netherite_monstrosity': 'endrem:old_eye',
  'cataclysm:the_harbinger': 'endrem:lost_eye',
  'cataclysm:maledictus': 'endrem:rogue_eye',
  'cataclysm:scylla': 'endrem:cold_eye',
  'cataclysm:ancient_remnant': 'endrem:evil_eye',
  'block_factorys_bosses:sandworm': 'endrem:guardian_eye',
  'block_factorys_bosses:yeti': 'endrem:magical_eye',
  'block_factorys_bosses:infernal_dragon': 'endrem:cursed_eye',
  'block_factorys_bosses:underworld_knight': 'endrem:black_eye'
};

Object.entries(END_REM_BOSS_EYES).forEach(([boss, eye]) => {
  EntityEvents.drops(boss, event => {
    event.addDrop(Item.of(eye));
  });
});

