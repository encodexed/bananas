<script lang="ts">
  import { changePosition } from '$lib/helpers/dragdrop';

  const ondragstart = (e: DragEvent | null) => {
    if (!e) return;
    const ele = e.target;
    if (!(ele instanceof HTMLElement)) return;
  };

  const ondragend = (e: MouseEvent | null) => {
    if (!e) return;
    const ele = e.target;
    if (!(ele instanceof HTMLElement)) return;
    changePosition(ele, e.clientX, e.clientY);
  };

  const getRandomLetter = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  };
</script>

<button
  type="button"
  class="move-me"
  draggable="true"
  {ondragstart}
  {ondragend}
>
  {getRandomLetter()}
</button>

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
