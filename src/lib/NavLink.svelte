<script lang="ts">
    export let href: string;
    export let text: string;
</script>

<a href={href} class="hover:font-bold text-lg text-dark-900">{text}</a>