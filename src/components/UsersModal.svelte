<script>
    import { createEventDispatcher } from "svelte";
    import { scores } from "../stores/scores.js";

    const dispatch = createEventDispatcher();

    export let isOpen;

    let users;
    scores.subscribe(scores => {
        users = Object.keys(scores).map(u => ({ name: u, active: scores[u].active }));
    });

    const toggleActive = (ie, checkbox) => {
        if (checkbox.checked) {
            scores.activateIE(ie);
        } else {
            scores.deactivateIE(ie);
        }
    };
</script>

<div id="myModal" class={`modal ${isOpen && "open"}`}>
    <div class="modal-content">
        <table>
            <thead>
                <th>IE</th>
                <th>Active</th>
            </thead>
            <tbody>
                {#each users as user}
                    <tr>
                        <td>{user.name}</td>
                        <td><input type="checkbox" checked={user.active} on:change={e => toggleActive(user.name, e.target)} /></td>
                    </tr>
                {/each}
            </tbody>
        </table>
        <button on:click={_ => dispatch("closeModal")}>Close</button>
    </div>
</div>

<style>
    .modal.open {
        display: block;
    }

    /* The Modal (background) */
    .modal {
        display: none;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.4);
    }

    /* Modal Content/Box */
    .modal-content {
        background-color: #111;
        margin: 15% auto;
        padding: 2rem 5rem;
        border: 1px solid #888;
        width: fit-content;
    }

    button {
        background-color: #e7ad52;
        border: none;
        color: #000;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }

    button:hover {
        background-color: #e39f32;
        cursor: pointer;
    }

    button:active {
        background-color: #df9319;
        cursor: pointer;
    }
</style>
