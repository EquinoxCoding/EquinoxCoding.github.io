<script>
    import '../app.css';
</script>

<title>Equinox Coding</title>
<div class="h-fit">
    <div class="w-full h-fit isolate absolute top-0">
        <div class="bg-noise w-full h-full absolute -z-10" />
        <div class="mix-blend-multiply absolute -z-10 w-full h-full bg-secondary" />
        <slot />
    </div>
</div>

<style>
    .bg-noise {
        background: radial-gradient(circle 180vw at 190vw 150vh, rgb(var(--color-bg) / 0.1), rgb(var(--color-bg))),
            url('$lib/grain.svg');
        filter: contrast(900%) brightness(80%) grayscale(0.9);
    }
</style>
