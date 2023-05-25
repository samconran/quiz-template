<script>
    import Slide from "./Slide.svelte";

    export let content;
</script>

<Slide bg={content.type === "bg-image" && content.image}>
    {#if content.type === "inline-image"}
        <img class={content.answer && "small"} src={content.image} alt="The object in question" />
    {/if}
    {#if content.text}
        <h2>{content.text}</h2>
    {/if}
    {#if content.detail}
        <p>{content.detail}</p>
    {/if}
</Slide>

<style>
    img.small {
        height: 300px;
    }
</style>
