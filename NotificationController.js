import { buildNotificationView } from "./NotificationView.js";

export default class NotificationController {
  constructor(notificationElement) {
    const message="";
    const tipo="";
    this.notificationElement = notificationElement;
    this.show(message, tipo);
  }


  show(message, tipo) {
    if(message!=""){
    const noticationTemplate = buildNotificationView(message, tipo);

    this.notificationElement.innerHTML = noticationTemplate;

    const closeButtonelement = this.notificationElement.querySelector("button");

    closeButtonelement.addEventListener("click", (event) => {
      this.notificationElement.innerHTML = "";
    });
    }
    
  }
}
