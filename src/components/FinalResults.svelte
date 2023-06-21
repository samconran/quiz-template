<script>
    import Slide from "./Slide.svelte";
    import { scores } from "../stores/scores.js";

    let userScoresSorted;

    scores.subscribe(scores => {
        userScoresSorted = Object.entries(scores)
            .filter(([_, v]) => v.active)
            .map(([k, v]) => ({ name: k, score: v.score }))
            .sort((s1, s2) => s2.score - s1.score);
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
            {#each userScoresSorted as score}
                <tr>
                    <td>{score.name}</td>
                    <td class="score">{score.score}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</Slide>

<style>
    table {
        font-size: 1.5rem;
    }
    td.score {
        text-align: center;
    }
</style>
