<script>
    import Slide from "./Slide.svelte";
    import { scores } from "../stores/scores.js";

    let userScores;

    scores.subscribe(scores => {
        userScores = Object.entries(scores)
            .filter(([_, v]) => v.active)
            .map(([k, v]) => ({ name: k, score: v.score }));
    });
</script>

<Slide>
    <h2>Results</h2>
    <table>
        <thead>
            <th>IE</th>
            <th>Score</th>
        </thead>
        <tbody>
            {#each userScores as score}
                <tr>
                    <td>{score.name}</td>
                    <td>{score.score}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</Slide>

<style>
    table {
        font-size: 1.5rem;
    }
</style>
