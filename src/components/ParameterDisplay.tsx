import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Parameter = {
  power: number;
  depth: number;
};

type ParameterDisplayProps = {
  parameters: {
    fill?: Parameter;
    picture?: Parameter;
    lineEngraving?: Parameter;
    lineCutting?: Parameter;
  };
};

const ParameterDisplay = ({ parameters }: ParameterDisplayProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {Object.entries(parameters).map(([type, values]) => (
      <Card key={type}>
        <CardHeader>
          <CardTitle className="text-sm capitalize">
            {type.replace(/([A-Z])/g, ' $1').trim()}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="space-y-2">
            <div>
              <dt className="text-sm font-medium text-gray-500">Power</dt>
              <dd className="text-2xl font-bold">{values.power}%</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Depth</dt>
              <dd className="text-2xl font-bold">{values.depth}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default ParameterDisplay;
