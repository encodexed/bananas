<script lang="ts">
  import { draggable } from '@neodrag/svelte';

  const getRandomLetter = () => {
    const alphabet =
      'AAAAAAAAAAAAABBBCCCDDDDDDEEEEEEEEEEEEEEEEEEFFFGGGGHHHIIIIIIIIIIIIJJKKLLLLLMMMNNNNNNNNOOOOOOOOOOOPPPQQRRRRRRRRRSSSSSSTTTTTTTTTUUUUUUVVVWWWXXYYYZZ';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  };
</script>

<button class="move-me" use:draggable>{getRandomLetter()}</button>

<style>
  .move-me {
    height: 50px;
    width: 50px;
    border: 1px solid black;
    text-align: center;
    user-select: none;
    cursor: grab;
    border-radius: 10px;
    background-color: yellow;
    font-size: 16px;
    font-weight: bold;
  }
</style>
