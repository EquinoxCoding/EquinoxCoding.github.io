<script lang="ts">
    export let href = "https://forms.gle/6GtEpddRhBZoA8neA";
    export let text = "Apply Now";

    let clazz = '';
    export { clazz as class };
</script>

<a {href} target="_blank"
    ><button
        class="py-3 px-8 rounded-3xl text-lg transition-colors {clazz}"
        >{text}</button
    ></a
>
