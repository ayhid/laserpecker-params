import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { materials } from '@/data/materials.json';
import { useState } from 'react';

type MaterialSelectorProps = {
  selectedMaterial: string;
  onSelect: (material: string) => void;
};

const MaterialSelector = ({ selectedMaterial, onSelect }: MaterialSelectorProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMaterials = Object.entries(materials).filter(([key, value]) =>
    value.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        <Input
          placeholder="Search materials..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        {filteredMaterials.map(([key, value]) => (
          <Button
            key={key}
            variant={selectedMaterial === key ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => onSelect(key)}
          >
            {value.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MaterialSelector;
