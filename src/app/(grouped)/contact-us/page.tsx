import ContactInformation from "@/components/contact-information";
import ContactForm from "@/components/contact-form";

export default function Page() {
  return (
    <div className="lg:mx-auto lg:max-w-7xl">
      <div className="mx-5 my-[121px] flex flex-col items-center gap-24 lg:mx-8 lg:my-0 lg:flex-row">
        <ContactInformation />

        <ContactForm />
      </div>
    </div>
  );
}
