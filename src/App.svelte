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

    export let app;
    export let reveal;

    onMount(async () => {
        await tick();
        const deck = Reveal(reveal);
        deck.initialize();
    });
</script>

<svelte:head>
    <title>{app.name}</title>
</svelte:head>

<div class="reveal">
    <div class="slides">
        <Title title={quiz.title} />
        {#each quiz.questions as question, i}
            <Slide>
                <QuestionSlide content={question.question} index={i} />
                <AnswerSlide content={question.answer} />
                <ResultSlide points={question.points} />
            </Slide>
        {/each}
        <FinalResults />
    </div>
</div>
