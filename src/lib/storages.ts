import {writable} from 'svelte/store';

export const logged = writable({
    login: '???',
    password: '???'
});

export const settings = writable({})

export function refreshSettings() {
    fetch("/api/Settings")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            settings.update(_ => data);
        })
        .catch(error => {
            console.log(error);
            let env = {
                test: import.meta.env.VITE_test
            };
            settings.update(_ => env);
            return [];
        });
}
