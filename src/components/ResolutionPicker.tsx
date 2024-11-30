import { Button } from '@/components/ui/button';

type ResolutionPickerProps = {
  resolutions: string[];
  selectedResolution: string;
  onSelect: (resolution: string) => void;
};

const ResolutionPicker = ({ resolutions, selectedResolution, onSelect }: ResolutionPickerProps) => (
  <div className="flex flex-wrap gap-2">
    {resolutions.map((resolution) => (
      <Button
        key={resolution}
        variant={selectedResolution === resolution ? "default" : "outline"}
        onClick={() => onSelect(resolution)}
      >
        {resolution}
      </Button>
    ))}
  </div>
);

export default ResolutionPicker;
