export type Parameter = {
  power: number;
  depth: number;
};

export type ParameterState = {
  material: string;
  thickness: string;
  mode: string;
  resolution: string;
  setMaterial: (material: string) => void;
  setThickness: (thickness: string) => void;
  setMode: (mode: string) => void;
  setResolution: (resolution: string) => void;
};
