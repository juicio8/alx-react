import { getAllNotificationsByUser, normalizedData } from "./notifications";
import notificationsData from "../../../../notifications.json" with { type: "json" };

describe("schema-notifications", () => {
  const content = [
    {
      guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
      isRead: true,
      type: "urgent",
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
      isRead: false,
      type: "urgent",
      value:
        "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed",
    },
  ];

  test("the id 5debd764a7c57c7839d722e9 and verifies that the following data is returned", () => {
    const notifications = getAllNotificationsByUser("5debd764a7c57c7839d722e9");
    expect(notifications).toEqual(expect.arrayContaining(content));
    expect(notifications).toHaveLength(2);
  });
  test("normalized data has a correct result array.", () => {
    expect(normalizedData.result).toEqual(
      expect.arrayContaining(notificationsData.map((x) => x.id))
    );
  });
  test("Test to access the user with the id 5debd764a7c57c7839d722e9", () => {
    const user = {
      age: 25,
      email: "poole.sanders@holberton.nz",
      id: "5debd764a7c57c7839d722e9",
      name: { first: "Poole", last: "Sanders" },
      picture: "http://placehold.it/32x32",
    };
    expect(normalizedData.entities.users["5debd764a7c57c7839d722e9"]).toEqual(user)
    ;
  });
  test("access the message with the guid efb6c485-00f7-4fdf-97cc-5e12d14d6c41", () => {
    const message = {
      guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
      isRead: false,
      type: "default",
      value: "Cursus risus at ultrices mi.",
    };
    expect(
      normalizedData.entities.messages["efb6c485-00f7-4fdf-97cc-5e12d14d6c41"]
    ).toEqual(message);
  });
  test("access the notification with the id 5debd7642e815cd350407777", () => {
    const notification = {
      author: "5debd764f8452ef92346c772",
      context: "3068c575-d619-40af-bf12-dece1ee18dd3",
      id: "5debd7642e815cd350407777",
    };
    expect(
      normalizedData.entities.notifications["5debd7642e815cd350407777"]
    ).toEqual(notification);
  });
});
