export let apiURL;

if (import.meta.env.VITE_API_URL == 'dev') {
    apiURL = "http://127.0.0.1:8000/api";
} else {
    apiURL = "https://smarter-immo.onrender.com/api";
}
