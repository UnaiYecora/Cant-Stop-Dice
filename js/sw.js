const CACHE_NAME = "20251108_3";
const BASE = "/Cant-Stop-Dice";
const FILES_TO_CACHE = [
	`${BASE}/index.html`,
	`${BASE}/css/styles.css`,
	`${BASE}/js/scripts.js`,
];

self.addEventListener("install", event => {
	event.waitUntil(
		(async () => {
			const cache = await caches.open(CACHE_NAME);
			for (const file of FILES_TO_CACHE) {
				try {
					await cache.add(file);
				} catch (err) {
					console.error("Failed to cache", file, err);
				}
			}
		})()
	);
	self.skipWaiting();
});

self.addEventListener("activate", event => {
	event.waitUntil(
		caches.keys().then(keys =>
			Promise.all(
				keys.map(key => {
					if (key !== CACHE_NAME) {
						return caches.delete(key);
					}
				})
			)
		)
	);
	self.clients.claim();
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request).then(response => {
			if (response) return response;

			// For navigation requests (visiting /project-name/), serve index.html
			if (event.request.mode === "navigate") {
				return caches.match(`${BASE}/index.html`);
			}

			// fallback to network
			return fetch(event.request);
		})
	);
});