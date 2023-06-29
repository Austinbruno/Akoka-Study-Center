import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import ToastSuccessAndError from "../molecules/toastSuccessAndError";

interface FormsProps {
  text: string;
  placeholders: string[];
  header: string;
  button: string;
  type: string[];
  name: string[];
  templateId: string;
  account_number: string;
  account_name: string;
  bank: string;
  AirtableTableName:string;
}


const NavbarSidelinkForm = (props: FormsProps) => {
  const {
    text,
    placeholders,
    header,
    type,
    name,
    button,
    templateId,
    account_name,
    account_number,
    bank,
    AirtableTableName
  } = props;
  const AIRTABLE_API_KEY = "keyAzWlYYIjcVJqaw";
  const AIRTABLE_BASE_ID = "appI3NTp3Bbhgi9dr" ;
  const AIRTABLE_TABLE_NAME = AirtableTableName;
  
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const sendToAirtable = async (data: any) => {
    console.log(data);
    if(data.amount) {
      data.amount = Number(data.amount)
    }
    try {
      await axios.post(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,

        {
          fields: data,
        },

        {
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error: any) {
      console.log(error.response);
      throw new Error("Failed to submit form data to Airtable.");
    }
  };

  const sendEmail = async (data: any) => {
    try {
      const result = await emailjs.send(
        "service_s1i95q2",
        templateId,
        data,
        "KSMP2QGoRwRIzzWk8"
      );

      if (result.status === 200) {
        setSuccessMessage("Email sent successfully!");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      }
    } catch (error: any) {
      setErrorMessage("Email not sent!");

      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      if (form.current) {
        const formData = new FormData(form.current);
        const data: any = {};
        formData.forEach((value, key) => {
          data[key] = value;
        });

        await Promise.all([sendEmail(data), sendToAirtable(data)]);

        form.current?.reset();

        setIsLoading(false);
      }
    } catch (error: any) {
      setIsLoading(false);
      setErrorMessage(error.message || "Failed to submit the form.");

      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  const disableBtnClx = isLoading ? "bg-[#a8a8a8]" : "bg-[#515C9E]";

  return (
    <div className="items-center justify-center xl:mx-auto md:mx-[14px] sm:mx-[13px]">
      <p className="xl:ml-[90px] mb-[36px] font-[400] text-[18px] xl:w-[955px] md:w-[754px] sm:w-[353px] leading-[27px] text-[#667085]">
        {text}
      </p>
      <p className="xl:ml-[90px] mb-[16px] font-[400] text-[18px] xl:w-[955px] md:w-[754px] sm:w-[353px] leading-[27px] text-[#667085]">
        {account_number}
      </p>
      <p className="xl:ml-[90px] mb-[16px] font-[400] text-[18px] xl:w-[955px] md:w-[754px] sm:w-[353px] leading-[27px] text-[#667085]">
        {account_name}
      </p>
      <p className="xl:ml-[90px] mb-[26px] font-[400] text-[18px] xl:w-[955px] md:w-[754px] sm:w-[353px] leading-[27px] text-[#667085]">
        {bank}
      </p>
      <h1 className="font-Inter font-[500] text-[20px] leading-[24px] text-[#344054] mb-[12px] xl:ml-[90px]">
        {header}
      </h1>

      <form
        ref={form}
        onSubmit={handleSubmit}
        className="xl:grid grid-cols-2 xl:gap-[12px] xl:ml-[90px] md:grid md:w-[433px] md:gap-[12px] xl:w-[433px] sm:flex flex-col sm:gap-[12px]"
      >
        {placeholders.map((placeholder, index) => {
          return (
            <input
              required
              key={index}
              type={type[index]}
              name={name[index]}
              // email= "user_email"
              placeholder={placeholder}
              className=" border-[solid] border-[#667085] border-[1px] rounded-[8px] font-[400] text-[16px] leading-[24px] text-[#667085]"
            />
          );
        })}
        <button
          disabled={isLoading}
          type="submit"
          value="Send"
          className={` ${disableBtnClx}  px-[50px] py-[10px]   rounded-[8px] font-Inter font-[700] leading-[24px] text-[16px] text-[#fff]`}
        >
          {isLoading ? "Please Wait...." : button}
        </button>
      </form>

      {successMessage && (
        <ToastSuccessAndError type="success" message={successMessage} />
      )}
      {errorMessage && (
        <ToastSuccessAndError type="error" message={errorMessage} />
      )}
    </div>
  );
};
export default NavbarSidelinkForm;
