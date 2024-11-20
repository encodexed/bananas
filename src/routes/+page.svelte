<script lang="ts">
  // Components
  import RandomTile from '$lib/components/RandomTile.svelte';

  // Stores / State runes
  import { gameState } from '$lib/stores/gameState.svelte';

  let { tilesLeft } = gameState;
  const { board } = gameState;

  const handleTileDrop = () => {
    console.log('Stuff dropped');
  };
</script>

<main class="flex flex-col items-center">
  <div class="w-[480px] h-[480px] bg-amber-800 flex flex-wrap overflow-scroll">
    {#each board as row, i}
      {#each row as tileSlot, j}
        <div
          id={`${i}-${j}`}
          class="flex items-center justify-center w-12 h-12 transition-all duration-100 bg-white border hover:bg-blue-200"
        >
          <p class="select-none">
            {tileSlot.value?.value || `${i} ${j}`}
          </p>
        </div>
      {/each}
    {/each}
  </div>
  <div class="rack">
    {#each { length: 15 } as _}
      <RandomTile />
    {/each}
  </div>
</main>
