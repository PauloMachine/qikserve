import qikserve from "../../services/qikserve";
import type { IVenue } from "./venue.types";
import fallbackVenue from "src/tests/mocks/mock-venue.json";

export const getVenue = async (id: number): Promise<IVenue> => {
  try {
    const response = await qikserve.get<IVenue>(`/challenge/venue/${id}`);
    return response.data || {};
  } catch (error) {
    console.error("Error get venue:", error);
    // CORS Error
    return fallbackVenue as IVenue;
  }
};
