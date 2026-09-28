/* ============================================================
   Hero Academy Agents — Shared Config
   ------------------------------------------------------------
   ضع هنا:
   - GOOGLE_CLIENT_ID: من Google Cloud Console
   - API_URL: رابط Apps Script Web App
   ============================================================ */

window.HERO_CONFIG = {
  // ⚙️ الإعدادات
  GOOGLE_CLIENT_ID: "712597494558-b0ufvoameo8pfnqmrf0itto30h103bru.apps.googleusercontent.com",
  API_URL: "https://script.google.com/macros/s/AKfycbx3PhaCLdQAFyFdPVuDlL2CjHf7SuqQZG4w8sXZX8gzW9BgTNYOINKojv239cM0M98A4A/exec",

 // 🕐 الجلسة والأمان
  SESSION_DAYS: 30,      // صلاحية التوكن (30 يومًا)
  HEARTBEAT_DAYS: 30,    // فحص الحالة (مرة كل 30 يومًا فقط)

  // 🔑 مفاتيح التخزين المحلي
  LS_AGENT_KEY: "hero_agent_v1",
  LS_ADMIN_KEY: "hero_admin_v1",
  LS_SUBAGENTS_KEY: "hero_subagents_v1",

  // 📌 ثوابت
  APP_VERSION: "1.0.0",
  BRAND: "Hero Academy",
  SUPPORT_EMAIL: "info@hero1.vip"
};

