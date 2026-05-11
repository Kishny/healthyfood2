export async function register() {
  // Node.js 25+ exposes a global localStorage via --localstorage-file.
  // When the path is invalid the object exists but getItem/setItem are broken.
  // Patch it with a working in-memory fallback so SSR doesn't crash.
  if (
    typeof globalThis.localStorage !== "undefined" &&
    typeof (globalThis.localStorage as Storage).getItem !== "function"
  ) {
    const store = new Map<string, string>();
    Object.defineProperty(globalThis, "localStorage", {
      value: {
        getItem: (key: string) => store.get(key) ?? null,
        setItem: (key: string, value: string) => { store.set(String(key), String(value)); },
        removeItem: (key: string) => { store.delete(String(key)); },
        clear: () => { store.clear(); },
        get length() { return store.size; },
        key: (index: number) => [...store.keys()][index] ?? null,
      } satisfies Storage,
      writable: true,
      configurable: true,
    });
  }
}
