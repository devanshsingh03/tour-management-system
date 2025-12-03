// // import { Navigate } from "react-router-dom";

// // export default function AdminProtected({ children }) {
// //   const role = localStorage.getItem("role");
// //   const token = localStorage.getItem("token");

// //   if (!token || role !== "admin") {
// //     return <Navigate to="/admin/login" replace />;
// //   }

// //   return children;
// // }



// import React from "react";
// import { Navigate } from "react-router-dom";

// export default function AdminProtected({ children }) {
//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role");

//   // Temporary loading screen to avoid flashing
//   const [checking, setChecking] = React.useState(true);

//   React.useEffect(() => {
//     // Mimic async check to avoid redirect before token loads
//     setTimeout(() => {
//       setChecking(false);
//     }, 50);
//   }, []);

//   if (checking) return null; // prevents flashing

//   // If no token or role is not admin → block access
//   if (!token || role !== "admin") {
//     return <Navigate to="/admin/login" replace />;
//   }

//   return children;
// }



// src/components/AdminProtected.jsx
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function AdminProtected({ children }) {
//   const navigate = useNavigate();
//   const [checked, setChecked] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const role = localStorage.getItem("role");

//     // Delay check (PREVENT immediate unmount)
//     if (!token || role !== "admin") {
//       navigate("/admin/login");
//     } else {
//       setChecked(true);
//     }
//   }, []);

//   // Prevent component from disappearing
//   if (!checked) {
//     return null; // or a loader
//   }

//   return <>{children}</>;
// }

// src/components/AdminProtected.jsx
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function AdminProtected({ children }) {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    // Delay to allow React to load localStorage properly
    setTimeout(() => {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");

      if (token && role === "admin") {
        setAllowed(true);
      }

      setLoading(false);
    }, 150); // delay prevents premature redirect
  }, []);

  if (loading) return null; // you can return a loader here

  if (!allowed) return <Navigate to="/admin/login" replace />;

  return children;
}
