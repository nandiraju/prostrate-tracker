import { 
  Divider,
  RadioGroup,
  Radio,
  Textarea,
  Chip
} from "@heroui/react";

export default function RadiotherapySection() {
  return (
    <div className="space-y-10 pb-12">
      <div className="flex flex-col items-center text-center px-4 mb-8">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 leading-tight">
          Radiotherapy & Hormonal Modulation
        </h2>
        <p className="text-default-500 text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] mt-2 opacity-70">
          Detailed tracking of radiotherapy delivery, hormonal modulation, and PSA responses.
        </p>
      </div>

      <div className="space-y-10">
        {/* RT & HT Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* RT Modality */}
          <div className="p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[3.5rem] bg-indigo-50/5 border border-indigo-200/20 space-y-10">
            <div className="flex items-center gap-3">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 whitespace-nowrap">RT Modality</h3>
              <Divider className="flex-1 opacity-20" />
            </div>
            <div className="space-y-10">
               <RadioGroup 
                 label="RT Status" 
                 defaultValue="planned"
                 classNames={{
                   label: "text-[9px] font-black uppercase tracking-widest text-default-400 mb-6"
                 }}
               >
                <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3">
                  {["Planned", "Incomplete", "Done"].map(v => (
                    <div key={v} className="bg-background border border-divider/50 p-2.5 rounded-xl flex items-center justify-center min-w-0">
                      <Radio value={v.toLowerCase()} color="secondary" size="sm" classNames={{ label: "font-black text-[10px] sm:text-xs truncate" }}>{v}</Radio>
                    </div>
                  ))}
                </div>
               </RadioGroup>

               <RadioGroup 
                 label="RT Type" 
                 defaultValue="tele"
                 orientation="horizontal"
                 classNames={{
                   label: "text-[9px] font-black uppercase tracking-widest text-default-400 mb-6",
                   wrapper: "flex-wrap gap-4 sm:gap-12"
                 }}
               >
                 <Radio value="brachy" color="secondary" classNames={{ label: "text-xs font-bold" }}>Brachytherapy</Radio>
                 <Radio value="tele" color="secondary" classNames={{ label: "text-xs font-bold" }}>Teletherapy</Radio>
               </RadioGroup>
            </div>
          </div>

          {/* Hormonal Therapy */}
          <div className="p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[3.5rem] bg-rose-50/5 border border-rose-200/20 space-y-10">
            <div className="flex items-center gap-3">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-500 whitespace-nowrap">Hormonal Therapy (HT)</h3>
              <Divider className="flex-1 opacity-20" />
            </div>
            <div className="space-y-10">
              <RadioGroup 
                label="HT Status" 
                defaultValue="planned"
                orientation="horizontal"
                classNames={{
                  label: "text-[9px] font-black uppercase tracking-widest text-default-400 mb-6",
                  wrapper: "flex-wrap gap-4 sm:gap-12"
                }}
              >
                <Radio value="planned" color="danger" classNames={{ label: "text-xs font-bold" }}>Planned</Radio>
                <Radio value="given" color="danger" classNames={{ label: "text-xs font-bold" }}>Given</Radio>
              </RadioGroup>

              <RadioGroup 
                label="HT Category" 
                defaultValue="medical"
                classNames={{
                  label: "text-[9px] font-black uppercase tracking-widest text-default-400 mb-6"
                }}
              >
                <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
                  {["Medical MAB", "Surgical MAB", "Medical", "Surgical"].map(v => (
                    <div key={v} className="bg-background border border-divider/50 p-3 rounded-xl min-w-0">
                      <Radio value={v.toLowerCase().replace(" ", "-")} color="danger" size="sm" classNames={{ label: "font-black text-xs truncate" }}>{v}</Radio>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <Divider className="opacity-20" />

        {/* Response Tracking */}
        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary whitespace-nowrap">Response & Refractory Tracking</h3>
            <Divider className="flex-1 opacity-20" />
            <Chip size="sm" variant="shadow" color="secondary" className="font-black uppercase bg-content1">Clinician Entry</Chip>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 flex-wrap gap-4 sm:gap-8">
            <Textarea 
              label="PSA Before HT"
              placeholder="Value and date..."
              variant="flat"
              labelPlacement="outside"
              minRows={2}
              classNames={{
                inputWrapper: "rounded-xl sm:rounded-2xl bg-content1 border border-divider/30 transition-all hover:border-primary/50",
                label: "text-[9px] font-black uppercase tracking-widest text-default-500 mb-2"
              }}
            />
            <Textarea 
              label="PSA After HT"
              placeholder="Lowest value..."
              variant="flat"
              labelPlacement="outside"
              minRows={2}
              classNames={{
                inputWrapper: "rounded-xl sm:rounded-2xl bg-content1 border border-divider/30 transition-all hover:border-primary/50",
                label: "text-[9px] font-black uppercase tracking-widest text-default-500 mb-2"
              }}
            />
            <Textarea 
              label="Hormone Refractory Date"
              placeholder="Date of rise..."
              variant="flat"
              labelPlacement="outside"
              minRows={2}
              classNames={{
                inputWrapper: "rounded-xl sm:rounded-2xl bg-content1 border border-divider/30 transition-all hover:border-primary/50",
                label: "text-[9px] font-black uppercase tracking-widest text-default-500 mb-2"
              }}
            />
            <Textarea 
              label="HT Specific Drugs"
              placeholder="Leuprolide, etc..."
              variant="flat"
              labelPlacement="outside"
              minRows={2}
              classNames={{
                inputWrapper: "rounded-xl sm:rounded-2xl bg-content1 border border-divider/30 transition-all hover:border-primary/50",
                label: "text-[9px] font-black uppercase tracking-widest text-default-500 mb-2"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
