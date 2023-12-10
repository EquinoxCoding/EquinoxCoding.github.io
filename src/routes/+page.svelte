<script lang="ts">
    import ApplyButton from '$lib/components/ApplyButton.svelte';
    import type { PageServerData } from './$types';

    export let data: PageServerData;
</script>

<div class="h-screen bg-neutral relative overflow-x-clip" id="home">
    <div class="absolute bottom-[10vh] left-28">
        <h1 class="text-8xl text-dark-700 drop-shadow-xl mb-1">Winter Hacks</h1>
        <h2 class="text-4xl text-dark-500 drop-shadow-xl mb-5">Jan 12-13, 2024 (virtual!)</h2>
        <div class="flex gap-8 items-center">
            <ApplyButton
                class="hover:text-light hover:bg-dark-500 bg-light text-dark-700 drop-shadow-md"
            />
            <a
                href="https://forms.gle/u93369rR9Xh3qXYw5"
                target="_blank"
                class="text-dark-500 text-lg transition-colors inline-block hover:font-bold hover:text-dark-700 after:w-4 after:h-[2px] after:block after:bg-dark-300 after:hover:bg-dark-500 after:hover:w-full after:transition-all"
                >Become a Volunteer</a
            >
        </div>
    </div>
</div>
<div class="py-24 bg-neutral flex items-center justify-center" id="about">
    <div class="bg-light w-1/2 rounded-xl drop-shadow-xl p-12">
        <h2 class="text-4xl text-dark-700 mb-4">About</h2>
        <p class="text-xl text-dark-500">
            WinterHacks is a hackathon run by high school students aiming to bring innovation to
            every season.
            <br />
            <br />
            This winter, we challenge you to ignite your creativity. Whether you're a beginner or a seasoned
            hacker, you will find the opportunity to let your passions show at WinterHacks.
        </p>
    </div>
</div>

<div class="h-screen bg-neutral flex items-center justify-center" id="faq">
    <div class="bg-light drop-shadow-xl p-12 rounded-xl w-1/2">
        <h2 class="text-4xl text-dark-700 text-center mb-8">FAQ</h2>
        <p class="flex gap-3 flex-col text-lg">
            {#each data.faq as question}
                <div>
                    <span>Q: {question.question}</span>
                    <br />
                    <span class="text-dark-500">A: {question.answer}</span>
                    <br />
                </div>
            {/each}
        </p>
    </div>
</div>

<!-- <div class="h-screen bg-dark-300" id="sponsors">sponsors</div> -->
<!-- <div class="h-screen bg-dark-500" id="team">team</div> -->

<style>
</style>
