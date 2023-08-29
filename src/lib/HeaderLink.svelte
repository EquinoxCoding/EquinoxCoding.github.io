<script lang="ts">
    export let link: string = "";
</script>

<a href={link} class="text-accent text-lg hover:brightness-75 hover:grayscale-100 transition-all duration-200   ">
    <slot />
</a>