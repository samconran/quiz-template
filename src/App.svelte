<script>
    import "reveal.js/dist/reveal.css";
    import "reveal.js/dist/reset.css";
    import Reveal from "reveal.js";
    import { onMount, tick } from "svelte";
    import Title from "./components/Title.svelte";
    import Slide from "./components/Slide.svelte";
    import QuestionSlide from "./components/QuestionSlide.svelte";
    import AnswerSlide from "./components/AnswerSlide.svelte";
    import quiz from "./assets/quiz.json";
    import ResultSlide from "./components/ResultSlide.svelte";
    import FinalResults from "./components/FinalResults.svelte";
    import UsersModal from "./components/UsersModal.svelte";
    import SettingsIcon from "./components/SettingsIcon.svelte";

    export let app;
    export let reveal;

    onMount(async () => {
        await tick();
        const deck = Reveal(reveal);
        deck.initialize();
    });

    let isUserModalOpen = false;
</script>

<svelte:head>
    <title>{app.name}</title>
</svelte:head>

<div class="reveal">
    <div class="slides">
        <Title title={quiz.title} />
        {#each quiz.rounds as round, i}
            <Slide>
                <QuestionSlide content={round.question} index={i} />
                <AnswerSlide content={round.answer} />
                <ResultSlide points={round.points} />
            </Slide>
        {/each}
        <FinalResults />
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span on:click={_ => (isUserModalOpen = true)}>
        <SettingsIcon width={20} height={20} color="#e7ad52" />
    </span>

    <UsersModal isOpen={isUserModalOpen} on:closeModal={_ => (isUserModalOpen = false)} />
</div>

<style>
    span {
        position: absolute;
        bottom: 15px;
        left: 15px;
        z-index: 1;
        cursor: pointer;
    }
</style>
