<script lang="ts">
  import { previousTeams } from "$lib/previousTeams";
  import PreviousYearTeamMember from "./PreviousYearTeamMember.svelte";
  
  let selectedYear: number | null = null;
  
  function toggleYear(year: number) {
    if (selectedYear === year) {
      selectedYear = null;
    } else {
      selectedYear = year;
    }
  }
</script>

<div class="flex flex-col items-center w-full mt-8 md:mt-16 px-4">
  <h2 class="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-white mb-6 md:mb-8">
    Previous Years' Team
  </h2>
  
  <div class="flex flex-col items-center w-full max-w-screen-lg">
    {#each previousTeams as yearTeam}
      <div class="w-full mb-3 md:mb-4">
        <button 
          class="w-full bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-600 text-white font-bold py-3 md:py-4 px-4 md:px-6 rounded-lg flex justify-between items-center transition-colors duration-200 text-base md:text-lg"
          on:click={() => toggleYear(yearTeam.year)}
        >
          <span>{yearTeam.year}</span>
          <span class="text-lg md:text-xl">
            {selectedYear === yearTeam.year ? '▼' : '▶'}
          </span>
        </button>
        
        {#if selectedYear === yearTeam.year}
          <div class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mt-3 md:mt-4 p-3 md:p-4 bg-neutral-900 rounded-lg justify-items-center">
            {#each yearTeam.members as member}
              <PreviousYearTeamMember {member} />
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>