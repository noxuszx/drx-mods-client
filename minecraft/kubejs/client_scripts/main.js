// DRX - Reforged: Client Scripts
// JEI, tooltips, client UI.
// Reload: F3+T

console.info('[DRX] Client scripts loaded.');

RecipeViewerEvents.removeEntriesCompletely('item', event => {
  event.remove('minecraft:enchanted_book');
});
