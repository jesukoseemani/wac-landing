import { create } from "zustand";

import createGeneralSlice, { CreateGeneralSliceType } from "./general";

// Note: this introduces a circular dependency.
export type StoreType = CreateGeneralSliceType;

const useStore = create<StoreType>()((...a) => ({
  ...createGeneralSlice(...a),
}));

export default useStore;
