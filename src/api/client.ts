const API_URL = import.meta.env.VITE_API_URL ?? '/api';

type FetchOptions = RequestInit & { params?: Record<string, string> };

export async function apiFetch<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
  const { params, ...fetchOptions } = options;
  const url = new URL(`${API_URL}${endpoint}`, window.location.origin);

  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  }

  const res = await fetch(url.toString(), {
    headers: {
      'Content-Type': 'application/json',
      ...(fetchOptions.headers as Record<string, string>),
    },
    ...fetchOptions,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => res.statusText);
    throw new Error(`API ${res.status} ${res.statusText}: ${text}`);
  }

  return res.json() as Promise<T>;
}

export const api = {
  get: <T>(endpoint: string, params?: Record<string, string>) =>
    apiFetch<T>(endpoint, { method: 'GET', params }),
  post: <T>(endpoint: string, body?: unknown) =>
    apiFetch<T>(endpoint, { method: 'POST', body: JSON.stringify(body) }),
};
