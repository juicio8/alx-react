// import notificationsData from "../../../../notifications.json";
// import notificationsData from "../../../../notifications.json" assert { type: "json" };
import notificationsData from "../../../../notifications.json" with { type: "json" };

import { schema, normalize } from "normalizr";

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

export const normalizedData = normalize(notificationsData, [notification]);
// console.log(notificationsData);
console.log(normalizedData);

export function getAllNotificationsByUser(userId) {
  const { notifications, users, messages } = normalizedData.entities;

  const notificationsArray = Object.values(notifications);
  const userNotifications = notificationsArray.filter(
    (n) => n.author === userId
  );

  const notificationContexts = userNotifications.map(
    (n) => messages[n.context]
  );

  return notificationContexts;
}
console.log(getAllNotificationsByUser("5debd764a7c57c7839d722e9"));
