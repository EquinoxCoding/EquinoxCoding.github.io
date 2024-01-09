<script lang="ts">
    export let sponsor: Sponsor;

    let altText: string = `${sponsor.name} Logo`; 
</script>

<a href={sponsor.href} target="_blank">
    <img src={sponsor.imagePath} class="lg:w-80 sm:w-52 md:w-64 transition-transform hover:scale-110" alt={altText}>
</a>