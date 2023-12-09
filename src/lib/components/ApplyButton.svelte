<script lang="ts">
    export let href: string;
    export let text: string;
</script>

<a href={href} target="_blank" class="mr-5"
><button class="bg-light py-3 px-8 rounded-3xl text-dark-700 text-lg drop-shadow-md hover:bg-dark-500 transition-colors hover:text-light"
    >{text}</button
></a
>