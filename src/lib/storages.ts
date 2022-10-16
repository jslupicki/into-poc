import { writable } from 'svelte/store';

export const logged = writable({
    login: '???',
    password: '???'
});
