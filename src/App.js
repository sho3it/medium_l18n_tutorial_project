import React, { useState } from "react";
import { IntlProvider } from "react-intl";

import FirstComponent from "./first-component";

import "./App.css";

import translationsDE from "./translationsDE.json";
import translationsEN from "./translationsEN.json";

function App() {
  const [locale, setLocale] = useState("de");

  return (
    <IntlProvider
      locale={locale}
      messages={locale === "en" ? translationsEN : translationsDE}
      textComponent='span'
    >
      <FirstComponent locale={e => setLocale(e)} />
    </IntlProvider>
  );
}

export default App;
