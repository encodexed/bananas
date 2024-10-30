<script lang="ts">
  import RandomTile from '$lib/components/RandomTile.svelte';
</script>

<main>
  <div class="board"></div>
  <div class="rack">
    {#each { length: 20 } as _}
      <RandomTile />
    {/each}
  </div>
</main>

<style>
  main {
    height: 100vh;
    width: 100%;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    background-color: #474747;
  }

  .board {
    width: 60%;
    max-width: 800px;
    min-width: 300px;
    height: 60%;
    max-height: 800px;
    min-height: 300px;
    background-color: #dfebec;
  }

  .rack {
    background-color: green;
    border: 2px solid yellow;
    border-radius: 20px;
    height: fit-content;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    max-width: 600px;
  }
</style>
