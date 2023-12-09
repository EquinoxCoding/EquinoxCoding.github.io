<script>
    import ApplyButton from '$lib/components/ApplyButton.svelte';
</script>

<div class="h-screen bg-neutral relative" id="home">
    <div class="absolute bottom-[20vh] left-28">
        <h1 class="text-8xl text-dark-700 drop-shadow-xl mb-1">Winter Hacks</h1>
        <h2 class="text-4xl text-dark-500 drop-shadow-xl mb-5">Jan 12-13, 2024 (virtual!)</h2>
        <ApplyButton href="https://forms.gle/c1NMhJPwZs59Dg72A" text="Apply Now" />
        <a
            href="https://forms.gle/u93369rR9Xh3qXYw5"
            target="_blank"
            class="text-dark-500 text-lg transition-colors inline-block hover:text-dark-700 ml-8 after:w-4 after:h-[2px] after:block after:bg-dark-300 after:hover:bg-dark-500 after:hover:w-full after:transition-all"
            >Become a Volunteer</a
        >
    </div>
</div>
<div class="py-24 bg-neutral" id="about">
    <div class="ml-32 bg-light h-[550px] w-[60%] rounded-lg drop-shadow-xl" />
</div>
<div class="h-screen bg-dark-300" id="faq">faq</div>
<!-- <div class="h-screen bg-dark-300" id="sponsors">
    sponsors
</div> -->
<div class="h-screen bg-dark-500" id="team">team</div>

<style>
</style>
