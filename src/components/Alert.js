import React from "react";

export default function Alert({ alert }) {
  return (
    <div>
      {alert && (
        <div className={`alert alert-${alert.type}`} role="alert">
          {alert.msg}
        </div>
      )}
    </div>
  );
}
