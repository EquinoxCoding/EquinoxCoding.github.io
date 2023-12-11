<script lang="ts">
    import NavLink from './NavLink.svelte';
    import Logo from '../assets/Logo.svelte';
    import Icon from '@iconify/svelte';

    let scrollY: number;
    let navHeight: number;
    let screenHeight: number;
    let iconColor: string = '#3d3e45';
    let isHovered = false;
    $: navDisappearY = screenHeight * 0.5;
    $: navVisibility = Math.min(1, Math.max(0, (navDisappearY - scrollY) / navHeight / 2));
    $: navY = isHovered ? 0 : (1 - navVisibility) * -navHeight;

    let screenWidth: number;
</script>

<div
    class="w-screen md:pt-10 md:px-28 pt-7 px-5 fixed top-0 z-10"
    bind:clientHeight={navHeight}
    on:mouseenter={() => (isHovered = screenWidth > 600)}
    on:mouseleave={() => (isHovered = false)}
    role="banner"
>
    <nav
        class="bg-light h-24 rounded-md shadow-sm transition-[translate] duration-500 grid px-24 items-center place-items-center"
        style="translate: 0 clamp(-{navHeight}px, {navY}px, 0rem)"
    >
        <a href="#home" class="md:w-14 w-16 md:col-start-1 col-start-2">
            <Logo />
        </a>
        <div class="col-start-2 md:flex hidden items-center justify-center gap-16">
            <NavLink href="#home" text="Home" />
            <NavLink href="#about" text="About" />
            <NavLink href="#faq" text="FAQ" />
            <!-- <NavLink href="#sponsors" text="Sponsors" /> -->
            <!-- <NavLink href="#team" text="Team" /> -->
        </div>
        <div class="w-full mr-0 md:flex hidden justify-between items-center">
            <a href="https://www.instagram.com/winterh4cks/" target="_blank"
                ><Icon icon="mdi:instagram" height="2.5rem" color={iconColor} /></a
            >
            <a href="mailto:winterhacks@equinoxcoding.ca" target="_blank"
                ><Icon icon="mdi:email-outline" height="2.7rem" color={iconColor} /></a
            >
            <a href="https://www.linkedin.com/company/equinox-coding/" target="_blank"
                ><Icon icon="mdi:linkedin" height="2.5rem" color={iconColor} /></a
            >
        </div>
    </nav>
</div>

<svelte:window bind:scrollY bind:innerHeight={screenHeight} bind:innerWidth={screenWidth} />

<style>
    nav {
        grid-template-columns: 1fr 4fr 1fr;
    }
</style>
