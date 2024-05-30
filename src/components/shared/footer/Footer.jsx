import FooterLinks from "./FooterLinks";
import FooterSocialLink from "./FooterSocialLink";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[url('/assets/images/footer-bg.png')] bg-no-repeat bg-center section-padding">
        <FooterLinks />
      </div>
      <FooterSocialLink />
    </footer>
  );
};

export default Footer;
