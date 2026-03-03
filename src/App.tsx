import { useState } from "react";
import { 
  ClipboardList,
  User,
  MapPin,
  Activity,
  Stethoscope,
  Layers,
  Scissors,
  Radio as LucideRadio,
  FlaskConical,
  HeartPulse,
  FileText,
  ChevronRight,
  CheckCircle2,
  Heart,
  Menu,
  Sun,
  Moon
} from "lucide-react";
import { 
  Button, 
  Tabs, 
  Tab, 
  ScrollShadow,
  Drawer, 
  DrawerContent, 
  DrawerHeader, 
  DrawerBody, 
  useDisclosure,
  Navbar, 
  NavbarContent,
  NavbarItem
} from "@heroui/react";
import { useTheme } from "next-themes";
import RegistrationSection from "@/components/form-sections/RegistrationSection";
import ContactSection from "@/components/form-sections/ContactSection";
import DemographicsSection from "@/components/form-sections/DemographicsSection";
import HistorySection from "@/components/form-sections/HistorySection";
import LifestyleSection from "@/components/form-sections/LifestyleSection";
import StagingSection from "@/components/form-sections/StagingSection";
import MetastasisSection from "@/components/form-sections/MetastasisSection";
import TreatmentSection from "@/components/form-sections/TreatmentSection";
import SurgerySection from "@/components/form-sections/SurgerySection";
import RadiotherapySection from "@/components/form-sections/RadiotherapySection";
import ChemotherapySection from "@/components/form-sections/ChemotherapySection";
import FollowUpSection from "@/components/form-sections/FollowUpSection";

const sections = [
  { id: "registration", title: "Registration", icon: ClipboardList },
  { id: "contact", title: "Contact Info", icon: User },
  { id: "demographics", title: "Demographics", icon: MapPin },
  { id: "history", title: "Clinical History", icon: Activity },
  { id: "lifestyle", title: "Lifestyle", icon: Heart },
  { id: "staging", title: "Tumor Staging", icon: Stethoscope },
  { id: "metastasis", title: "Metastasis", icon: Layers },
  { id: "treatment", title: "Treatments", icon: HeartPulse },
  { id: "surgery", title: "Surgery", icon: Scissors },
  { id: "radiotherapy", title: "Radiotherapy", icon: LucideRadio },
  { id: "chemotherapy", title: "Chemotherapy", icon: FlaskConical },
  { id: "followup", title: "Follow-up", icon: FileText },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("registration");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { theme, setTheme } = useTheme();

  const currentIndex = sections.findIndex(s => s.id === activeTab);

  const nextSection = () => {
    if (currentIndex < sections.length - 1) {
      setActiveTab(sections[currentIndex + 1].id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevSection = () => {
    if (currentIndex > 0) {
      setActiveTab(sections[currentIndex - 1].id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navContent = (closeDrawer?: boolean) => (
    <div className="flex flex-col gap-1 w-full">
      {sections.map((section, index) => {
        const Icon = section.icon;
        const isActive = activeTab === section.id;
        return (
          <Button
            key={section.id}
            variant={isActive ? "flat" : "light"}
            color={isActive ? "primary" : "default"}
            onPress={() => {
              setActiveTab(section.id);
              if (closeDrawer) onOpenChange();
            }}
            className={`justify-start h-12 w-full px-4 rounded-xl transition-all duration-300 ${
              isActive ? "bg-primary/10 scale-[1.02] font-black" : "font-semibold opacity-70 hover:opacity-100"
            }`}
            startContent={<Icon size={18} className={isActive ? "text-primary" : "text-default-500"} />}
          >
            <span className="flex-1 text-left">{section.title}</span>
            {isActive && (
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            )}
            {!isActive && index < currentIndex && (
              <CheckCircle2 size={14} className="text-success" />
            )}
          </Button>
        );
      })}
    </div>
  );

  return (
    <div className="flex h-dvh w-full bg-background overflow-hidden font-sans text-foreground select-none">
      
      {/* Permanent Sidebar for Desktop */}
      <aside className="hidden lg:flex flex-col w-72 bg-content1 border-r border-divider h-full">
        <div className="flex items-center gap-3 p-6 border-b border-divider h-20">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground flex-shrink-0">
            <ClipboardList className="w-6 h-6" />
          </div>
          <h1 className="font-black text-xl tracking-tighter uppercase whitespace-nowrap">
            PROSTRATE<span className="text-primary italic">FORM</span>
          </h1>
        </div>
        <div className="p-3 flex-1 overflow-y-auto">
          {navContent(false)}
        </div>
        <div className="p-6 border-t border-divider">
           <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                 <div className="w-2 h-2 rounded-full bg-success ring-4 ring-success/20" />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black uppercase tracking-widest leading-none">Status</span>
                 <span className="text-[11px] font-bold text-success/80">Online Portal Enabled</span>
              </div>
           </div>
        </div>
      </aside>

      {/* Drawer for Sidebar Navigation */}
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="left"
        size="xs"
        backdrop="blur"
      >
        <DrawerContent className="bg-content1/80 backdrop-blur-xl border-r border-divider">
          {() => (
            <>
              <DrawerHeader className="flex flex-col gap-1 p-6 border-b border-divider">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground">
                    <ClipboardList className="w-6 h-6" />
                  </div>
                  <div>
                    <h1 className="font-black text-xl tracking-tighter uppercase">
                      PROSTRATE<span className="text-primary italic">FORM</span>
                    </h1>
                  </div>
                </div>
              </DrawerHeader>
              <DrawerBody className="p-2">
                <ScrollShadow hideScrollBar className="h-full">
                   {navContent(true)}
                </ScrollShadow>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full bg-content2/10 relative overflow-x-hidden min-w-0">

        {/* Mobile-First Header */}
        <Navbar
          isBordered={false}
          maxWidth="full"
          className="bg-background/80 backdrop-blur-md sticky top-0 z-40 border-b border-divider/50"
          classNames={{ wrapper: "px-4 sm:px-6 h-16 sm:h-20" }}
        >
          <NavbarContent justify="start" className="gap-3">
             <Button
                isIconOnly
                variant="light"
                color="primary"
                onPress={onOpen}
                className="rounded-full active:scale-90 lg:hidden"
             >
                <Menu size={22} className="stroke-[2.5]" />
             </Button>
             <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg sm:text-2xl font-black tracking-tight leading-none truncate max-w-[150px] sm:max-w-none">
                    {sections.find(s => s.id === activeTab)?.title}
                  </h2>
                  <span className="text-[9px] font-black px-1.5 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20 uppercase whitespace-nowrap">
                    #{currentIndex + 1}
                  </span>
                </div>
                <p className="text-[10px] text-default-400 font-bold uppercase tracking-wider mt-0.5 flex items-center gap-1.5">
                   <span className="w-1.5 h-1.5 rounded-full bg-success ring-2 ring-success/20" />
                   Clinic Portal
                </p>
             </div>
          </NavbarContent>

          <NavbarContent justify="end" className="gap-2">
            <Button
              isIconOnly
              variant="flat"
              color="default"
              radius="full"
              onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="font-bold bg-content2/50"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <NavbarItem className="flex">
                <Button
                color="primary"
                variant="flat"
                radius="full"
                isIconOnly
                className="sm:w-auto sm:px-4 font-black text-xs"
                >
                <CheckCircle2 className="w-4 h-4" />
                <span className="hidden sm:inline ml-2">SUBMIT</span>
                </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>

        <div className="flex-1 flex flex-col min-h-0 bg-transparent overflow-hidden">
          {/* Visual Progress Bar (Static) */}
          <div className="w-full max-w-4xl mx-auto px-5 py-4 bg-background/30 backdrop-blur-sm border-b border-divider/20 flex-shrink-0">
             <div className="flex justify-between items-center mb-1.5">
                <span className="text-[9px] font-black text-default-400 uppercase tracking-widest">Progress Matrix</span>
                <span className="text-[9px] font-black text-primary bg-primary/10 px-1.5 py-0.5 rounded italic">
                  {Math.round(((currentIndex + 1) / sections.length) * 100)}% COMPLETE
                </span>
             </div>
             <div className="h-1.5 w-full bg-default-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-blue-500 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                  style={{ width: `${((currentIndex + 1) / sections.length) * 100}%` }}
                />
             </div>
          </div>

          {/* Scrollable Form Content */}
          <div className="flex-1 overflow-y-auto momentum-scroll min-h-0">
            <div className="w-full max-w-4xl mx-auto p-3 sm:p-6 lg:p-8 overflow-x-hidden">
              <Tabs
                selectedKey={activeTab}
                onSelectionChange={(key) => setActiveTab(key as string)}
                variant="underlined"
                color="primary"
                classNames={{
                  tabList: "hidden",
                  panel: "p-0"
                }}
              >
                <Tab key="registration"><RegistrationSection /></Tab>
                <Tab key="contact"><ContactSection /></Tab>
                <Tab key="demographics"><DemographicsSection /></Tab>
                <Tab key="history"><HistorySection /></Tab>
                <Tab key="lifestyle"><LifestyleSection /></Tab>
                <Tab key="staging"><StagingSection /></Tab>
                <Tab key="metastasis"><MetastasisSection /></Tab>
                <Tab key="treatment"><TreatmentSection /></Tab>
                <Tab key="surgery"><SurgerySection /></Tab>
                <Tab key="radiotherapy"><RadiotherapySection /></Tab>
                <Tab key="chemotherapy"><ChemotherapySection /></Tab>
                <Tab key="followup"><FollowUpSection /></Tab>
              </Tabs>
            </div>
          </div>

          {/* Fixed Footer Buttons */}
          <div className="w-full bg-background/80 backdrop-blur-lg border-t border-divider flex-shrink-0 z-40">
            <div className="w-full max-w-4xl mx-auto px-4 py-3 sm:p-6 flex flex-row items-center gap-2 sm:gap-4">
              <Button
                size="sm"
                variant="flat"
                onPress={prevSection}
                disabled={currentIndex === 0}
                className="flex-1 font-black text-[10px] sm:text-xs h-12 rounded-xl bg-content2 min-w-0"
              >
                PREVIOUS
              </Button>

              <Button
                size="sm"
                color="primary"
                variant="flat"
                onPress={nextSection}
                disabled={currentIndex === sections.length - 1}
                endContent={<ChevronRight size={14} className="flex-shrink-0" />}
                className="flex-[1.5] font-black text-[10px] sm:text-xs h-12 rounded-xl min-w-0"
              >
                {currentIndex === sections.length - 1 ? "FINISH" : "CONTINUE"}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
