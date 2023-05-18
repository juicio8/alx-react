// import close_icon from "./close-icon.svg";
// import { getLatestNotification } from "./utils";
// export default function Notifications() {
//   return (
//     <div className="Notifications">
//       <p>Here is the list of notifications</p>
//       <ul>
//         <li data-priority="default">New course available</li>
//         <li data-priority="urgent">New resume available</li>
//         <li
//           data-priority="urgent"
//           dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
//         ></li>
//       </ul>
//       <button
//         aria-label="Close"
//         style={{
//           position: "absolute",
//           right: 10,
//           top: 10,
//           background: "transparent",
//           border: "none",
//         }}
//         onClick={() => console.log("Close button has been Clicked")}
//       >
//         <img src={close_icon} alt="close-icon" width="20px" />
//       </button>
//     </div>
//   );
// }
