<script lang="ts">
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import { spring } from 'svelte/motion';
  import { quintOut } from 'svelte/easing';
  
  import { verticals } from "$lib/verticals";

  interface Vertical {
    name: string;
    slug: string;
    image?: string;
    description?: string;
  }
  
  // Animation for title letters
  let titleVisible = false;
  const titleText = "Verticals";
  let titleLetters = titleText.split('');
  
  // Card hover animation
  let hoveredCard = -1;
  
  // Staggered card entry
  let cardsVisible = false;
  
  onMount(() => {
    // Show title after a short delay
    setTimeout(() => {
      titleVisible = true;
      // Show cards after title animation
      setTimeout(() => {
        cardsVisible = true;
      }, 800);
    }, 300);
  });
</script>

<svelte:head>
  <title>Verticals</title>
</svelte:head>

<div class="flex flex-col items-center max-w-screen-lg w-full mx-auto my-12 px-4 text-xl gap-8 relative mt-32">
  <!-- Modern animated title -->
  <div class="mb-16 relative">
    <h1 class="text-7xl md:text-8xl font-bold text-transparent" aria-label={titleText}>
      {#each titleLetters as letter, i}
        {#if titleVisible}
          <span 
            in:fly={{ y: -50, delay: i * 50, duration: 400, easing: quintOut }}
            class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            {letter}
          </span>
        {:else}
          <span class="opacity-0">{letter}</span>
        {/if}
      {/each}
    </h1>
    
    <!-- Subtle animated underline -->
    {#if titleVisible}
      <div 
        in:fly={{ x: -100, delay: titleLetters.length * 50, duration: 600 }}
        class="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mt-2"
      ></div>
    {/if}
  </div>

  <!-- Vertical cards with enhanced hover effects -->
  <div class="flex flex-col max-w-screen-lg w-full gap-8">
    {#each verticals as vertical, index}
      {#if cardsVisible}
        <a
          href={vertical.slug === "research" ? "https://research.teamdhruva.com" : `/verticals/${vertical.slug}`}
          in:fade={{ delay: 100 + index * 150, duration: 400 }}
          class="group relative overflow-hidden rounded-xl"
          on:mouseenter={() => hoveredCard = index}
          on:mouseleave={() => hoveredCard = -1}
        >
          <div 
            class="absolute inset-0 bg-gradient-to-br from-indigo-600/80 to-purple-700/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          ></div>
          
          <!-- Card inner content with transform effect on hover -->
          <div 
            class="flex max-sm:flex-col max-sm:items-center gap-6 p-6 relative z-10 bg-neutral-800/70 transition-all duration-300 group-hover:translate-y-0 group-hover:shadow-2xl group-hover:shadow-purple-500/20 transform group-hover:-translate-y-2"
            class:sm:flex-row-reverse={index % 2 === 1}
          >
            <div class="relative overflow-hidden rounded-lg flex-shrink-0">
              <img
                src={vertical.image}
                class="w-48 h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-2"
                class:bg-neutral-700={!vertical.image}
                class:p-4={!vertical.image}
                alt={vertical.description || vertical.name}
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div class="flex flex-col flex-1 items-center justify-center text-center sm:text-left py-4 transition-all duration-300">
              <h2 class="font-bold text-4xl mb-4 text-white group-hover:text-white/95 group-hover:tracking-wider transition-all duration-300">
                {vertical.name}
              </h2>

              <p class="text-gray-300 group-hover:text-white/90 max-w-2xl mx-auto sm:mx-0 transition-all duration-300 leading-relaxed">
                {vertical.description}
              </p>
            </div>
          </div>
          
          <!-- Decorative elements that appear on hover -->
          <div class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          <div class="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-indigo-500 to-purple-500 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
        </a>
      {/if}
    {/each}
  </div>
</div>