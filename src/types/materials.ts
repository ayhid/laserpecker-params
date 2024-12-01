type Parameter = {
  power: number;
  depth: number;
};

type Resolution = {
  fill?: Parameter;
  picture?: Parameter;
  lineEngraving?: Parameter;
  lineCutting?: Parameter;
};

type Resolutions = {
  [key: string]: Resolution;
};

type ThicknessConfig = {
  resolutions: Resolutions;
};

type LaserMode = {
  [key: string]: ThicknessConfig; // For thickness values like "3", "6", "12"
};

type Modes = {
  [key: string]: LaserMode;
};
type Material = {
  label: string;
  thicknesses: number[];
  modes: Modes;
};

export type Materials = {
  [key: string]: Material; // For material keys like "basswood", "cherryWood", etc.
};
