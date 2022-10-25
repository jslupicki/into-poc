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
            console.log('Failed to read settings from server. Caused by %s', error);
            let env = {
                into_upload_file_url: import.meta.env.VITE_into_upload_file_url,
                environment: import.meta.env.VITE_environment
            };
            settings.update(_ => env);
            return [];
        });
}
