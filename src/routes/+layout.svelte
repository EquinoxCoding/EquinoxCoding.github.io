<script lang="ts">
    import Navbar from '$lib/components/Navbar.svelte';
    import '../app.css';

    const TITLE = "WinterHacks";
    const DESCRIPTION = "WinterHacks: virtually on January 12-13, 2024. Come join Equinox Coding's newest seasonal hackathon made by students, for students.";
</script>

<svelte:head>
    <title>{TITLE}</title>
    <meta property="og:title" content={TITLE} />
    <meta name="description" content={DESCRIPTION} />
    <meta property="og:description" content={DESCRIPTION} />
    <meta property="og:type" content="website">
</svelte:head>

<Navbar />
<slot />