/* ============================================================
   Hero Academy Agents — Shared Config
   ------------------------------------------------------------
   ضع هنا:
   - GOOGLE_CLIENT_ID: من Google Cloud Console
   - API_URL: رابط Apps Script Web App
   ============================================================ */

window.HERO_CONFIG = {
  // ⚙️ الإعدادات
  GOOGLE_CLIENT_ID: "ضع-Client-ID-هنا.apps.googleusercontent.com",
  API_URL: "ضع-رابط-Apps-Script-هنا/exec",

  // 🕐 الجلسة
  SESSION_DAYS: 30,           // صلاحية الجلسة (يوم)
  SYNC_TTL_MS: 60 * 60 * 1000, // تحديث صامت كل ساعة
  HEARTBEAT_MS: 24 * 60 * 60 * 1000, // فحص الحالة كل يوم

  // 🔑 مفاتيح التخزين المحلي
  LS_AGENT_KEY: "hero_agent_v1",
  LS_ADMIN_KEY: "hero_admin_v1",
  LS_SUBAGENTS_KEY: "hero_subagents_v1",

  // 📌 ثوابت
  APP_VERSION: "1.0.0",
  BRAND: "Hero Academy",
  SUPPORT_EMAIL: "info@hero1.vip"
};
