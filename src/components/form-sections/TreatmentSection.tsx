import { 
  Divider,
  Input,
  RadioGroup,
  Radio,
  Checkbox,
  CheckboxGroup,
  Chip
} from "@heroui/react";

const treatmentTypes = [
  "Surgery", "RT", "Chemotherapy", "Hormonal", "Immunotherapy", "Others"
];

const htDrugs = [
  "Abiraterone", "Enzalutamide", "Apalutamide", "Darolutamide", "Others"
];

const postHrpcMedications = [
  "DES", "Ketoconazole", "Steroids", "Abiraterone (Post-HRPC)", "Enzalutamide (Post-HRPC)", "Others"
];

export default function TreatmentSection() {
  return (
    <div className="space-y-10 pb-12">
      <div className="flex flex-col items-center text-center px-4 mb-8">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 leading-tight">
          Cancer Directed Treatment (CDT)
        </h2>
        <p className="text-default-500 text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] mt-2 opacity-70">
          Current treatment intention and multidisciplinary team planning.
        </p>
      </div>

      <div className="space-y-10">
        {/* Intention to Treat */}
        <div className="p-4 sm:p-8 rounded-2xl sm:rounded-[3rem] bg-primary/5 border border-primary/20 flex flex-col items-center gap-8">
          <div className="flex items-center gap-3 w-full">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary whitespace-nowrap">Intention to Treat</h3>
            <Divider className="flex-1 opacity-20" />
          </div>
          <RadioGroup 
            defaultValue="curative" 
            orientation="horizontal"
            classNames={{
              wrapper: "flex-wrap gap-4 sm:gap-12"
            }}
          >
            <Radio value="curative" color="primary" classNames={{ label: "font-black sm:text-lg" }}>Curative</Radio>
            <Radio value="palliative" color="primary" classNames={{ label: "font-black sm:text-lg" }}>Palliative</Radio>
            <Radio value="none" color="primary" classNames={{ label: "font-black sm:text-lg" }}>No Treatment</Radio>
          </RadioGroup>
        </div>

        <Divider className="opacity-20" />

        {/* Planned Modalities Grid */}
        <div className="space-y-8">
           <div className="flex items-center justify-between">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary whitespace-nowrap">Planned Modalities (Grid Mapping)</h3>
              <Chip variant="flat" color="primary" size="sm" className="font-black px-4 bg-content1">YES / NO</Chip>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatmentTypes.map((type) => (
                <div key={type} className="p-6 rounded-xl border border-divider/50 bg-content1 hover:bg-content2/30 transition-all group flex flex-row items-center justify-between">
                  <span className="font-black text-xs sm:text-sm uppercase tracking-wider text-default-700 group-hover:text-primary transition-colors">{type}</span>
                  <RadioGroup 
                    orientation="horizontal" 
                    defaultValue="no"
                    classNames={{
                       wrapper: "flex flex-wrap gap-4"
                    }}
                  >
                     <Radio value="yes" color="success" size="sm" classNames={{ label: "text-[10px] font-bold" }}>Yes</Radio>
                     <Radio value="no" color="danger" size="sm" classNames={{ label: "text-[10px] font-bold" }}>No</Radio>
                  </RadioGroup>
                </div>
              ))}
           </div>
        </div>

        <Divider className="opacity-20" />

        {/* Medication Mapping Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
           <div className="p-4 sm:p-8 rounded-2xl sm:rounded-[3rem] bg-secondary/5 border border-secondary/20 space-y-8">
              <div className="flex items-center gap-3">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary whitespace-nowrap">Hormonal Therapy Drugs</h3>
                <Divider className="flex-1 opacity-20" />
              </div>
              <CheckboxGroup 
                color="secondary"
                classNames={{
                  wrapper: "flex flex-wrap gap-4"
                }}
              >
                <div className="grid grid-cols-1 gap-4">
                   {htDrugs.map((drug) => (
                     <div key={drug} className="bg-content1 border border-secondary/10 p-3 rounded-lg hover:translate-x-1 transition-transform">
                        <Checkbox value={drug.toLowerCase()} className="font-black text-xs">{drug}</Checkbox>
                     </div>
                   ))}
                </div>
              </CheckboxGroup>
           </div>

           <div className="p-4 sm:p-8 rounded-2xl sm:rounded-[3rem] bg-danger/5 border border-danger/20 space-y-8">
              <div className="flex items-center gap-3">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-danger whitespace-nowrap">Medicines after HRPC</h3>
                <Divider className="flex-1 opacity-20" />
              </div>
              <CheckboxGroup 
                color="danger"
                classNames={{
                  wrapper: "flex flex-wrap gap-4"
                }}
              >
                <div className="grid grid-cols-1 gap-4">
                   {postHrpcMedications.map((med) => (
                     <div key={med} className="bg-content1 border border-danger/10 p-3 rounded-lg hover:translate-x-1 transition-transform">
                        <Checkbox value={med.toLowerCase()} className="font-black text-xs">{med}</Checkbox>
                     </div>
                   ))}
                </div>
              </CheckboxGroup>
           </div>
        </div>

        {/* Performance Status & Duration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          <div className="p-8 rounded-2xl sm:rounded-[2.5rem] bg-warning/5 border border-warning/20 flex flex-col justify-center gap-6">
            <div className="flex items-center gap-3">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-warning whitespace-nowrap">WHO Performance Status</h3>
              <Divider className="flex-1 opacity-20" />
            </div>
            <RadioGroup orientation="horizontal" defaultValue="done">
              <div className="flex flex-wrap gap-10">
                <Radio value="done" color="warning" classNames={{ label: "font-black" }}>Done</Radio>
                <Radio value="not-done" color="warning" classNames={{ label: "font-black opacity-50" }}>Not Done</Radio>
              </div>
            </RadioGroup>
          </div>
          
          <div className="p-8 rounded-2xl sm:rounded-[2.5rem] border-2 border-dashed border-divider bg-content1 flex flex-col justify-center gap-6">
             <Input 
               label="HT Duration before RT" 
               placeholder="Duration..."
               variant="flat"
               labelPlacement="outside"
               endContent={<span className="text-[10px] font-black text-default-400 uppercase whitespace-nowrap">Months</span>}
               className="font-black"
               classNames={{
                 inputWrapper: "h-14 rounded-xl sm:rounded-2xl bg-background",
                 label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
               }}
             />
          </div>
        </div>
      </div>
    </div>
  );
}
