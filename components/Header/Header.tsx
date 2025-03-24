import HeaderTop from "./HeaderTop";
import HeaderTopBar from "./HeaderTopBar";
import HeaderMain from "./HeaderMain";
import DarkSwitch from "./dark-switch";
import { useAppContext } from "@/context/Context";

type HeaderType = {
  headerSticky: string;
  headerType?: any;
}

const Header = ({ headerSticky }: HeaderType) => {

  const { isLightTheme, toggleTheme } = useAppContext();

  return (
    <>
      <DarkSwitch isLight={isLightTheme} switchTheme={toggleTheme} />
      <header className="rbt-header rbt-header-10">
        {/* <HeaderTopBar /> */}
        <HeaderTop 
          bgColor="bg-not-transparent bg-color-darker"
          gapSpaceBetween="header-space-betwween"
          container="container-fluid"
          flexDirection=""
          btnClass="rbt-switch-btn btn-gradient btn-xs"
          btnText="Call us now"
        />
        <HeaderMain 
          headerSticky={headerSticky}
          sticky="header-sticky"
          container="container-fluid"
          gapSpaceBetween="header-space-betwween"
          navigationEnd="rbt-navigation-start"
        />
      </header>
    </>
  )
}

export default Header
