import React from 'react';
import './Footer.css';
import { useTranslation } from "react-i18next";


const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-logo">
        <p>{t("footer.title")}</p>
      </div>

      <div className="footer-content">
        <p></p>
        <p></p>
      </div>
    </footer>
  );
};

export default Footer;
