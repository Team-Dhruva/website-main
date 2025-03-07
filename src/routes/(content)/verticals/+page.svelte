<script lang="ts">
  import { verticals } from "$lib/verticals";

  interface Vertical {
    name: string;
    slug: string;
    image?: string;
    description?: string;
  }
</script>

<svelte:head>
  <title>Verticals</title>
</svelte:head>

<div class="flex flex-col items-center max-w-screen-lg w-full mx-4 mb-4 mt-40 text-xl gap-4 relative">
  <h1 class="text-6xl text-center font-bold text-white">Verticals</h1>

  <div class="flex flex-col max-w-screen-lg w-full">
    {#each verticals as vertical, index}
      <a
        href={`/verticals/${vertical.slug}`}
        class="flex max-sm:flex-col max-sm:items-center bg-neutral-800 hover:bg-neutral-700 bg-opacity-50 hover:bg-opacity-50 transition rounded-lg gap-4 p-4 m-4 {index % 2 === 1 ? 'sm:flex-row-reverse' : ''}"
      >
        <img
          src={vertical.image}
          class="bg-opacity-50 flex w-40 h-40 items-center justify-center"
          class:bg-neutral-200={!vertical.image}
          class:p-4={!vertical.image}
          alt={vertical.description}
        />

        <div class="flex flex-col flex-1 items-center">
          <h1 class="font-semibold text-3xl">{vertical.name}</h1>

          <!-- <p>Date Started: {project.dateStarted}</p>
          {#if project.dateCompleted}
            <p>Date Completed: {project.dateCompleted}</p>
          {:else}
            <p>Ongoing</p>
          {/if}
          -->

          <p class="flex-1 flex items-center justify-center text-left">
            {vertical.description}
          </p>
        </div>
      </a>
    {/each}
  </div>
</div>
