import { 
  Divider,
  Input,
  RadioGroup,
  Radio,
  Checkbox,
  CheckboxGroup,
  Textarea,
  Chip
} from "@heroui/react";

const clinicalInvestigations = [
  "S.PSA", "DRE", "Biopsy", "Chest X-ray", "USG Abdomen", "Pelvic CT", "Pelvic MRI", "Bone Scan", "CT Chest", "CT Abdomen", "Whole Body MRI"
];

export default function StagingSection() {
  return (
    <div className="space-y-10 pb-12">
      <div className="flex flex-col items-center text-center px-4 mb-8">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 leading-tight">
          Staging & Investigations
        </h2>
        <p className="text-default-500 text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] mt-2 opacity-70">
          Clinical staging using TNM/White systems and summary of diagnostic investigations.
        </p>
      </div>

      <div className="space-y-10">
        {/* Symptoms */}
        <div className="space-y-8">
           <Textarea 
              label="Presenting Symptoms" 
              placeholder="List major clinical symptoms at presentation..."
              variant="bordered"
              labelPlacement="outside"
              minRows={3}
              className="font-bold"
              classNames={{
                inputWrapper: "rounded-xl sm:rounded-2xl bg-content1 border-divider transition-all hover:border-primary",
                label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
              }}
           />
        </div>

        <Divider className="opacity-20" />

        {/* Staging Logic */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          <div className="p-4 sm:p-8 rounded-2xl sm:rounded-[2.5rem] bg-content1 border border-divider/50">
            <RadioGroup 
              label="Staging System" 
              defaultValue="tnm"
              classNames={{
                label: "text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8"
              }}
            >
              <div className="space-y-6">
                <Radio value="tnm" color="primary" classNames={{ label: "font-black text-md" }}>TNM Staging</Radio>
                <Radio value="white" color="primary" classNames={{ label: "font-black text-md" }}>White System</Radio>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-10">
            <Input 
              label="TNM Stage Value" 
              placeholder="e.g. T2cN0M0"
              variant="bordered"
              labelPlacement="outside"
              className="font-bold"
              classNames={{
                inputWrapper: "h-16 rounded-xl sm:rounded-2xl bg-content1 border-divider sm:text-2xl font-mono",
                label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
              }}
            />
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-content1 border border-divider/50">
              <RadioGroup 
                label="Staging Done At" 
                defaultValue="ri"
                orientation="horizontal"
                classNames={{
                  label: "text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6"
                }}
              >
                <div className="flex flex-wrap flex-wrap gap-4 sm:gap-8">
                  <Radio value="ri" color="primary" classNames={{ label: "text-xs font-bold" }}>Reporting Inst. (RI)</Radio>
                  <Radio value="prev" color="primary" classNames={{ label: "text-xs font-bold" }}>Outside Institution</Radio>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <Divider className="opacity-20" />

        {/* Investigations */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary whitespace-nowrap">Investigations Summary</h3>
            <Chip variant="flat" color="primary" size="sm" className="font-black px-4 bg-content1">GRID SELECTION</Chip>
          </div>
          <CheckboxGroup 
            orientation="horizontal"
            className="gap-4"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {clinicalInvestigations.map((item) => (
                <div key={item} className="bg-content1 border border-divider/50 p-4 rounded-xl hover:border-primary transition-all group">
                  <Checkbox value={item.toLowerCase()} color="primary" classNames={{ label: "text-xs font-black group-hover:text-primary transition-colors" }}>
                    {item}
                  </Checkbox>
                </div>
              ))}
            </div>
          </CheckboxGroup>
        </div>

        {/* Final Assessment */}
        <div className="p-4 sm:p-8 rounded-2xl sm:rounded-[3rem] border-2 border-dashed border-divider bg-content1/50 flex flex-col gap-8">
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-default-400 text-center">Final Clinical Staging Assessment</h3>
          <RadioGroup 
            defaultValue="one" 
            orientation="horizontal"
            classNames={{
              wrapper: "justify-center flex-wrap gap-4 sm:gap-12"
            }}
          >
            <Radio value="one" color="primary" classNames={{ label: "text-xs font-bold" }}>One Consultant</Radio>
            <Radio value="two" color="primary" classNames={{ label: "text-xs font-bold" }}>Two Consultants</Radio>
            <Radio value="board" color="primary" classNames={{ label: "font-black text-primary sm:scale-110 text-xs" }}>Tumor Board</Radio>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}
