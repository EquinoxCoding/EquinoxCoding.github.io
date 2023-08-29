<script>
    import '../app.css';
</script>

<title>Equinox Coding</title>
<div class="h-fit">
    <slot />
    <div class="w-full h-[1500px] isolate absolute top-0 -z-10">
        <div class="bg-noise w-full h-full" />
        <div class="mix-blend-darken absolute top-0 w-full h-full bg-secondary" />
    </div>
</div>

<style>
    .bg-noise {
        background: radial-gradient(circle at 200vw 230vh, transparent 1vw, rgb(var(--color-bg))),
            url('$lib/grain.svg');
        filter: contrast(600%) brightness(100%) grayscale(0.9);
    }
</style>
