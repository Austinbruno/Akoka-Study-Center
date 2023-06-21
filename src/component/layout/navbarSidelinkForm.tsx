import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
interface FormsProps {
  text: string;
  placeholders: string[];
  header: string;
  button: string;
  type: string[];
  name: string[];
  templateId: string
}


const NavbarSidelinkForm = (props: FormsProps) => {
  const { text, placeholders, header, type,name, button, templateId } = props;
  
  const form = useRef<HTMLFormElement>(null);

  
const sendEmail = (e: React.FormEvent) => {
  e.preventDefault();
  if (form.current) {
    emailjs
      .sendForm("service_s1i95q2", templateId, form.current, "KSMP2QGoRwRIzzWk8")
      .then(
        (result) => {
          console.log(result.text);
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
};
  return (
    <div className="items-center justify-center xl:mx-auto md:mx-[14px] sm:mx-[13px]">
      <p className="xl:ml-[90px] mb-[36px] font-[400] text-[18px] xl:w-[955px] md:w-[754px] sm:w-[353px] leading-[27px] text-[#667085]">
        {text}
      </p>
      <h1 className="font-Inter font-[500] text-[20px] leading-[24px] text-[#344054] mb-[12px] xl:ml-[90px]">
        {header}
      </h1>


      <form ref={form}  onSubmit={sendEmail} className="xl:grid grid-cols-2 xl:gap-[12px] xl:ml-[90px] md:grid md:w-[433px] md:gap-[12px] xl:w-[433px] sm:flex flex-col sm:gap-[12px]">
        {placeholders.map((placeholder, index) => {
          return (
            <input
              key={index}
              type= {type[index]}
              name={name[index]}
              // email= "user_email"
              placeholder={placeholder}
              className=" border-[solid] border-[#667085] border-[1px] rounded-[8px] font-[400] text-[16px] leading-[24px] text-[#667085]"
            />
          );
        })}
        <button type="submit" value="Send" className="px-[50px] py-[10px] bg-[#515C9E]  rounded-[8px] font-Inter font-[700] leading-[24px] text-[16px] text-[#fff]">
          {button}
        </button>
      </form>
    </div>
  );
};

export default NavbarSidelinkForm;

