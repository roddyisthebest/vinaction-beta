import {
  Routes,
  Route,
  Outlet,
  useParams,
  BrowserRouter,
} from "react-router-dom";

import { useEffect, useState } from "react";

import Router from "./components/Router";

function App() {
  return <Router></Router>;
}

// function Invoices() {
//   useEffect(() => {
//     console.log("imRender! Invoices1");
//   }, []);
//   console.log("imRender! Invoices2");

//   return (
//     <div>
//       <h1>Invoices</h1>
//       <Outlet />
//     </div>
//   );
// }

// function Invoice() {
//   let { invoiceId } = useParams();

//   const [fuck, setFuck] = useState("shit");
//   useEffect(() => {
//     console.log("imRender! Invoice");
//   }, []);
//   console.log("imRender! Invoice");

//   const setting = () => {
//     setFuck("fuckthat shit");
//   };

//   return (
//     <>
//       <h1>
//         Invoice {invoiceId} / {fuck}
//       </h1>
//       <button onClick={setting}>changefuck</button>
//     </>
//   );
// }

// function SentInvoices() {
//   return <h1>Sent Invoices</h1>;
// }

export default App;
