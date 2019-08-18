import React, { useCallback } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import "./App.css";

function FirstComponent({ locale }) {
  const intl = useIntl();
  console.log(intl.locale);
  return (
    <React.Fragment>
      <div className='content'>
        <FormattedMessage id='firstComponent.header' />
        <FormattedMessage id='firstComponent.text' />
        <FormattedMessage id='firstComponent.footer' />
      </div>
      <span
        onClick={useCallback(() => {
          locale("de");
        }, [locale])}
      >
        DE
      </span>
      {" / "}
      <span
        onClick={useCallback(() => {
          locale("en");
        }, [locale])}
      >
        EN
      </span>
    </React.Fragment>
  );
}

export default FirstComponent;
