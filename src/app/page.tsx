'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import MaterialSelector from '@/components/MaterialSelector';
import ParameterDisplay from '@/components/ParameterDisplay';
import ResolutionPicker from '@/components/ResolutionPicker';
import { Separator } from '@/components/ui/separator';
import { materials } from '@/data/materials';
import useParameterStore from '@/store/parameters';

const ThicknessSelector = ({
  thicknesses,
  selectedThickness,
  onSelect
}: {
  thicknesses: number[],
  selectedThickness: string,
  onSelect: (thickness: string) => void
}) => (
  <div className="flex flex-col gap-2">
    {thicknesses.map((t) => (
      <Button
        key={t}
        variant={selectedThickness === t.toString() ? "default" : "outline"}
        onClick={() => onSelect(t.toString())}
      >
        {t}mm
      </Button>
    ))}
  </div>
);

const ModeSelector = ({
  modes,
  selectedMode,
  onSelect
}: {
  modes: object,
  selectedMode: string,
  onSelect: (mode: string) => void
}) => (
  <div className="flex flex-col gap-2">
    {Object.keys(modes).map((m) => (
      <Button
        key={m}
        variant={selectedMode === m ? "default" : "outline"}
        onClick={() => onSelect(m)}
      >
        {m}
      </Button>
    ))}
  </div>
);

const ParameterCard = ({
  title,
  children
}: {
  title: string,
  children: React.ReactNode
}) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      {children}
    </CardContent>
  </Card>
);

const Page = () => {
  const {
    material,
    thickness,
    mode,
    resolution,
    setMaterial,
    setThickness,
    setMode,
    setResolution
  } = useParameterStore();

  const selectedMaterial = material ? materials[material] : null;

  const getParameters = () => {
    if (!selectedMaterial || !thickness || !mode || !resolution) return null;
    return selectedMaterial.modes[mode]?.[thickness]?.resolutions[resolution];
  };

  const parameters = getParameters();

  return (
    <main className="container mx-auto py-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <ParameterCard title="Material">
          <MaterialSelector
            selectedMaterial={material}
            onSelect={setMaterial}
          />
        </ParameterCard>

        {selectedMaterial && (
          <ParameterCard title="Thickness">
            <ThicknessSelector
              thicknesses={selectedMaterial.thicknesses}
              selectedThickness={thickness}
              onSelect={setThickness}
            />
          </ParameterCard>
        )}

        {thickness && selectedMaterial?.modes && (
          <ParameterCard title="Mode">
            <ModeSelector
              modes={selectedMaterial.modes}
              selectedMode={mode}
              onSelect={setMode}
            />
          </ParameterCard>
        )}

        {mode && selectedMaterial?.modes[mode]?.[thickness]?.resolutions && (
          <ParameterCard title="Resolution">
            <ResolutionPicker
              resolutions={Object.keys(selectedMaterial.modes[mode][thickness].resolutions)}
              selectedResolution={resolution}
              onSelect={setResolution}
            />
          </ParameterCard>
        )}
      </div>

      {parameters && (
        <>
          <Separator />
          <section>
            <h2 className="text-2xl font-bold mb-4">Recommended Parameters</h2>
            <ParameterDisplay parameters={parameters} />
          </section>
        </>
      )}
    </main>
  );
};

export default Page;
