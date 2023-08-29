<script>
    import Logo from './Logo.svelte';
import HeaderLink from './NavbarLink.svelte';

    let clazz = '';
    export { clazz as class };
</script>

<header
    class="w-full h-20 flex justify-around items-center absolute {clazz}"
>
    <HeaderLink>About</HeaderLink>
    <HeaderLink>Events</HeaderLink>
    <div class="-m-10 w-16 h-16">
        <Logo />
    </div>
    <HeaderLink>Team</HeaderLink>
    <HeaderLink>Contact</HeaderLink>
</header>
