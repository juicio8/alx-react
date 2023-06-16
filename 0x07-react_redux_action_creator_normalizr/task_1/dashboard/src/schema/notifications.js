// import notificationsData from "../../../../notifications.json";
import notificationsData from "../../../../notifications.json" assert { type: "json" };
import { schema, normalize } from "normalizr";

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

export const normalizedData = normalize(notificationsData, [notification]);
// console.log(normalizedData.entities);

// console.log(normalizedData.entities.users["5debd764a7c57c7839d722e9"]);

export function getAllNotificationsByUser(userId) {
  return Object.values(notificationsData)
    .filter((x) => x.author.id === userId)
    .map((x) => x.context);
  // .filter((n) => n.author.id === userId)
}
// console.log(getAllNotificationsByUser("5debd764a7c57c7839d722e9"));
