<script lang="ts">
    import ApplyButton from '$lib/components/ApplyButton.svelte';
    import type { PageServerData } from './$types';
    import IMAGE from '$lib/assets/preview.jpg';
    import { dev } from '$app/environment';
    import SponsorTile from '$lib/components/SponsorTile.svelte';
    // import wolframLogo from '$lib/assets/sponsors/wolfram-logo1.png';
    // import echo3DLogo from '$lib/assets/sponsors/echo3D-logo.png';
    // import aopsLogo from '$lib/assets/sponsors/aops-logo.png';
    // import verbwireLogo from '$lib/assets/sponsors/verbwire-logo.png';
    // import hackClubLogo from '$lib/assets/sponsors/hackclub-logo.png';
    // import xyzLogo from '$lib/assets/sponsors/xyz-logo.png';

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
    class="h-screen bg-light-1 md:relative flex justify-center items-end overflow-x-clip"
    id="home"
>
    <div class="md:absolute bottom-[10vh] left-28 md:mb-0 mb-[60%]">
        <h1
            class="md:text-8xl text-5xl text-dark drop-shadow-xl md:mb-1 mb-2 md:text-left text-center"
        >
            Winter Hacks
        </h1>
        <h2 class="md:text-4xl text-xl md:text-start text-center text-gray drop-shadow-xl mb-5">
            Jan 12-13, 2024 (virtual!)
        </h2>
        <div class="flex md:flex-row flex-col md:gap-8 gap-4 items-center">
            <ApplyButton
                class="hover:text-light-3 hover:bg-gray bg-light-3 text-dark drop-shadow-md"
            />
            <a
                href="https://forms.gle/u93369rR9Xh3qXYw5"
                target="_blank"
                class="text-gray md:text-lg text-md transition-colors inline-block hover:font-bold hover:text-dark after:w-4 after:h-[2px] after:block after:bg-gray after:hover:bg-gray after:hover:w-full after:transition-all"
                >Become a Volunteer</a
            >
        </div>
    </div>
</div>
<div class="py-24 bg-light-1" id="about">
    <div
        class="bg-light-3 rounded-xl drop-shadow-xl p-8 md:p-12 lg:ml-40 md:mx-8 mx-4 lg:w-[900px]"
    >
        <h2 class="md:text-4xl text-3xl text-dark mb-4">About</h2>
        <p class="md:text-xl text-lg text-gray">
            WinterHacks is a hackathon run by high school students aiming to bring innovation to
            every season.
            <br />
            <br />
            This winter, we challenge you to ignite your creativity. Whether you're a beginner or a seasoned
            hacker, you will find the opportunity to let your passions show at WinterHacks.
        </p>
    </div>
</div>

<div class="bg-light-1 flex items-center justify-center" id="faq">
    <div
        class="lg:my-8 my-4 bg-light-3 drop-shadow-xl p-8 md:p-12 lg:ml-60 lg:w-[1600px] md:mx-8 mx-4 rounded-xl"
    >
        <h2 class="md:text-4xl text-dark text-3xl mb-8">FAQ</h2>
        <p class="flex gap-3 flex-col md:text-lg text-md">
            {#each data.faq as question}
                <div>
                    <span class="text-dark">Q: {question.question}</span>
                    <br />
                    <span class="text-gray">A: {question.answer}</span>
                    <br />
                </div>
            {/each}
        </p>
    </div>
</div>

<div class="bg-light-3 p-8 md:p-12" id="sponsors">
    <h2 class="text-center text-3xl mb-8">Sponsors</h2>
    <div class="flex xl:w-2/3 lg:w-2/3 lg:m-auto m-8 gap-4 flex-wrap justify-center">
        {#each data.sponsors as sponsor}
            <SponsorTile {sponsor} />
        {/each}
    </div>
</div>
<!-- <div class="h-screen bg-light-1" id="team">team</div> -->
