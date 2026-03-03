import { 
  Divider,
  Input,
  RadioGroup,
  Radio
} from "@heroui/react";

export default function MetastasisSection() {
  return (
    <div className="space-y-10 pb-12">
      <div className="flex flex-col items-center text-center px-4 mb-8">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 leading-tight">
          Metastasis & Socio-Economic Status
        </h2>
        <p className="text-default-500 text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] mt-2 opacity-70">
          Presence of metastasis, site involvement, and patient's socio-economic background.
        </p>
      </div>

      <div className="space-y-10">
        {/* Metastasis Presence */}
        <div className="p-4 sm:p-6 rounded-2xl sm:rounded-[2.5rem] bg-danger/5 border border-danger/20 flex flex-wrap items-center justify-between gap-4">
            <span className="text-[10px] sm:text-sm font-black text-danger uppercase tracking-[0.2em]">Metastasis Present?</span>
            <RadioGroup orientation="horizontal" defaultValue="no" classNames={{ wrapper: "flex-wrap gap-4 sm:gap-12" }}>
              <Radio value="yes" color="danger" classNames={{ label: "font-black text-xs sm:text-sm" }}>Yes</Radio>
              <Radio value="no" color="success" classNames={{ label: "font-black text-xs sm:text-sm" }}>No</Radio>
            </RadioGroup>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Presentation Summary */}
          <div className="p-4 sm:p-8 rounded-2xl sm:rounded-[3rem] bg-content1 border border-divider/50 space-y-8">
             <RadioGroup 
               label="Presentation of Mets" 
               defaultValue="bone"
               classNames={{
                 label: "text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8"
               }}
             >
               <div className="grid grid-cols-2 gap-6 w-full">
                 {["Bone", "Ascites", "LN Only", "Other"].map(val => (
                   <Radio key={val} value={val.toLowerCase()} className="capitalize" classNames={{ label: "text-xs font-bold" }}>{val}</Radio>
                 ))}
               </div>
             </RadioGroup>

             <RadioGroup 
               label="Visceral Involvement" 
               defaultValue="nil"
               classNames={{
                 label: "text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8"
               }}
             >
               <div className="grid grid-cols-2 gap-6 w-full">
                 {["Nil", "Liver", "Lung", "Brain", "Multiple"].map(val => (
                   <Radio key={val} value={val.toLowerCase()} className="capitalize" classNames={{ label: "text-xs font-bold" }}>{val}</Radio>
                 ))}
               </div>
             </RadioGroup>
          </div>

          {/* Severity Logic */}
          <div className="space-y-10">
            <Input 
              type="number"
              label="Number of Metastatic Sites" 
              placeholder="0"
              variant="bordered"
              labelPlacement="outside"
              className="font-bold"
              classNames={{
                inputWrapper: "h-14 rounded-xl sm:rounded-2xl bg-content1 border-divider",
                label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
              }}
            />
            
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-[2.5rem] border border-divider/50 bg-content1">
              <RadioGroup 
                label="Bone Met Severity" 
                defaultValue="nil"
                classNames={{
                  label: "text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6"
                }}
              >
                <div className="flex flex-col gap-4">
                  {["Nil", "Single", "Oligo (<3)", "Multiple (>3)"].map(val => (
                    <Radio key={val} value={val.toLowerCase().replace(/[^\w]/g, "")} size="sm" classNames={{ label: "text-xs font-bold" }}>{val}</Radio>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <Input 
              label="Lymph Node Sites" 
              placeholder="e.g. Pelvic, Retropironeal..."
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

        <Divider className="opacity-20" />

        {/* SES Section */}
        <div className="pt-4 space-y-8">
           <div className="flex items-center gap-4">
             <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-default-400 whitespace-nowrap">Socio-Economic Background</h3>
             <Divider className="flex-1 opacity-20" />
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
              <Input 
                label="Monthly Family Income" 
                placeholder="Enter amount"
                variant="bordered"
                labelPlacement="outside"
                className="font-bold"
                classNames={{
                  inputWrapper: "h-14 rounded-xl sm:rounded-2xl bg-content1 border-divider",
                  label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
                }}
              />
              <Input 
                label="Patient's Occupation" 
                placeholder="Current or former"
                variant="bordered"
                labelPlacement="outside"
                className="font-bold"
                classNames={{
                  inputWrapper: "h-14 rounded-xl sm:rounded-2xl bg-content1 border-divider",
                  label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
                }}
              />
           </div>
        </div>
      </div>
    </div>
  );
}
