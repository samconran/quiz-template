import { writable, get } from "svelte/store";

const ieList = ["Stuart", "Mark", "Martha", "Sam", "Venera", "Rui", "Robin", "Sebastian", "Thomas", "Lewis", "Olivier"];

function createScores() {
    const initialState = {};
    ieList.forEach(ie => (initialState[ie] = { score: 0, active: true }));

    const { subscribe, update } = writable(initialState);

    return {
        subscribe,
        incrementScore: (ie, points) => {
            update(original => {
                const copy = { ...original };
                copy[ie].score += points;
                return copy;
            });
        },
        decrementScore: (ie, points) => {
            update(original => {
                const copy = { ...original };
                copy[ie].score -= points;
                return copy;
            });
        },
        activateIE: ie => {
            update(original => {
                const copy = { ...original };
                copy[ie].active = true;
                return copy;
            });
        },
        deactivateIE: ie => {
            update(original => {
                const copy = { ...original };
                copy[ie].active = false;
                return copy;
            });
        }
    };
}

export const scores = createScores();
