import { 
  Divider,
  RadioGroup,
  Radio,
  Textarea
} from "@heroui/react";

const conditions = [
  "TB", "HTN", "DM", "IHD", "B. Asthma", "Allergic conditions", "Hepatitis/HBsAg", "AIDS/HIV"
];

export default function HistorySection() {
  return (
    <div className="space-y-10 pb-12">
      <div className="flex flex-col items-center text-center px-4 mb-8">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 leading-tight">
          Medical History & Co-morbidities
        </h2>
        <p className="text-default-500 text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] mt-2 opacity-70">
          Detailed tracking of existing medical conditions and relevant lifestyle habits.
        </p>
      </div>

      <div className="space-y-10">
        {/* Co-morbidities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
          {conditions.map((condition) => (
            <div key={condition} className="flex items-center justify-between p-4 rounded-xl bg-content1 border border-divider/50 hover:bg-content1 transition-all">
              <span className="font-black text-default-700 text-[10px] uppercase tracking-wider">{condition}</span>
              <RadioGroup 
                orientation="horizontal" 
                defaultValue="no"
                classNames={{
                  wrapper: "flex flex-wrap gap-6"
                }}
              >
                <Radio value="yes" color="danger" size="sm" classNames={{ label: "text-[10px] font-bold" }}>Yes</Radio>
                <Radio value="no" color="success" size="sm" classNames={{ label: "text-[10px] font-bold" }}>No</Radio>
              </RadioGroup>
            </div>
          ))}
        </div>

        <Divider className="opacity-20" />

        {/* Qualitative Data Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
           <div className="space-y-4 p-4 sm:p-6 rounded-2xl sm:rounded-[2.5rem] bg-secondary/5 border border-secondary/20 transition-all hover:bg-secondary/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-secondary">Family History of Ca-P</span>
                <Divider className="flex-1 opacity-20" />
              </div>
              <Textarea 
                variant="bordered"
                placeholder="Detail any instances of prostate cancer in relatives..."
                minRows={4}
                className="font-bold"
                classNames={{
                  inputWrapper: "rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900 border-divider",
                  input: "text-xs"
                }}
              />
           </div>
           
           <div className="space-y-4 p-4 sm:p-6 rounded-2xl sm:rounded-[2.5rem] bg-warning/5 border border-warning/20 transition-all hover:bg-warning/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-warning">Surgical / Past Drug History</span>
                <Divider className="flex-1 opacity-20" />
              </div>
              <Textarea 
                variant="bordered"
                placeholder="List major surgeries or chronic medications..."
                minRows={4}
                className="font-bold"
                classNames={{
                  inputWrapper: "rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900 border-divider",
                  input: "text-xs"
                }}
              />
           </div>
        </div>
      </div>
    </div>
  );
}
