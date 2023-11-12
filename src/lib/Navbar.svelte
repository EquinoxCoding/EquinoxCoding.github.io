<script lang="ts">
    import NavLink from './NavLink.svelte';
    import Logo from './assets/Logo.svelte';

    let scrollY: number;
    let navHeight: number;
    let screenHeight: number;
    let isHovered = false;
    $: navVisibility = Math.min(1, Math.max(0, (screenHeight - scrollY) / navHeight / 2));
    $: navY = isHovered ? 0 : (1 - navVisibility) * -navHeight;
</script>

<nav
    class="w-screen pt-10 px-28 fixed top-0 z-10"
    bind:clientHeight={navHeight}
    on:mouseenter={() => (isHovered = true)}
    on:mouseleave={() => (isHovered = false)}
>
    <div
        class="w-full bg-light h-24 rounded-md shadow-sm flex items-center justify-center gap-16 transition-[translate] duration-500"
        style="translate: 0 clamp(-{navHeight}px, {navY}px, 0rem)"
    >
        <NavLink href="#home" text="Home" />
        <NavLink href="#about" text="About" />
        <a href="#home" class="h-16 block w-16 -mx-4">
            <Logo />
            <!-- <img src={logo} alt="Winter Hacks logo" class=" h-full select-none cursor-pointer" draggable="false" /> -->
        </a>
        <NavLink href="#faq" text="FAQ" />
        <!-- <NavLink href="#sponsors" text="Sponsors" /> -->
        <NavLink href="#team" text="Team" />
    </div>
</nav>

<svelte:window bind:scrollY bind:innerHeight={screenHeight} />
