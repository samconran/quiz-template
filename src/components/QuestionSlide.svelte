<script>
    import Slide from "./Slide.svelte";

    export let content;
    export let index;
</script>

<Slide bg={content.type === "bg-image" && content.image}>
    <h2>Question {index + 1}</h2>
    <p>{content.text}</p>
    {#if content.type === "inline-image"}
        <img src={content.image} alt="The object in question" />
    {/if}
</Slide>

<style>
    img {
        height: 300px;
    }
</style>
