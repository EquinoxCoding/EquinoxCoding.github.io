<script lang="ts">
    import Navbar from '$lib/Navbar.svelte';

    let navbarAppearY: number;
</script>

<div class="h-fit max-w-full">
    <div class="h-screen flex content-center items-end p-12" bind:clientHeight={navbarAppearY}>
        <h1 class="text-primary text-xl">Winter Hacks Coming Soon</h1>
    </div>
    <div class="">
        <Navbar appearY={navbarAppearY}/>
        <div class="h-screen" />
        <div class="h-screen" />
    </div>
</div>
