<script lang="ts">
    export let href = "https://forms.gle/c1NMhJPwZs59Dg72A";
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
