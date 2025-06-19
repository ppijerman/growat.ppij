export function fetchStrapiAPI<T>(path: string): Promise<T> {
  const url = `${process.env.BACKEND_API_URL}/api/${path}`
  const headers = {
    Authorization: `Bearer ${process.env.BACKEND_API_TOKEN}`,
  }

  return fetch(url, {
    headers: headers,
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch ${path}`)
      }
      return res.json()
    })
    .then((data) => data.data as T)
}
