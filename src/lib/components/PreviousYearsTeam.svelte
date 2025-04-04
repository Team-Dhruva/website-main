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

<div class="flex flex-col items-center w-full mt-16">
  <h2 class="text-4xl text-center font-bold text-white mb-8">Previous Years' Team</h2>
  
  <div class="flex flex-col items-center w-full max-w-screen-lg">
    {#each previousTeams as yearTeam}
      <div class="w-full mb-4">
        <button 
          class="w-full bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-3 px-4 rounded flex justify-between items-center"
          on:click={() => toggleYear(yearTeam.year)}
        >
          <span>{yearTeam.year}</span>
          <span>{selectedYear === yearTeam.year ? '▼' : '▶'}</span>
        </button>
        
        {#if selectedYear === yearTeam.year}
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 p-4 bg-neutral-900 rounded">
            {#each yearTeam.members as member}
              <PreviousYearTeamMember {member} />
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div> 