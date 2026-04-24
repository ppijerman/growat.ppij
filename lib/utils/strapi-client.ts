export function fetchStrapiAPI<T>(path: string): Promise<T> {
    // 1. Add a fallback or throw a clear error if the URL is missing
    const baseUrl = process.env.BACKEND_API_URL || "http://localhost:1337";

    // 2. Construct the URL safely
    const url = new URL(`/api/${path}`, baseUrl).toString();

    const token = process.env.BACKEND_API_TOKEN;

    // Optional: Warn if token is missing
    if (!token) {
        console.warn("⚠️ Warning: BACKEND_API_TOKEN is missing in environment variables.");
    }

    const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
    };

    return fetch(url, {
        headers: headers,
        next: {
            revalidate: 60,
        },
    })
        .then((res) => {
            if (!res.ok) {
                // Detailed error logging
                console.error(`❌ API Error: ${res.status} ${res.statusText} at ${url}`);
                throw new Error(`Failed to fetch ${path}: ${res.statusText}`);
            }
            return res.json();
        })
        .then((data) => data.data as T);
}