import { 
  Divider,
  Input,
  Textarea,
  Alert
} from "@heroui/react";
import { ShieldAlert } from "lucide-react";

export default function LifestyleSection() {
  return (
    <div className="space-y-10 pb-12">
      <div className="flex flex-col items-center text-center px-4 mb-8">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 leading-tight">
          Social & Sexual History
        </h2>
        <p className="text-default-500 text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] mt-2 opacity-70">
          Sexual habits and reproductive history as per clinical registry requirements.
        </p>
      </div>

      <div className="space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
           <div className="space-y-8">
              <Textarea 
                label="Sexual Habits (Details)" 
                placeholder="Provide relevant clinical details..."
                variant="bordered"
                labelPlacement="outside"
                minRows={4}
                className="font-bold"
                classNames={{
                  inputWrapper: "rounded-xl sm:rounded-2xl bg-content1 border-divider transition-all hover:border-primary",
                  label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
                }}
              />
              
              <div className="grid grid-cols-2 gap-6">
                <Input 
                  type="number"
                  label="No. of Partners" 
                  placeholder="Count"
                  variant="flat"
                  labelPlacement="outside"
                  className="font-bold"
                  classNames={{
                    inputWrapper: "h-14 rounded-xl sm:rounded-2xl bg-content1 border border-divider/30",
                    label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
                  }}
                />
                <Input 
                  type="number"
                  label="Age at 1st Intercourse" 
                  placeholder="Years"
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

           <div className="flex flex-col gap-6">
              <Alert 
                color="warning" 
                variant="flat"
                title="Privacy & Confidentiality Notice"
                description="Sexual history data is strictly used for epidemiological studies within the prostate cancer registry. Ensure patient confidentiality is maintained during data entry."
                icon={<ShieldAlert size={20} />}
                className="rounded-2xl p-6"
              />
              
              <div className="p-4 sm:p-6 rounded-2xl sm:rounded-[2.5rem] bg-content1 border border-divider/50 flex-1 flex flex-col justify-center">
                 <p className="text-[10px] sm:text-xs text-default-400 leading-relaxed font-medium italic">
                    "Data collected here helps identify potential risk factors and correlates with regional epidemiological trends in prostate health."
                 </p>
              </div>
           </div>
        </div>

        <Divider className="opacity-20" />
        
        <div className="space-y-8">
           <div className="flex items-center gap-4 mb-2">
             <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary whitespace-nowrap">Additional Lifestyle Factors</h3>
             <Divider className="flex-1 opacity-20" />
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
              <Textarea 
                label="Smoking / Alcohol History"
                placeholder="Details on frequency and duration..."
                variant="bordered"
                labelPlacement="outside"
                minRows={3}
                className="font-bold"
                classNames={{
                  inputWrapper: "rounded-xl sm:rounded-2xl border-divider bg-content1",
                  label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
                }}
              />
              <Textarea 
                label="Dietary Habits"
                placeholder="Primary dietary preferences and restrictions..."
                variant="bordered"
                labelPlacement="outside"
                minRows={3}
                className="font-bold"
                classNames={{
                  inputWrapper: "rounded-xl sm:rounded-2xl border-divider bg-content1",
                  label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
                }}
              />
           </div>
        </div>
      </div>
    </div>
  );
}
