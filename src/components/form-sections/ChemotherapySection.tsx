import { 
  Divider,
  Input,
  RadioGroup,
  Radio,
  Textarea,
  Chip
} from "@heroui/react";

export default function ChemotherapySection() {
  return (
    <div className="space-y-10 pb-12">
      <div className="flex flex-col items-center text-center px-4 mb-8">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 leading-tight">
          Chemotherapy & Response Assessment
        </h2>
        <p className="text-default-500 text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] mt-2 opacity-70">
          Cycle tracking, regimen details, and assessment of therapeutic response.
        </p>
      </div>

      <div className="space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* CT Administration */}
          <div className="space-y-10">
            <div className="flex items-center gap-3">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary whitespace-nowrap">CT Administration</h3>
              <Divider className="flex-1 opacity-20" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
              <RadioGroup 
                label="Status" 
                defaultValue="planned"
                classNames={{
                  label: "text-[9px] font-black uppercase tracking-widest text-default-400 mb-6"
                }}
              >
                <div className="flex flex-wrap gap-8">
                  <Radio value="planned" color="primary" classNames={{ label: "text-xs font-bold" }}>Planned</Radio>
                  <Radio value="given" color="primary" classNames={{ label: "text-xs font-bold" }}>Given</Radio>
                </div>
              </RadioGroup>

              <RadioGroup 
                label="Type" 
                defaultValue="adj"
                classNames={{
                  label: "text-[9px] font-black uppercase tracking-widest text-default-400 mb-6"
                }}
              >
                <div className="flex flex-wrap gap-8">
                  <Radio value="ind" color="primary" classNames={{ label: "text-xs font-bold" }}>Induction</Radio>
                  <Radio value="adj" color="primary" classNames={{ label: "text-xs font-bold" }}>Adjuvant</Radio>
                </div>
              </RadioGroup>
            </div>

            <RadioGroup 
              label="Regimen Type" 
              defaultValue="single"
              orientation="horizontal"
              classNames={{
                label: "text-[9px] font-black uppercase tracking-widest text-default-400 mb-6"
              }}
            >
              <div className="flex flex-wrap gap-4 sm:gap-12">
                <Radio value="single" color="primary" classNames={{ label: "text-xs font-bold" }}>Single Agent</Radio>
                <Radio value="multi" color="primary" classNames={{ label: "text-xs font-bold" }}>Combination</Radio>
              </div>
            </RadioGroup>
            
            <Textarea 
              label="Drug Names / Cycles Details"
              placeholder="e.g. Docetaxel 75mg/m2..."
              variant="flat"
              labelPlacement="outside"
              minRows={3}
              classNames={{
                inputWrapper: "rounded-xl sm:rounded-2xl bg-content1 border border-divider/30 transition-all hover:border-primary/50",
                label: "text-[9px] font-black uppercase tracking-widest text-default-400 mb-4"
              }}
            />
          </div>

          {/* Physiological & BSA */}
          <div className="p-4 sm:p-8 rounded-2xl sm:rounded-[3.5rem] bg-content1 border border-divider/50 space-y-10 flex flex-col justify-center">
             <div className="flex items-center gap-3">
               <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary whitespace-nowrap">Physiological Metrics & BSA</h3>
               <Divider className="flex-1 opacity-20" />
             </div>
             <div className="grid grid-cols-2 flex-wrap gap-4 sm:gap-8">
                <Input 
                  type="number"
                  label="HT (cm)" 
                  placeholder="cm"
                  variant="bordered"
                  labelPlacement="outside"
                  classNames={{ 
                    inputWrapper: "h-14 rounded-xl font-bold bg-background border-divider",
                    label: "text-[9px] font-black uppercase tracking-widest text-default-400 mb-2"
                  }}
                />
                <Input 
                  type="number"
                  label="WT (kg)" 
                  placeholder="kg"
                  variant="bordered"
                  labelPlacement="outside"
                  classNames={{ 
                    inputWrapper: "h-14 rounded-xl font-bold bg-background border-divider",
                    label: "text-[9px] font-black uppercase tracking-widest text-default-400 mb-2"
                  }}
                />
             </div>
             
             <div className="p-4 sm:p-8 bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20 flex flex-col sm:flex-row justify-between items-center gap-4 rounded-2xl sm:rounded-3xl">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Calculated BSA</span>
                  <span className="text-3xl sm:text-4xl font-black tracking-tighter text-primary">--- <span className="text-lg">m²</span></span>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary/20 flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
             </div>

             <div className="grid grid-cols-2 flex-wrap gap-4 sm:gap-8">
                <Input 
                  type="number"
                  label="Cycles Planned" 
                  variant="flat"
                  labelPlacement="outside"
                  classNames={{ 
                    inputWrapper: "h-14 rounded-xl font-bold bg-background border border-divider/30",
                    label: "text-[9px] font-black uppercase tracking-widest text-default-400 mb-2"
                  }}
                />
                <Input 
                  type="number"
                  label="Cycles Given" 
                  variant="flat"
                  labelPlacement="outside"
                  classNames={{ 
                    inputWrapper: "h-14 rounded-xl font-bold bg-background border border-divider/30",
                    label: "text-[9px] font-black uppercase tracking-widest text-default-400 mb-2"
                  }}
                />
             </div>
          </div>
        </div>

        <Divider className="opacity-20" />

        {/* Response & Complications */}
        <div className="space-y-10">
          <div className="flex items-center gap-3">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary whitespace-nowrap">Response & Complications</h3>
            <Divider className="flex-1 opacity-20" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
             <div className="space-y-8">
                <span className="text-[9px] font-black uppercase tracking-widest text-default-400">Response Category</span>
                <RadioGroup defaultValue="partial">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {["Complete Response", "Partial Response", "Stable Disease", "Progression"].map(v => (
                       <div key={v} className="bg-content1 border border-divider/50 p-4 rounded-xl hover:border-primary transition-all group">
                          <Radio value={v.toLowerCase().replace(" ", "-")} color="primary" classNames={{ label: "text-xs font-black group-hover:text-primary transition-colors" }}>{v}</Radio>
                       </div>
                    ))}
                  </div>
                </RadioGroup>
             </div>
             
             <div className="p-4 sm:p-8 rounded-2xl sm:rounded-[3.5rem] bg-warning/5 border border-warning/20 flex flex-col gap-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-warning">Complication Tracking</h3>
                  <Chip size="sm" color="warning" variant="shadow" className="font-bold">SYSTEM ALERT</Chip>
                </div>
                
                <div className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <Input 
                      type="number" 
                      max="5" 
                      min="1" 
                      label="Grade (1-5)" 
                      variant="bordered"
                      labelPlacement="outside"
                      classNames={{ 
                        inputWrapper: "h-14 rounded-xl font-bold bg-background border-divider",
                        label: "text-[9px] font-black uppercase tracking-widest text-warning mb-2"
                      }}
                    />
                    <RadioGroup 
                      label="Resolution" 
                      defaultValue="yes"
                      orientation="horizontal"
                      classNames={{
                        label: "text-[9px] font-black uppercase tracking-widest text-warning mb-2"
                      }}
                    >
                      <div className="flex flex-wrap gap-10 mt-2">
                         <Radio value="yes" color="warning" classNames={{ label: "font-bold text-xs" }}>Yes</Radio>
                         <Radio value="no" color="warning" classNames={{ label: "font-bold text-xs" }}>No</Radio>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <Textarea 
                    placeholder="Nature of complication..." 
                    variant="flat"
                    minRows={3}
                    classNames={{
                      inputWrapper: "rounded-xl bg-background p-4 border border-divider/20",
                      input: "text-xs font-medium"
                    }}
                  />
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
