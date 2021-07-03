import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
	en: {
		translation: {
			"AdminBarLogoText":"Adarp CRM"
		}
	},
	tw: {
		translation: {
			"Actions":"功能",
			"Add New Order":"新增訂單",
			"Admin Note":"管理員備註",
			"AdminBarLogoText":"愛達商務系統",
			"Back To List":"回上頁",
			"Cancelled Date":"取消日期",
			"Cancelled Order":"取消訂單",
			"Choose Status":"選擇狀態",
			"Closed Date":"完成日期",
			"Closed Order":"完成訂單",
			"Create New":"新增",
			"Create New Sale Event":"新增銷售活動",
			"Creation Date":"建立日期",
			"Customer":"客戶",
			"Edit":"更改",
			"Edit Order":"更改訂單",
			"Item Name":"產品名稱",
			"Line Name":"Line名稱",
			"New Order":"新訂單",
			"Order":"訂單",
			"Quantity":"數量",
			"Returned Date":"退貨日期",
			"Returned Order":"退貨訂單",
			"Shipped Date":"寄出日期",
			"Shipped Order":"已寄出",
			"Status":"狀態",
			"Unit Price":"單價",
			"Unknown":"錯誤",
			"User Note":"使用者備註"
		}
	}
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: "tw",

		keySeparator: false, // we do not use keys in form messages.welcome

		interpolation: {
			escapeValue: false // react already safes from xss
		}
	});

export default i18n;