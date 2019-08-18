import React from "react";
import { FormattedMessage } from "react-intl";

import "./App.css";

function SecondComponent() {
  return (
    <div>
      <FormattedMessage id='firstComponent.header' />
      <FormattedMessage id='firstComponent.text' />
      <FormattedMessage id='firstComponent.footer' />
    </div>
  );
}

export default SecondComponent;
