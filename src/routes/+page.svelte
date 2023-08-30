<script lang="ts">
    import Navbar from '$lib/Navbar.svelte';
    import Snowflake from '$lib/Snowflake.svelte';

    let navbarAppearY: number;

    interface SnowflakeData {
        size: number;
        x: number;
        y: number;
        delay: number;
    }

    let numSnowflakes = 20;
    let snowflakes = new Array<SnowflakeData>(10);
    for (let i = 0; i < numSnowflakes; i++) {
        snowflakes[i] = {
            size: 85 + Math.random() * 30,
            x: Math.random() * 120 - 10,
            y: Math.random() * 120 - 10,
            delay: Math.random() * 3000
        };
    }
</script>

<div class="h-fit max-w-full">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="h-screen flex-col flex justify-center items-center p-12 overflow-clip"
        bind:clientHeight={navbarAppearY}
        id="title"
    >
        <h1 class="text-primary text-5xl font-serif">winterhacks dec. 2023</h1>
        <h2 class="text-primary text-4xl font-serif mt-2">coming soon</h2>
        {#each snowflakes as snowflake}
            <Snowflake {...snowflake} />
        {/each}
    </div>
    <main>
        <!-- <Navbar appearY={navbarAppearY} /> -->
        <!-- <div class="h-screen" id="about" />
        <div class="h-screen" id="events" />
        <div class="h-screen" id="team" />
        <div class="h-screen" id="contact" /> -->
    </main>
</div>
