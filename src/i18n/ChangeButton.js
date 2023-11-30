import { Button, useTheme } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  const theme = useTheme();

  const changeLanguage = () => {
    const currentLanguage = i18n.language;
    theme.direction = i18n.dir();
    document.body.dir = i18n.dir();

    if (currentLanguage === "en") {
      i18n.changeLanguage("fa", (err, t) => {
        document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
        if (err) return console.error(err);
      });
    } else {
      i18n.changeLanguage("en", (err, t) => {
        document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
        if (err) return console.error(err);
      });
    }
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        style={{ margin: "10px" }}
        onClick={changeLanguage}
      >
        <span>{i18n.language.toUpperCase()}</span>
      </Button>
    </>
  );
};

export default ChangeLanguage;
