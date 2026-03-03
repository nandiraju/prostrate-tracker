import { 
  Input, 
  Divider,
  Checkbox,
  CheckboxGroup,
  RadioGroup,
  Radio,
  Chip
} from "@heroui/react";

const diagnosisBasis = [
  "Clinical", "PSA", "DRE", "Biopsy", "Radiological", "Unknown", "Others"
];

const gleasonScores = [
  "3+3=6", "3+4=7", "4+3=7", "4+4=8", "3+5=8", "4+5=9", "5+4=9", "5+5=10"
];

export default function DemographicsSection() {
  return (
    <div className="space-y-10 pb-12">
      <div className="flex flex-col items-center text-center px-4 mb-8">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 leading-tight">
          Demographics & Initial Diagnosis
        </h2>
        <p className="text-default-500 text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] mt-2 opacity-70">
          Patient demographic data and clinical basis for the initial diagnosis.
        </p>
      </div>

      <div className="space-y-10">
        {/* Age/DOB/Sex Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-wrap gap-4 sm:gap-8">
          <Input 
            type="number"
            label="Age" 
            placeholder="Years"
            variant="bordered"
            labelPlacement="outside"
            className="font-bold"
            classNames={{
              inputWrapper: "h-14 rounded-xl sm:rounded-2xl bg-content1 border-divider transition-all hover:border-primary shadow-none",
              label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
            }}
          />
          <Input 
            type="date"
            label="Date of Birth" 
            variant="bordered"
            labelPlacement="outside"
            className="font-bold"
            classNames={{
              inputWrapper: "h-14 rounded-xl sm:rounded-2xl bg-content1 border-divider",
              label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
            }}
          />
          <Input 
            label="Sex" 
            placeholder="Male"
            defaultValue="Male"
            isReadOnly
            variant="flat"
            labelPlacement="outside"
            className="font-bold"
            classNames={{
              inputWrapper: "h-14 rounded-xl sm:rounded-2xl bg-content1 border border-divider/30",
              label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
            }}
          />
        </div>

        <Divider className="opacity-20" />

        {/* Basis of Diagnosis */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-2">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary whitespace-nowrap">Basis of Diagnosis</h3>
            <Divider className="flex-1 opacity-20" />
          </div>
          <CheckboxGroup 
            orientation="horizontal"
            className="gap-6"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
              {diagnosisBasis.map((item) => (
                <div key={item} className="bg-content1 border border-divider/50 p-4 rounded-xl hover:bg-content2/40 transition-colors">
                  <Checkbox value={item.toLowerCase()} color="primary" classNames={{ label: "text-sm font-semibold" }}>
                    {item}
                  </Checkbox>
                </div>
              ))}
            </div>
          </CheckboxGroup>
        </div>

        {/* Diagnosis Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          <Input 
            type="date"
            label="Date of Diagnosis" 
            variant="bordered"
            labelPlacement="outside"
            className="font-bold"
            classNames={{
              inputWrapper: "h-14 rounded-xl sm:rounded-2xl bg-content1 border-divider",
              label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
            }}
          />
          <div className="grid grid-cols-2 gap-6">
            <Input 
              label="Primary Lobe" 
              placeholder="Left/Right"
              variant="flat"
              labelPlacement="outside"
              className="font-bold"
              classNames={{
                inputWrapper: "h-14 rounded-xl sm:rounded-2xl bg-content1 border border-divider/30",
                label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
              }}
            />
            <Input 
              label="Secondary Lobe" 
              placeholder="Optional"
              variant="flat"
              labelPlacement="outside"
              className="font-bold"
              classNames={{
                inputWrapper: "h-14 rounded-xl sm:rounded-2xl bg-content1 border border-divider/30",
                label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
              }}
            />
          </div>
        </div>

        {/* Laterality */}
        <div className="p-4 sm:p-6 rounded-2xl sm:rounded-[2.5rem] bg-gradient-to-br from-content1/80 to-background border border-divider/50">
          <RadioGroup 
            label="Laterality / Topography" 
            defaultValue="left"
            orientation="horizontal"
            classNames={{
              label: "text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6"
            }}
          >
            <div className="flex flex-wrap gap-8 sm:gap-10">
              <Radio value="left" color="primary">Left</Radio>
              <Radio value="right" color="primary">Right</Radio>
              <Radio value="bilateral" color="primary">Bilateral / Multi-focal</Radio>
            </div>
          </RadioGroup>
        </div>

        {/* Gleason Score */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-2">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary whitespace-nowrap">Gleason Score (Initial)</h3>
            <Divider className="flex-1 opacity-20" />
          </div>
          <div className="flex flex-wrap gap-3">
            {gleasonScores.map((score) => (
              <Chip 
                key={score}
                variant="flat" 
                color="primary"
                className="px-4 py-5 rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-all cursor-pointer bg-content1"
                classNames={{
                  content: "font-black text-xs sm:text-sm"
                }}
              >
                {score}
              </Chip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
