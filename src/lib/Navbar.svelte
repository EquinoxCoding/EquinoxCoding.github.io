<script lang="ts">
    import Logo from './Logo.svelte';
    import HeaderLink from './NavbarLink.svelte';

    export let appearY: number;
    let y: number;
    let navbarHeight: number;
</script>

<svelte:window bind:scrollY={y} />
<div class:pull-tab={y > appearY} class="absolute top-2 w-full pb-20" class:hide={y > navbarHeight}>
    <nav
        class="flex justify-around items-center z-10 mx-10 py-5 rounded-md"
        style="background-color: rgb(42 40 42 / 0.5);"
        bind:clientHeight={navbarHeight}
    >
        <HeaderLink>About</HeaderLink>
        <HeaderLink>Events</HeaderLink>
        <div class=" w-20 h-20">
            <Logo />
        </div>
        <HeaderLink>Team</HeaderLink>
        <HeaderLink>Contact</HeaderLink>
    </nav>
</div>

<style>
    .hide {
        @apply opacity-0;
    }

    .pull-tab {
        @apply transition-all sticky;
        translate: 0 -8rem;
        transition-duration: 250ms;
    }

    .pull-tab:hover {
        @apply opacity-100;
        translate: 0 0rem;
    }
</style>
