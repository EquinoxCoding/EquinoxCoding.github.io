<script>
    import Logo from './Logo.svelte';
import HeaderLink from './NavbarLink.svelte';
    let visible = false;
    $: console.log(`header is visible: ${visible}`);
</script>

<nav
    class="h-20 flex justify-around items-center top-1 sticky mx-10 rounded-sm opacity-0"
    class:visible={visible}
    on:mouseenter={() => (visible = true)}
    on:mouseleave={() => (visible = false)}
>
    <HeaderLink>About</HeaderLink>
    <HeaderLink>Events</HeaderLink>
    <div class="-m-10 w-16 h-16">
        <Logo />
    </div>
    <HeaderLink>Team</HeaderLink>
    <HeaderLink>Contact</HeaderLink>
</nav>

<style>
    .visible {
        background-color: rgb(42 40 42 / 0.5);
        @apply opacity-100 transition-opacity;
    }
</style>