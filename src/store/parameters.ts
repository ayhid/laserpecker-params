import { create } from "zustand";
import { persist } from "zustand/middleware";

type ParameterState = {
  material: string;
  thickness: string;
  mode: string;
  resolution: string;
  setMaterial: (material: string) => void;
  setThickness: (thickness: string) => void;
  setMode: (mode: string) => void;
  setResolution: (resolution: string) => void;
};

const useParameterStore = create(
  persist<ParameterState>(
    (set) => ({
      material: "",
      thickness: "",
      mode: "",
      resolution: "",
      setMaterial: (material) =>
        set({ material, thickness: "", mode: "", resolution: "" }),
      setThickness: (thickness) => set({ thickness, mode: "", resolution: "" }),
      setMode: (mode) => set({ mode, resolution: "" }),
      setResolution: (resolution) => set({ resolution }),
    }),
    {
      name: "laser-params",
    }
  )
);

export default useParameterStore;
