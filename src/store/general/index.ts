import { StateCreator } from "zustand";

import { StoreType } from "../index";

export interface CreateGeneralSliceType {
  auth: boolean;
  setAuth: (arg: boolean) => void;
  openHamburger: boolean;
  setOpenHamburger: (arg: boolean) => void;
}

const createGeneralSlice: StateCreator<StoreType, [], [], CreateGeneralSliceType> = (
  set
  // get,
) => ({
  auth: false,
  setAuth: (arg: boolean) => {
    set(() => ({ auth: arg }));
  },
  openHamburger: false,
  setOpenHamburger: (arg: boolean) => {
    set(() => ({ openHamburger: arg }));
  },
});

export default createGeneralSlice;
