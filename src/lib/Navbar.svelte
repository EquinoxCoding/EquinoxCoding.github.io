<script>
    import HeaderLink from './HeaderLink.svelte';

    let clazz = '';
    export { clazz as class };
</script>

<header
    class="w-full h-20 flex justify-around items-center absolute {clazz}"
>
    <HeaderLink>About</HeaderLink>
    <HeaderLink>Events</HeaderLink>
    <HeaderLink>Team</HeaderLink>
    <HeaderLink>Contact</HeaderLink>
</header>
