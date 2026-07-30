/**
 * @name ArabDiscordTranslation
 * @description تعريب واجهة ديسكورد ودعم الاتجاه من اليمين لليسار
 * @author arab discord
 * @version 1.0.0
 */

const translations = {
    // التنقل السفلي والقوائم الرئيسية
    "Messages": "الرسائل",
    "Servers": "السيرفرات",
    "You": "أنت",
    "Friends": "الأصدقاء",
    "Discovery": "اكتشاف",
    "Settings": "الإعدادات",
    "User Settings": "إعدادات المستخدم",
    "Nitro": "نيترو",
    "Shop": "المتجر",
    "Channels": "القنوات",
    "Members": "الأعضاء",
    "Online": "متصل",
    "Idle": "خامل",
    "Do Not Disturb": "الرجاء عدم الإزعاج",
    "Invisible": "غير متصل",
    "Offline": "غير متصل",
    "Search": "بحث",
    "Create Server": "إنشاء سيرفر",
    "Explore Public Servers": "استكشاف السيرفرات العامة"
};

export default {
    onLoad() {
        console.log("Arab Discord Translation Plugin Loaded Successfully!");
    },
    onStop() {
        console.log("Arab Discord Translation Plugin Stopped.");
    }
};
