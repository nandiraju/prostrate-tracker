import { 
  Divider,
  Input,
  RadioGroup,
  Radio,
  Textarea,
  Chip
} from "@heroui/react";

export default function FollowUpSection() {
  return (
    <div className="space-y-10 pb-12">
      <div className="flex flex-col items-center text-center px-4 mb-8">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 leading-tight">
          Follow-Up & Clinical Outcome
        </h2>
        <p className="text-default-500 text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] mt-2 opacity-70">
          Longitudinal assessment of patient status, recurrence, and survival meta-data.
        </p>
      </div>

      <div className="space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Vital & Disease Status */}
          <div className="space-y-10">
              <div className="p-4 sm:p-8 rounded-2xl sm:rounded-[3.5rem] bg-success/5 border border-success/20 flex flex-col gap-8">
                <div className="flex items-center gap-3">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-success whitespace-nowrap">Vital Status</h3>
                  <Divider className="flex-1 opacity-20" />
                </div>
                <RadioGroup defaultValue="alive" orientation="horizontal" classNames={{ wrapper: "flex-wrap gap-4 sm:gap-12" }}>
                  <Radio value="alive" color="success" classNames={{ label: "font-black text-lg sm:text-xl" }}>Alive</Radio>
                  <Radio value="dead" color="danger" classNames={{ label: "font-black text-lg sm:text-xl opacity-50 transition-opacity hover:opacity-100" }}>Dead</Radio>
                </RadioGroup>
              </div>

              <div className="p-4 sm:p-8 rounded-2xl sm:rounded-[3.5rem] bg-content1 border border-divider/50 space-y-8">
                <div className="flex items-center gap-3">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary whitespace-nowrap">Disease Status at Last Visit</h3>
                  <Divider className="flex-1 opacity-20" />
                </div>
                <RadioGroup defaultValue="ned">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: "ned", label: "No Evidence (NED)" },
                      { id: "res", label: "Residual Disease" },
                      { id: "rec", label: "Recurrence" },
                      { id: "met", label: "Metastases" },
                    ].map(v => (
                      <div key={v.id} className="bg-background border border-divider/50 p-4 rounded-xl transition-all hover:border-primary">
                        <Radio value={v.id} color="primary" classNames={{ label: "text-xs font-black uppercase tracking-wider" }}>{v.label}</Radio>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>
          </div>

          {/* Follow-up Logistics */}
          <div className="space-y-10">
             <div className="p-4 sm:p-8 rounded-2xl sm:rounded-[3.5rem] bg-indigo-50/5 border border-indigo-200/20 space-y-8">
                <div className="flex items-center gap-3">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 whitespace-nowrap">Follow-up Method</h3>
                  <Divider className="flex-1 opacity-20" />
                </div>
                <RadioGroup defaultValue="visit">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {[
                      { id: "visit", label: "Hospital Visit" },
                      { id: "tel", label: "Telephone" },
                      { id: "post", label: "Post/Letter" },
                      { id: "home", label: "Home Visit" },
                    ].map(m => (
                      <div key={m.id} className="bg-background border border-divider/50 p-4 rounded-xl transition-all hover:border-indigo-500 group">
                        <Radio value={m.id} color="secondary" classNames={{ label: "text-xs font-black uppercase tracking-wider group-hover:text-indigo-500 transition-colors" }}>{m.label}</Radio>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <Input 
                  type="date"
                  label="Last Contact Date" 
                  variant="bordered"
                  labelPlacement="outside"
                  classNames={{ 
                    inputWrapper: "h-14 rounded-xl sm:rounded-2xl border-divider bg-content1 font-bold",
                    label: "text-[9px] font-black uppercase tracking-widest text-default-400 mb-2"
                  }}
                />
                <Input 
                  type="number"
                  label="Survival (Months)" 
                  isReadOnly
                  placeholder="0"
                  variant="flat"
                  labelPlacement="outside"
                  endContent={<span className="text-[10px] font-black text-default-400 uppercase">Computed</span>}
                  classNames={{ 
                    inputWrapper: "h-14 rounded-xl sm:rounded-2xl bg-content1 border border-divider/30 font-bold",
                    label: "text-[9px] font-black uppercase tracking-widest text-default-400 mb-2"
                  }}
                />
             </div>
          </div>
        </div>

        <Divider className="opacity-20" />

        {/* Mortality Details */}
        <div className="p-8 sm:p-12 rounded-2xl sm:rounded-[4rem] bg-danger/5 border border-danger/20 space-y-10 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity hidden sm:block">
              <svg className="w-40 h-40 text-danger" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
           </div>

           <div className="flex items-center gap-4 relative z-10">
             <h3 className="text-[10px] sm:text-sm font-black uppercase tracking-[0.4em] text-danger">Mortality Details</h3>
             <Chip variant="shadow" color="danger" size="sm" className="font-black px-4 bg-content1 whitespace-nowrap">DEATH CERT MATRIX</Chip>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 relative z-10">
              <Input 
                type="date"
                label="Date of Death" 
                variant="flat"
                labelPlacement="outside"
                classNames={{ 
                  inputWrapper: "h-14 rounded-xl sm:rounded-2xl bg-content1 border border-danger/10 font-bold",
                  label: "text-[9px] font-black uppercase tracking-widest text-danger mb-2"
                }}
              />
              
              <div className="space-y-6">
                <span className="text-[9px] font-black uppercase tracking-widest text-default-400 mb-2 block">Cause of Death</span>
                <RadioGroup defaultValue="ca" color="danger" classNames={{ wrapper: "flex flex-wrap gap-4" }}>
                  <Radio value="ca" size="sm" classNames={{ label: "text-xs font-bold" }}>Prostate Cancer</Radio>
                  <Radio value="tr" size="sm" classNames={{ label: "text-xs font-bold" }}>Treatment Related</Radio>
                  <Radio value="oth" size="sm" classNames={{ label: "text-xs font-bold" }}>Other Causes</Radio>
                </RadioGroup>
              </div>

              <Textarea 
                label="Clinical Note"
                placeholder="Specific cause or event details..."
                variant="flat"
                labelPlacement="outside"
                minRows={3}
                classNames={{
                  inputWrapper: "rounded-xl sm:rounded-2xl bg-content1 p-4 border border-danger/10",
                  input: "text-xs font-medium",
                  label: "text-[9px] font-black uppercase tracking-widest text-danger mb-2"
                }}
              />
           </div>
        </div>
      </div>
    </div>
  );
}
