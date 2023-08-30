<script lang="ts">
    export let size: number;
    export let x: number;
    export let y: number;
    export let delay = 1;

    let clazz = '';
    export { clazz as class };
</script>

<div
    class="snowflake-wrapper absolute w-fit h-fit text-primary {clazz}"
    style="left:{x}vw; top:{y}vh; animation-delay: {delay + 100}ms"
>
    <i
        style="font-size: {size}px; animation-delay: {delay}ms;"
        class="snowflake opacity-50 absolute">*</i
    >
</div>

<style>
    .snowflake {
        transform: rotate(-15deg);
        animation: tilt ease-in-out infinite alternate-reverse 5s;
    }

    .snowflake-wrapper {
        animation: wobble ease-in-out infinite alternate-reverse 5s;
        transform: translateY(10px);
    }

    @keyframes wobble {
        from {
            transform: translateY(-10px);
        }
        to {
            transform: translateY(10px);
        }
    }

    @keyframes tilt {
        from {
            transform: rotate(15deg);
        }
        to {
            transform: rotate(-15deg);
        }
    }
</style>
