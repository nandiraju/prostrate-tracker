import { 
  Input, 
  Divider,
  Textarea
} from "@heroui/react";

export default function ContactSection() {
  return (
    <div className="space-y-10 pb-12">
      <div className="flex flex-col items-center text-center px-4 mb-8">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 leading-tight">
          Contact Information
        </h2>
        <p className="text-default-500 text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] mt-2 opacity-70">
          Current and permanent residence details for follow-up communications.
        </p>
      </div>

      <div className="space-y-10">
        {/* Address Grid */}
        <div className="grid grid-cols-1 gap-8">
          <Textarea 
            label="Local Address" 
            placeholder="Current residential address"
            variant="bordered"
            labelPlacement="outside"
            className="font-bold"
            minRows={2}
            classNames={{
              inputWrapper: "rounded-xl sm:rounded-2xl bg-content1 border-divider transition-all hover:border-primary",
              label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
            }}
          />
          <Textarea 
            label="Permanent Address" 
            placeholder="Legal permanent address"
            variant="bordered"
            labelPlacement="outside"
            className="font-bold"
            minRows={2}
            classNames={{
              inputWrapper: "rounded-xl sm:rounded-2xl bg-content1 border-divider",
              label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
            }}
          />
        </div>

        <Divider className="opacity-20" />

        {/* Contact Numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex flex-wrap gap-4 sm:gap-8">
          <Input 
            type="tel"
            label="Telephone Number" 
            placeholder="Landline"
            variant="flat"
            labelPlacement="outside"
            className="font-bold"
            classNames={{
              inputWrapper: "h-14 rounded-xl sm:rounded-2xl bg-content1 border border-divider/30",
              label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
            }}
          />
          <Input 
            type="tel"
            label="Mobile Number" 
            placeholder="+91-0000000000"
            variant="flat"
            labelPlacement="outside"
            className="font-bold"
            classNames={{
              inputWrapper: "h-14 rounded-xl sm:rounded-2xl bg-content1 border border-divider/30",
              label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
            }}
          />
          <Input 
            type="email"
            label="Email ID" 
            placeholder="patient@example.com"
            variant="flat"
            labelPlacement="outside"
            className="font-bold"
            classNames={{
              inputWrapper: "h-14 rounded-xl sm:rounded-2xl bg-content1 border border-divider/30",
              label: "text-default-600 mb-2 font-black uppercase text-[10px] tracking-widest"
            }}
          />
        </div>

        {/* Caretaker & Doctor Grid */}
        <div className="pt-4 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-[2.5rem] bg-gradient-to-br from-content1 to-background border border-divider/50">
             <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6">Caretaker / Relative Details</h3>
             <div className="space-y-6">
                <Input 
                  label="Full Name" 
                  placeholder="Relation contact name"
                  size="sm"
                  variant="underlined"
                  labelPlacement="outside"
                />
                <div className="grid grid-cols-2 gap-6">
                  <Input 
                    label="Mobile" 
                    placeholder="Mobile"
                    size="sm"
                    variant="underlined"
                    labelPlacement="outside"
                  />
                  <Input 
                    label="Relation" 
                    placeholder="Relation"
                    size="sm"
                    variant="underlined"
                    labelPlacement="outside"
                  />
                </div>
             </div>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-[2.5rem] bg-gradient-to-br from-content1 to-background border border-divider/50">
             <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6">Doctor / Referral Details</h3>
             <div className="space-y-6">
                <Input 
                  label="Doctor Name" 
                  placeholder="Primary physician"
                  size="sm"
                  variant="underlined"
                  labelPlacement="outside"
                />
                <div className="grid grid-cols-2 gap-6">
                  <Input 
                    label="Mobile" 
                    placeholder="Mobile"
                    size="sm"
                    variant="underlined"
                    labelPlacement="outside"
                  />
                  <Input 
                    label="Clinic / Hospital" 
                    placeholder="Institution"
                    size="sm"
                    variant="underlined"
                    labelPlacement="outside"
                  />
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
