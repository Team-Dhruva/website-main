<script lang="ts">
  import type { TeamMember } from "$lib/team";

  export let member: TeamMember;
  $: image = member.image != null ? member.image : "/team/nopfp.jpg";
</script>

<a href={member.link ? `/members/${member.link}` : ""} class="inline-block flex-row w-48 h-64 bg-neutral-800 hover:bg-neutral-700 transition rounded-md m-2 p-2">
  <div class="flex flex-col items-center gap-2 h-full">
    <img class="flex items-center justify-center rounded-full w-32 h-32 border-4" src={image} alt={member.name} />
    <h2 class="flex items-center text-xl flex-1 font-bold text-white">{member.name}</h2>
    <p class="text-center text-white text-sm">{member.role}</p>
  </div>
</a> 