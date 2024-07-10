import TutorInfo from "@/components/TutorInfo";
import StudentInfo from "@/components/StudentInfo";
import { Spacer, Select } from "@nextui-org/react";

const locations = [
  {key: "usa", label: "USA"},
  {key: "uk", label: "UK"},
  {key: "australia", label: "Australia"},
  {key: "nigeria", label: "Nigeria"},
];

const personalities = [
  {key: "amable", label: "Amable"},
  {key: "respetuoso", label: "Respetuoso"},
  {key: "culto", label: "Culto"},
  {key: "estricto", label: "Estricto"},
];

export default function HomePage() {
  return (
    <>
      <section
        className="relative z-10 overflow-hidden bg-white pb-16 pt-16 dark:bg-gray-dark flex justify-center items-center"
      >
        <section className="container px-4 flex justify-center flex-col gap-6">
          <section>
            <StudentInfo />
          </section>
          <section className="flex gap-6">
            <Select 
              label="Ubicación de tutor" 
              className="max-w-xs" 
            >
              {locations.map((location) => (
                <SelectItem key={location.key}>
                  {location.label}
                </SelectItem>
              ))}
            </Select>
            <Select 
              label="Ubicación de tutor" 
              className="max-w-xs" 
            >
              {personalities.map((personality) => (
                <SelectItem key={personality.key}>
                  {personality.label}
                </SelectItem>
              ))}
            </Select>
          </section>
          <section className="grid grid-cols-3 gap-6">
            <TutorInfo />
            <TutorInfo />
            <TutorInfo />
            <TutorInfo />
            <TutorInfo />
            <TutorInfo />
            <TutorInfo />
          </section>
        </section>
      </section>
    </>
  );
}
