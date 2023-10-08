<script lang="ts">
    import { quadOut } from 'svelte/easing';
    import NavLink from './NavLink.svelte';

    let scrollY: number;
    let navHeight: number;
    let screenHeight: number;
    let isHovered = false;
    $: navVisibility = quadOut(
        Math.min(1, Math.max(0, (screenHeight + navHeight - scrollY) / navHeight / 2))
    );
    $: navY = isHovered ? 0 : (1 - navVisibility) * -navHeight;
    $: hidden = navVisibility <= 0;
</script>

<nav
    class="w-screen pt-10 px-28 fixed top-0 z-10 transition-transform"
    bind:clientHeight={navHeight}
    on:mouseenter={() => isHovered = true}
    on:mouseleave={() => isHovered = false}
>
    <div
        class="w-full bg-light h-24 rounded-md shadow-sm flex items-center justify-center gap-16 transition-[translate] duration-300 translate-y-0"
        style="translate: 0 clamp(-{navHeight}px, {navY}px, 0rem)"
    >
        <NavLink href="#home" text="Home" />
        <NavLink href="#about" text="About" />
        <NavLink href="#faq" text="FAQ" />
        <!-- <NavLink href="#sponsors" text="Sponsors" /> -->
        <NavLink href="#team" text="Team" />
    </div>
</nav>

<svelte:window bind:scrollY bind:innerHeight={screenHeight} />
