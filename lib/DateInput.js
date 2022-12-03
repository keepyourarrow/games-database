import { useTranslation } from "next-i18next";

import DatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = (props) => {
  const { i18n } = useTranslation("common");

  let locale = "en";
  if (i18n.language == "ru") {
    locale = "ru";
    registerLocale("ru", ru);
  }

  return <DatePicker locale={locale} {...props} />;
};

export default DateInput;
