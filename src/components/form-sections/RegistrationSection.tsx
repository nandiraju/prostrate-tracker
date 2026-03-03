import { 
  Input, 
  RadioGroup, 
  Radio, 
  Divider 
} from "@heroui/react";

export default function RegistrationSection() {
  return (
    <div className="space-y-10 pb-12">
      <div className="flex flex-col items-center text-center px-4 mb-8">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 leading-tight">
          Registration & Patient Identification
        </h2>
        <p className="text-default-500 text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] mt-2 opacity-70">
          Institutional Data • Patient Identifiers
        </p>
      </div>

      <div className="space-y-10">
        {/* Institutional Data Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-wrap gap-4 sm:gap-8">
          <Input 
            label="Center Name & Number" 
            placeholder="e.g. Cancer Institute 01"
            variant="bordered"
            labelPlacement="outside"
            className="font-bold"
            classNames={{
              inputWrapper: "h-14 rounded-xl sm:rounded-2xl bg-content1 border-divider transition-all hover:border-primary shadow-none",
              label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
            }}
          />
          <Input 
            label="Registration Number" 
            placeholder="Enter ID"
            variant="bordered"
            labelPlacement="outside"
            className="font-bold"
            classNames={{
              inputWrapper: "h-14 rounded-xl sm:rounded-2xl bg-content1 border-divider",
              label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
            }}
          />
          <Input 
            label="Hospital Reg. No." 
            placeholder="Enter Hospital ID"
            variant="bordered"
            labelPlacement="outside"
            className="font-bold"
            classNames={{
              inputWrapper: "h-14 rounded-xl sm:rounded-2xl bg-content1 border-divider",
              label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
            }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
          <div className="p-6 rounded-2xl sm:rounded-[2.5rem] bg-content1 border border-divider/50">
            <RadioGroup 
              label="System Integration" 
              defaultValue="no"
              description="Is this number website generated?"
              classNames={{
                 label: "text-[10px] font-black text-primary uppercase tracking-widest mb-3",
                 description: "text-[10px] font-medium"
              }}
            >
              <div className="flex flex-wrap flex-wrap gap-4 sm:gap-8 mt-1">
                <Radio value="yes" color="primary" classNames={{ label: "text-xs font-bold" }}>Yes, generated</Radio>
                <Radio value="no" color="primary" classNames={{ label: "text-xs font-bold" }}>No, manual entry</Radio>
              </div>
            </RadioGroup>
          </div>

          <Input 
            type="date"
            label="Date of Registration at RI" 
            variant="bordered"
            labelPlacement="outside"
            className="font-bold"
            classNames={{
              inputWrapper: "h-14 rounded-xl sm:rounded-2xl bg-content1 border-divider",
              label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
            }}
          />
        </div>

        {/* Patient Details Section */}
        <div className="pt-2 sm:pt-4">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[9px] font-black text-default-400 uppercase tracking-[0.3em] whitespace-nowrap">Personal Matrix</span>
            <Divider className="flex-1 opacity-20" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-wrap gap-4 sm:gap-8">
            <Input 
              label="Name of Patient" 
              placeholder="Full legal name"
              variant="flat"
              labelPlacement="outside"
              className="font-bold"
              classNames={{
                inputWrapper: "h-14 rounded-xl sm:rounded-2xl bg-content1 border border-divider/30",
                label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
              }}
            />
            <Input 
              label="Father's Name" 
              placeholder="Enter name"
              variant="flat"
              labelPlacement="outside"
              className="font-bold"
              classNames={{
                inputWrapper: "h-14 rounded-xl sm:rounded-2xl bg-content1 border border-divider/30",
                label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
              }}
            />
            <Input 
              label="Caretaker Name" 
              placeholder="Enter name"
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
      </div>
    </div>
  );
}
