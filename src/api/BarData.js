const apiKey = process.env.REACT_APP_API_KEY;

export async function fetchVesterbroBars() {
    const url = `https://serpapi.com/search.json?engine=google_maps&q=bar+Vesterbro,+København&type=search&api_key=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

export async function fetchOsterbroBars() {
    const url = `https://serpapi.com/search.json?engine=google_maps&q=bar+Østerbro,+København&type=search&api_key=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

export async function fetchNorrebroBars() {
    const url = `https://serpapi.com/search.json?engine=google_maps&q=bar+Nørrebro,+København&type=search&api_key=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

export async function fetchFrederiksbergBars() {
    const url = `https://serpapi.com/search.json?engine=google_maps&q=bar+Frederiksberg&type=search&api_key=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

export async function fetchIndreByBars() {
    const url = `https://serpapi.com/search.json?engine=google_maps&q=bar+Indre+By,+København&type=search&api_key=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}


