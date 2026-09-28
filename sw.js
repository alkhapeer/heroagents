/* ============================================================
   Hero Academy Agents — Service Worker
   ------------------------------------------------------------
   ⚠️ لا Cache إطلاقًا — كل الطلبات تمر إلى الشبكة مباشرة.
   الهدف: تمكين التثبيت كـ PWA + التحكم بالدورة العمرية.
   ============================================================ */

self.addEventListener("install", () => {
  // لا نجبر الانتظار
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // حذف أي كاش قديم من نسخ سابقة
      try {
        const keys = await caches.keys();
        await Promise.all(keys.map((k) => caches.delete(k)));
      } catch (e) { /* تجاهل */ }
      await self.clients.claim();
    })()
  );
});

self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;

  // تجاهل غير GET
  if (req.method !== "GET") return;

  // تجاهل الطلبات الخارجية (Google Fonts, GAS, إلخ)
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Network-only: لا cache.put، لا cache.match
  event.respondWith(
    fetch(req).catch(() => {
      return new Response(
        JSON.stringify({
          ok: false,
          offline: true,
          message: "لا يوجد اتصال بالشبكة."
        }),
        {
          status: 503,
          headers: { "Content-Type": "application/json; charset=utf-8" }
        }
      );
    })
  );
});
