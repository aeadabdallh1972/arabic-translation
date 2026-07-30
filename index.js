/**
 * @name ArabDiscordTranslation
 * @description تعريب واجهة ديسكورد بالكامل ودعم الاتجاه من اليمين لليسار
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
    "Log Out": "تسجيل الخروج",
    
    // الأصدقاء والحالة
    "Online": "متصل",
    "Idle": "خامل",
    "Do Not Disturb": "عدم الإزعاج",
    "Invisible": "غير متصل",
    "All": "الكل",
    "Pending": "قيد الانتظار",
    "Blocked": "محظور",
    "Add Friend": "إضافة صديق",
    "Search": "بحث",
    
    // الصوت والاتصال
    "Voice Connected": "متصل بالصوت",
    "Voice Disconnected": "غير متصل بالصوت",
    "Mute": "كتم",
    "Deafen": "إصمام",
    "Disconnect": "قطع الاتصال",
    "Video": "فيديو",
    "Share Your Screen": "مشاركة الشاشة",
    
    // الخصائص العامة
    "Channels": "القنوات",
    "Members": "الأعضاء",
    "Roles": "الأدوار",
    "Pinned Messages": "الرسائل المثبتة",
    "Inbox": "صندوق الوارد",
    "Mentions": "الإشارات"
};

export default {
    onStart() {
        console.log("[Arab Discord] Arabic translation plugin started.");
        
        // تحويل اتجاه التطبيق إلى اليمين
        document.body.dir = "rtl";
        
        this.observer = new MutationObserver(() => {
            this.translateTree(document.body);
        });

        this.observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        this.translateTree(document.body);
    },

    onStop() {
        if (this.observer) {
            this.observer.disconnect();
        }
        document.body.dir = "ltr";
        console.log("[Arab Discord] Arabic translation plugin stopped.");
    },

    translateTree(node) {
        const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);
        let textNode;
        while (textNode = walker.nextNode()) {
            let text = textNode.nodeValue.trim();
            if (translations[text]) {
                textNode.nodeValue = textNode.nodeValue.replace(text, translations[text]);
            }
        }
    }
};
