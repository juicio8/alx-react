// import notificationsData from "../../../../notifications.json";
import notificationsData from "../../../../notifications.json" with { type: "json" };

export default function getAllNotificationsByUser(userId) {
  return notificationsData
    .filter((n) => n.author.id === userId)
    .map((c) => c.context);
}
console.log(getAllNotificationsByUser("5debd764a7c57c7839d722e9"));
