<script lang="ts">
    import ApplyButton from '$lib/components/ApplyButton.svelte';
    import type { PageServerData } from './$types';
    import IMAGE from '$lib/assets/preview.jpg';
    import { dev } from '$app/environment';

    const TITLE = 'WinterHacks';
    const DESCRIPTION =
        "WinterHacks: virtually on January 12-13, 2024. Come join Equinox Coding's newest seasonal hackathon made by students, for students.";

    export let data: PageServerData;
</script>

<svelte:head>
    <title>{TITLE}</title>
    <meta name="description" content={DESCRIPTION} />

    <meta property="og:title" content={TITLE} />
    <meta property="og:description" content={DESCRIPTION} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={IMAGE} />
    {#if !dev}
        <meta property="og:url" content="https://equinoxcoding.ca/" />
    {/if}

    <meta property="twitter:card" content="summary_large_image" />

    {#if !dev}
        <meta property="twitter:url" content="https://equinoxcoding.ca/" />
    {/if}
    <meta property="twitter:title" content={TITLE} />
    <meta property="twitter:description" content={DESCRIPTION} />
    <meta property="twitter:image" content={IMAGE} />
</svelte:head>

<div
    class="h-screen bg-neutral md:relative flex justify-center items-end overflow-x-clip"
    id="home"
>
    <div class="md:absolute bottom-[10vh] left-28 md:mb-0 mb-[60%]">
        <h1 class="md:text-8xl text-5xl text-dark-700 drop-shadow-xl md:mb-1 mb-2">Winter Hacks</h1>
        <h2 class="md:text-4xl text-xl md:text-start text-center text-dark-500 drop-shadow-xl mb-5">
            Jan 12-13, 2024 (virtual!)
        </h2>
        <div class="flex md:flex-row flex-col md:gap-8 gap-4 items-center">
            <ApplyButton
                class="hover:text-light hover:bg-dark-500 bg-light text-dark-700 drop-shadow-md"
            />
            <a
                href="https://forms.gle/u93369rR9Xh3qXYw5"
                target="_blank"
                class="text-dark-500 md:text-lg text-md transition-colors inline-block hover:font-bold hover:text-dark-700 after:w-4 after:h-[2px] after:block after:bg-dark-300 after:hover:bg-dark-500 after:hover:w-full after:transition-all"
                >Become a Volunteer</a
            >
        </div>
    </div>
</div>
<div class="flex items-center bg-neutral lg:flex-row flex-col">
    <div class="py-24 bg-neutral flex items-center justify-center lg:w-1/2 md:p-8 p-4" id="about">
        <div class="bg-light rounded-xl drop-shadow-xl p-8 md:p-12">
            <h2 class="md:text-4xl text-3xl text-dark-700 mb-4">About</h2>
            <p class="md:text-xl text-lg text-dark-500">
                WinterHacks is a hackathon run by high school students aiming to bring innovation to
                every season.
                <br />
                <br />
                This winter, we challenge you to ignite your creativity. Whether you're a beginner or
                a seasoned hacker, you will find the opportunity to let your passions show at WinterHacks.
            </p>
        </div>
    </div>

    <div class="bg-neutral flex items-center justify-center lg:w-1/2 md:p-8 p-4" id="faq">
        <div class="bg-light drop-shadow-xl p-8 md:p-12 rounded-xl">
            <h2 class="md:text-4xl text-3xl text-dark-700 text-center mb-8">FAQ</h2>
            <p class="flex gap-3 flex-col md:text-lg text-md">
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
</div>

<!-- <div class="h-screen bg-dark-300" id="sponsors">sponsors</div> -->
<!-- <div class="h-screen bg-dark-500" id="team">team</div> -->
