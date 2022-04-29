import {
  BannerContainer,
  Logo,
  LogoContainer,
  BannerBox,
  CompanySpan,
} from "./banner.styles";

const Banner = () => {
  return (
    <>
      <BannerContainer>
        <BannerBox />

        <CompanySpan>Companies I've worked with</CompanySpan>
        <LogoContainer>
          <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1206px-Amazon_logo.svg.png" />
          <Logo src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" />
          <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/1054px-PayPal_logo.svg.png?20170220144729" />
          <Logo src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Trustpilot_logo.png" />
          <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Viacom_blue_logo.svg/2560px-Viacom_blue_logo.svg.png" />
        </LogoContainer>
      </BannerContainer>
    </>
  );
};

export default Banner;
