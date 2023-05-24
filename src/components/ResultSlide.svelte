<script>
    import Slide from "./Slide.svelte";
    import { scores } from "../stores/scores.js";

    export let points;

    let users;
    scores.subscribe(scores => {
        users = Object.keys(scores).filter(u => scores[u].active);
    });

    const modifyUserScore = (user, checkbox) => {
        if (checkbox.checked) {
            scores.incrementScore(user, points);
        } else {
            scores.decrementScore(user, points);
        }
    };
</script>

<Slide>
    <h2>Scores</h2>
    <table>
        <thead>
            <th>IE</th>
            <th>Correct?</th>
        </thead>
        <tbody>
            {#each users as user}
                <tr>
                    <td>{user}</td>
                    <td><input type="checkbox" on:change={e => modifyUserScore(user, e.target)} /></td>
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
