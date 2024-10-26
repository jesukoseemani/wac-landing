import { StateCreator } from "zustand";

import { StoreType } from "../index";

export interface CreateGeneralSliceType {
  auth: boolean;
  setAuth: (arg: boolean) => void;
  openHamburger: boolean;
  setOpenHamburger: (arg: boolean) => void;
  projectRoute: string[],
  setProjectRoute: (arg: string[]) => void;
}

const createGeneralSlice: StateCreator<StoreType, [], [], CreateGeneralSliceType> = (
  set
  // get,
) => ({
  auth: false,
  setAuth: (arg: boolean) => {
    set(() => ({ auth: arg }));
  },
  openHamburger: true,
  setOpenHamburger: (arg: boolean) => {
    set(() => ({ openHamburger: arg }));
  },
  projectRoute: ['ita', 'beer', 'symba'],
  setProjectRoute: (arg: string[]) => {
    set(() => ({ projectRoute: arg }));
  },
});

export default createGeneralSlice;
