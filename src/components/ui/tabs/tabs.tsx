import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import type { TTab, TTabs } from "./tabs.types";
import {
  StyledFlex,
  StyledTypography,
  KebabMenu,
  KebabItem,
  KebabIconWrapper,
} from "./tabs.styles";
import { IoMenu } from "react-icons/io5";

const Tabs = ({ tabs, isMobile }: TTabs & { isMobile: boolean }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const tabActive = tabs.find(
    (tab: TTab) => `/${tab.route}` === location.pathname
  );

  return isMobile ? (
    <StyledFlex isMobile>
      <StyledTypography>{tabActive?.name}</StyledTypography>
      <KebabIconWrapper onClick={() => setIsOpen((prev) => !prev)}>
        <IoMenu size={24} color="#FFF" />
      </KebabIconWrapper>
      {isOpen && (
        <KebabMenu>
          {tabs.map((tab: TTab, index: number) => (
            <KebabItem
              key={index}
              route={String(location.pathname.includes(`/${tab.route}`))}
              onClick={() => {
                setIsOpen(false);
                navigate(`/${tab.route}`);
              }}
            >
              {tab.name}
            </KebabItem>
          ))}
        </KebabMenu>
      )}
    </StyledFlex>
  ) : (
    <>
      {tabs.map((tab: TTab, index: number) => (
        <StyledFlex
          key={index}
          onClick={() => navigate(`/${tab.route}`)}
          route={String(location.pathname.includes(`/${tab.route}`))}
        >
          <StyledTypography>{tab.name}</StyledTypography>
        </StyledFlex>
      ))}
    </>
  );
};

export default Tabs;
