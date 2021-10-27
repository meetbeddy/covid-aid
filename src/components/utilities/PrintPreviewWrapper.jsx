import React from "react";

function PrintPreviewWrapper(props) {
  return (
    <div class="wrapper">
      <section class="invoice">{props.children}</section>
    </div>
  );
}

export default PrintPreviewWrapper;
