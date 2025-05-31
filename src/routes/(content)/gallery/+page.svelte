<script lang="ts">
  import { galleryImages } from "$lib/gallery";
  import { quintOut } from "svelte/easing";
  import { fade, fly } from "svelte/transition";

  // Define the image type
  interface GalleryImage {
    src: string;
    alt: string;
  }

  let selectedImage: GalleryImage | null = null;

  function openLightbox(image: GalleryImage): void {
    selectedImage = image;
  }

  function closeLightbox(): void {
    selectedImage = null;
  }

  // Handle keyboard events for accessibility
  function handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && selectedImage) {
      closeLightbox();
    }
  }
</script>

<svelte:head>
  <title>Gallery</title>
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

<div
  class="flex flex-col max-w-screen-lg w-full mx-auto px-2 sm:px-4 mb-4 pt-32 text-base sm:text-xl gap-4 relative"
>
  <h1 class="text-4xl sm:text-6xl text-center font-bold text-white mb-4">
    Gallery
  </h1>
  <div class="masonry-gallery">
    {#each galleryImages as image}
      <button
        type="button"
        class="gallery-img-container"
        on:click={() => openLightbox(image)}
        on:keydown={(e) => e.key === 'Enter' && openLightbox(image)}
      >
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          class="gallery-img"
        />
      </button>
    {/each}
  </div>
</div>

{#if selectedImage}
  <div 
    class="fixed inset-0 z-50 flex items-center justify-center"
    role="dialog"
    aria-modal="true"
    aria-labelledby="lightbox-title"
  >
    <button
      type="button"
      transition:fade={{ duration: 150 }}
      on:click={closeLightbox}
      class="absolute inset-0 bg-black opacity-50 cursor-pointer"
      aria-label="Close lightbox"
    ></button>
    <div
      transition:fly={{
        delay: 0,
        duration: 200,
        x: 0,
        y: 500,
        easing: quintOut
      }}
      class="relative bg-neutral-800 rounded-lg p-4 max-w-2xl m-4"
    >
      <div class="flex justify-between items-start mb-4">
        <h2 id="lightbox-title" class="text-xl font-semibold text-white">
          {selectedImage.alt}
        </h2>
        <button
          type="button"
          on:click={closeLightbox}
          class="text-white hover:text-gray-300 text-2xl leading-none"
          aria-label="Close"
        >
          ×
        </button>
      </div>
      <img
        src={selectedImage.src}
        alt={selectedImage.alt}
        loading="lazy"
        class="rounded-lg object-contain max-h-[70vh] w-auto mx-auto"
      />
    </div>
  </div>
{/if}

<style>
  .masonry-gallery {
    column-count: 1;
    column-gap: 0.75rem;
    width: 100%;
    max-width: 100vw;
  }
  
  @media (min-width: 640px) {
    .masonry-gallery {
      column-count: 2;
    }
  }
  
  @media (min-width: 1024px) {
    .masonry-gallery {
      column-count: 3;
    }
  }
  
  .gallery-img-container {
    width: 100%;
    margin-bottom: 0.75rem;
    display: block;
    border: none;
    padding: 0;
    background: transparent;
    cursor: pointer;
  }
  
  .gallery-img {
    width: 100%;
    display: block;
    border-radius: 0.5rem;
    transition: transform 0.2s;
    background: #222;
    object-fit: cover;
  }
  
  .gallery-img-container:hover .gallery-img {
    transform: scale(1.03);
  }
  
  .gallery-img-container:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
    border-radius: 0.5rem;
  }
</style>