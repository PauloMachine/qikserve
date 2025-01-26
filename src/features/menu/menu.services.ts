import qikserve from "../../services/qikserve";
import type { TMenu } from "./menu.types";
import fallbackMenu from "src/tests/mocks/mock-menu.json";

export const getMenu = async (): Promise<TMenu> => {
  try {
    const response = await qikserve.get<TMenu>(`/challenge/menu`);
    return response.data || {};
  } catch (error) {
    console.error("Error get menu:", error);
    // CORS Error
    return fallbackMenu as TMenu;
  }
};
