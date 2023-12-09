<script lang="ts">
    import NavLink from './NavLink.svelte';
    import Logo from '../assets/Logo.svelte';
    import Icon from "@iconify/svelte";

    let scrollY: number;
    let navHeight: number;
    let screenHeight: number;
    let iconColor: string = "#3d3e45";
    let isHovered = false;
    $: navDisappearY = screenHeight * 0.8;
    $: navVisibility = Math.min(1, Math.max(0, (navDisappearY - scrollY) / navHeight / 2));
    $: navY = isHovered ? 0 : (1 - navVisibility) * -navHeight;
</script>

<div
    class="w-screen pt-10 px-28 fixed top-0 z-10"
    bind:clientHeight={navHeight}
    on:mouseenter={() => (isHovered = true)}
    on:mouseleave={() => (isHovered = false)}
    role="banner"
>
    <nav
        class="bg-light h-24 rounded-md shadow-sm transition-[translate] duration-500 grid px-24"
        style="translate: 0 clamp(-{navHeight}px, {navY}px, 0rem)"
    >
    <a href="#home" class="h-full block w-16">
        <Logo />
    </a>
        <div class="col-start-2 flex items-center justify-center gap-16">
            <NavLink href="#home" text="Home" />
            <NavLink href="#about" text="About" />
            <NavLink href="#faq" text="FAQ" />
            <NavLink href="#sponsors" text="Sponsors" />
            <NavLink href="#team" text="Team" />
        </div>
        <div class="h-full w-full mr-0 flex justify-between items-center">
            <a href="https://www.instagram.com/winterh4cks/" target="_blank"><Icon icon="mdi:instagram" height="2.5rem" color={iconColor} /></a>
            <a href="mailto:winterhacks@equinoxcoding.ca" target="_blank"><Icon icon="mdi:email-outline" height="2.7rem" color={iconColor} /></a>
            <a href="https://www.linkedin.com/company/equinox-coding/" target="_blank"><Icon icon="mdi:linkedin" height="2.5rem" color={iconColor} /></a>
        </div>
    </nav>
</div>

<svelte:window bind:scrollY bind:innerHeight={screenHeight} />

<style>
    nav {
        grid-template-columns: 1fr 4fr 1fr;
    }
</style>
