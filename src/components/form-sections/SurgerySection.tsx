import { 
  Divider,
  Input,
  RadioGroup,
  Radio,
  Chip
} from "@heroui/react";

export default function SurgerySection() {
  return (
    <div className="space-y-10 pb-12 transition-all duration-500">
      <div className="flex flex-col items-center text-center px-4 mb-8">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 leading-tight">
          Surgery & Histopathology
        </h2>
        <p className="text-default-500 text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] mt-2 opacity-70">
          Surgical Data • Pathological Stage (pTNM)
        </p>
      </div>

      <div className="space-y-10">
        {/* Procedure Data */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          <div className="p-4 sm:p-8 rounded-2xl sm:rounded-[3rem] bg-content1 border border-divider/50 space-y-6 sm:space-y-8">
            <div className="flex items-center gap-3">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary whitespace-nowrap">Procedure Details</h3>
              <Divider className="flex-1 opacity-20" />
            </div>
            <RadioGroup 
              defaultValue="rp" 
              classNames={{
                 wrapper: "grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
               }}
            >
              {[
                { id: "rp", label: "Radical Prostatectomy" },
                { id: "orch", label: "Orchidectomy" },
                { id: "turp", label: "TURP" },
                { id: "other", label: "Other" }
              ].map(proc => (
                <div key={proc.id} className="bg-background border border-divider/50 p-3 rounded-xl hover:border-primary transition-all active:scale-95 cursor-pointer">
                  <Radio value={proc.id} color="primary" classNames={{ label: "text-xs font-black uppercase tracking-wider" }}>
                    {proc.label}
                  </Radio>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-6 sm:space-y-10">
            <Input 
              type="date"
              label="Date of Surgery" 
              variant="bordered"
              labelPlacement="outside"
              className="font-bold"
              classNames={{
                inputWrapper: "h-14 rounded-xl sm:rounded-2xl border-divider bg-content1",
                label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
              }}
            />
            <div className="p-8 rounded-2xl sm:rounded-[2.5rem] bg-content1 border border-divider/50 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-default-400 whitespace-nowrap">Lymphadenectomy</h3>
                <Divider className="flex-1 opacity-20" />
              </div>
              <RadioGroup orientation="horizontal" defaultValue="no" classNames={{ wrapper: "flex-wrap gap-4 sm:gap-12" }}>
                <Radio value="yes" color="primary" classNames={{ label: "font-black" }}>Done</Radio>
                <Radio value="no" color="primary" classNames={{ label: "font-black opacity-50" }}>Not Done</Radio>
              </RadioGroup>
            </div>
          </div>
        </div>

        <Divider className="opacity-20" />

        {/* Pathological Assessment */}
        <div className="space-y-8 sm:space-y-10">
          <div className="flex items-center gap-4">
             <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary whitespace-nowrap">pT Assessment</h3>
             <Divider className="flex-1 opacity-20" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 flex-wrap gap-4 sm:gap-8">
             <Input 
               type="number" 
               label="Tumor Size (cm)"
               variant="flat"
               labelPlacement="outside"
               placeholder="Size"
               classNames={{
                 inputWrapper: "h-14 rounded-xl bg-content1 border border-divider/30 font-bold",
                 label: "text-[10px] font-black uppercase tracking-widest text-default-500 mb-2"
               }}
             />
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 col-span-1 sm:col-span-1 xl:col-span-3">
                {[
                  { label: "Lobe Status", options: ["Uni", "Bi"] },
                  { label: "SV Invasion", options: ["Y", "N"], colors: ["danger", "success"] },
                  { label: "Surg. Margins", options: ["Pos", "Neg"], colors: ["danger", "success"] }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl sm:rounded-2xl bg-content1 border border-divider/50 flex flex-col justify-center">
                     <span className="text-[9px] font-black text-default-400 uppercase mb-2 whitespace-nowrap overflow-hidden text-ellipsis">{item.label}</span>
                     <RadioGroup orientation="horizontal" defaultValue={idx === 0 ? "uni" : (idx === 1 ? "no" : "neg")} size="sm" classNames={{ wrapper: "flex flex-wrap gap-4" }}>
                       {item.options.map((opt, i) => (
                         <Radio key={opt} value={opt.toLowerCase()} color={(item.colors?.[i] as any) || "primary"} classNames={{ label: "text-[9px] font-black" }}>{opt}</Radio>
                       ))}
                     </RadioGroup>
                  </div>
                ))}
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
             <div className="p-4 sm:p-8 rounded-2xl sm:rounded-[3rem] bg-indigo-50/5 border border-indigo-200/20 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                <div className="space-y-4">
                   <span className="text-[10px] font-black uppercase text-indigo-500 tracking-wider">Periprostatic</span>
                   <RadioGroup defaultValue="no" orientation="horizontal" classNames={{ wrapper: "flex flex-wrap gap-6" }}>
                      <Radio value="yes" color="secondary" size="sm" classNames={{ label: "text-xs font-bold" }}>Yes</Radio>
                      <Radio value="no" color="secondary" size="sm" classNames={{ label: "text-xs font-bold" }}>No</Radio>
                   </RadioGroup>
                </div>
                <div className="space-y-4">
                   <span className="text-[10px] font-black uppercase text-indigo-500 tracking-wider">Capsular Breach</span>
                   <RadioGroup defaultValue="no" orientation="horizontal" classNames={{ wrapper: "flex flex-wrap gap-6" }}>
                      <Radio value="yes" color="secondary" size="sm" classNames={{ label: "text-xs font-bold" }}>Yes</Radio>
                      <Radio value="no" color="secondary" size="sm" classNames={{ label: "text-xs font-bold" }}>No</Radio>
                   </RadioGroup>
                </div>
             </div>

             <div className="p-4 sm:p-8 rounded-2xl sm:rounded-[3rem] bg-rose-50/5 border border-rose-200/20 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                <div className="space-y-4">
                   <span className="text-[10px] font-black uppercase text-rose-500 tracking-wider">Vascular</span>
                   <RadioGroup defaultValue="no" orientation="horizontal" classNames={{ wrapper: "flex flex-wrap gap-6" }}>
                      <Radio value="yes" color="danger" size="sm" classNames={{ label: "text-xs font-bold" }}>Yes</Radio>
                      <Radio value="no" color="danger" size="sm" classNames={{ label: "text-xs font-bold" }}>No</Radio>
                   </RadioGroup>
                </div>
                <div className="space-y-4">
                   <span className="text-[10px] font-black uppercase text-rose-500 tracking-wider">Perineural</span>
                   <RadioGroup defaultValue="no" orientation="horizontal" classNames={{ wrapper: "flex flex-wrap gap-6" }}>
                      <Radio value="yes" color="danger" size="sm" classNames={{ label: "text-xs font-bold" }}>Yes</Radio>
                      <Radio value="no" color="danger" size="sm" classNames={{ label: "text-xs font-bold" }}>No</Radio>
                   </RadioGroup>
                </div>
             </div>
          </div>

          {/* Node Yield */}
          <div className="p-4 sm:p-8 rounded-2xl sm:rounded-[3.5rem] bg-content1 border border-divider/50 space-y-8">
             <div className="flex items-center gap-3">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-default-500 whitespace-nowrap">pN Status</h3>
                <Divider className="flex-1 opacity-20" />
                <Chip size="sm" variant="flat" color="primary" className="font-black text-[9px] px-2 bg-background">BIO BANK</Chip>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                <Input 
                  type="number" 
                  label="Sampled" 
                  placeholder="0"
                  variant="bordered"
                  labelPlacement="outside"
                  classNames={{ 
                    inputWrapper: "h-14 rounded-xl bg-background border-divider font-bold",
                    label: "text-[10px] font-black uppercase tracking-widest text-default-500 mb-2"
                  }}
                />
                <Input 
                  type="number" 
                  label="Positive" 
                  placeholder="0"
                  variant="bordered"
                  labelPlacement="outside"
                  classNames={{ 
                    inputWrapper: "h-14 rounded-xl bg-background border-divider font-bold",
                    label: "text-[10px] font-black uppercase tracking-widest text-default-500 mb-2"
                  }}
                />
                <div className="flex flex-col justify-center gap-3 p-4 rounded-xl bg-background border border-divider/30">
                   <span className="text-[9px] font-black text-default-400 uppercase">Extension</span>
                   <RadioGroup defaultValue="no" orientation="horizontal" classNames={{ wrapper: "flex flex-wrap gap-6" }}>
                      <Radio value="yes" color="primary" size="sm" classNames={{ label: "text-xs font-bold" }}>Present</Radio>
                      <Radio value="no" color="primary" size="sm" classNames={{ label: "text-xs font-bold" }}>Absent</Radio>
                   </RadioGroup>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
