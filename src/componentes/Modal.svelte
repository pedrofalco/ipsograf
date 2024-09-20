<script>
    export let video;
    let modal;
</script>

<button class="rounded-full border border-white self-start px-4 py-1" on:click={() => modal.showModal()}>
    Proceso &#8599;
  </button>
  
  <!-- Modal dialog -->
  <dialog bind:this={modal} class="modal">
    <div class="modal-box lg:w-full max-w-3xl h-4/5 max-h-max flex flex-col justify-center items-center">
      <!-- Close button -->
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="text-2xl lg:text-4xl font-bold font-mabry mb-2">Nuestro proceso</h3>
      <!-- Video section that takes up half of the screen -->
      <!-- svelte-ignore a11y-media-has-caption -->
      <video controls class="w-full h-full">
        <source src={video} type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
</dialog>
  