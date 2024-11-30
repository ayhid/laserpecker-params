import { Material, Modes, Resolutions, ThicknessConfig } from "@/types";

import { create } from "zustand";

const useParameterStore = create((set) => ({
  material: "",
  thickness: "",
  mode: "",
  resolution: "",
  setMaterial: (material: Material) =>
    set({ material, thickness: "", mode: "", resolution: "" }),
  setThickness: (thickness: ThicknessConfig) =>
    set({ thickness, mode: "", resolution: "" }),
  setMode: (mode: Modes) => set({ mode, resolution: "" }),
  setResolution: (resolution:Resolutions) => set({ resolution }),
}));

export default useParameterStore;
