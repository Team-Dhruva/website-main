<script lang="ts">
  import { teamMembers } from "$lib/team";
  import TeamMember from "$lib/components/TeamMember.svelte";
  import { facultymembers } from "$lib/team";
  import Faculty from "$lib/components/Faculty.svelte";
  import PreviousYearsTeam from "$lib/components/PreviousYearsTeam.svelte";
</script>

<svelte:head>
  <title>Our Team</title>
</svelte:head>

<div class="flex flex-col max-w-screen-lg w-full mx-4 mb-4 mt-40 text-xl gap-4 relative">
  <h1 class="text-6xl text-center font-bold text-white">Faculty</h1>

  <div class="flex flex-wrap justify-center gap-0">
    {#each facultymembers as fac}
      <Faculty {fac} />
    {/each}
  </div>
  <h1 class="text-6xl text-center font-bold text-white">Team</h1>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
    {#each teamMembers as member}
      <TeamMember {member} />
    {/each}
  </div>

  
  
  <PreviousYearsTeam />
</div>

<style>
  .grid {
    display: grid;
    gap: 20px;
  }
</style>
