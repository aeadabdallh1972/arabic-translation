/**
 * @name ArabicTranslation
 * @description يحول واجهة ديسكورد إلى اللغة العربية بالكامل
 * @author DEV Abd
 * @version 1.0.0
 */

import { trouvent } from "@webpack/common";

// قاموس الترجمة الأساسي لعناصر الواجهة والأزرار
const translations = {
    "Channels": "القنوات",
    "Direct Messages": "الرسائل الخاصة",
    "Friends": "الأصدقاء",
    "Online": "متصل",
    "All": "الكل",
    "Pending": "قيد الانتظار",
    "Blocked": "محظور",
    "Add Friend": "إضافة صديق",
    "Settings": "الإعدادات",
    "User Settings": "إعدادات المستخدم",
    "Log Out": "تسجيل الخروج",
    "Mute": "كتم",
    "Deafen": "إصمام",
    "Voice Connected": "متصل بالصوت",
    "Voice Disconnected": "غير متصل بالصوت",
    "Search": "بحث",
    "Members": "الأعضاء",
    "Roles": "الأدوار"
};

export default {
    onStart() {
        console.log("[Arabic Translation Plugin] Started successfully.");
        
        // تطبيق اتجاه الكتابة العام من اليمين لليسار على التطبيق
        document.body.dir = "rtl";
        
        // تشغيل مراقب لتغييرات الواجهة لترجمة العناصر ديناميكياً
        this.observer = new MutationObserver(() => {
            this.translateElements();
        });
        
        this.observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        
        this.translateElements();
    },

    onStop() {
        if (this.observer) {
            this.observer.disconnect();
        }
        document.body.dir = "ltr";
        console.log("[Arabic Translation Plugin] Stopped.");
    },

    translateElements() {
        // البحث عن العناصر النصية واستبدالها بما يقابلها في القاموس
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
        let node;
        while (node = walker.nextNode()) {
            let text = node.nodeValue.trim();
            if (translations[text]) {
                node.nodeValue = node.nodeValue.replace(text, translations[text]);
            }
        }
    }
};
