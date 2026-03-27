import { UserEvents } from "./userEvents.mjs";
const userEvent = new UserEvents();

function saveToDatabase() {
  console.log("Saveing post to database");
}
function sendNotifications() {
  console.log("Sending Notifications");
}
function updateTimeline() {
  console.log("Updateing the Timeline");
}
// Beginner's approach
userEvent.addListener("postCreated", saveToDatabase);
userEvent.addListener("postCreated", sendNotifications);
userEvent.addListener("postCreated", updateTimeline);

// Production Way apporoach
// const events = {
//   postCreated: [saveToDatabase, sendNotifications, updateTimeline],
// };

// events.postCreated.forEach((fn) => userEvent.on("postCreated", fn));

userEvent.createPost("This is my first post");
