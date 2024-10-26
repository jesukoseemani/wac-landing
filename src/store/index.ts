import { create } from "zustand";

import createGeneralSlice, { CreateGeneralSliceType } from "./general";
import { persist, createJSONStorage } from "zustand/middleware";


// Note: this introduces a circular dependency.
export type StoreType = CreateGeneralSliceType;


const useStore = create<StoreType>()(
  persist(
    (...a) => ({
      ...createGeneralSlice(...a),
    }),
    {
      name: "app details",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        projectRoute: state.projectRoute,
      }),
    }
  )
);

export default useStore;
