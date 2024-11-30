// src/app/page.tsx
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import MaterialSelector from '@/components/MaterialSelector';
import ParameterDisplay from '@/components/ParameterDisplay';
import ResolutionPicker from '@/components/ResolutionPicker';
import { Separator } from '@/components/ui/separator';
import { materials } from '@/data/materials.json';
import useParameterStore from '@/store';

const Home = () => {
  const {
    material,
    thickness,
    mode,
    resolution,
    setMaterial,
    setThickness,
    setMode,
    setResolution
  } = useParameterStore():ParameterS;

  const selectedMaterial = material ? materials[material] : null;

  const getParameters = () => {
    if (!selectedMaterial || !thickness || !mode || !resolution) return null;
    return selectedMaterial.modes[mode][thickness].resolutions[resolution];
  };

  return (
    <main className="container mx-auto py-6 space-y-6">
      <h1 className="text-3xl font-bold">LaserPecker Parameters</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Material</CardTitle>
          </CardHeader>
          <CardContent>
            <MaterialSelector
              selectedMaterial={material}
              onSelect={setMaterial}
            />
          </CardContent>
        </Card>

        {material && (
          <Card>
            <CardHeader>
              <CardTitle>Thickness</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                {selectedMaterial.thicknesses.map((t) => (
                  <button
                    key={t}
                    className={`p-2 rounded ${thickness === t.toString() ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                      }`}
                    onClick={() => setThickness(t.toString())}
                  >
                    {t}mm
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {thickness && (
          <Card>
            <CardHeader>
              <CardTitle>Mode</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                {Object.keys(selectedMaterial.modes).map((m) => (
                  <button
                    key={m}
                    className={`p-2 rounded ${mode === m ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                      }`}
                    onClick={() => setMode(m)}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {mode && (
          <Card>
            <CardHeader>
              <CardTitle>Resolution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResolutionPicker
                resolutions={Object.keys(selectedMaterial.modes[mode][thickness].resolutions)}
                selectedResolution={resolution}
                onSelect={setResolution}
              />
            </CardContent>
          </Card>
        )}
      </div>

      {getParameters() && (
        <>
          <Separator />
          <section>
            <h2 className="text-2xl font-bold mb-4">Recommended Parameters</h2>
            <ParameterDisplay parameters={getParameters()} />
          </section>
        </>
      )}
    </main>
  );
};

export default Home;
