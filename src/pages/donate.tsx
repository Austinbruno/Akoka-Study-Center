import Donates from "@/component/molecules/donate";
import Footer from "@/component/layout/footer";
import PageHeading from "@/component/atom/pageHeading";
import Navbar from "@/component/layout/navbar";
import React from "react";
import NavbarSidelinkForm from "@/component/layout/navbarSidelinkForm";

const Donate = () => {
  
  const placeholder = ["Name", "Email Address", "Phone Number", "Amount"];
  const type = ["text", "email", "tel", "number"];
  const name = ["user_name", "user_email", "user_tel", "amount"];

  return (
    <div className="mx-auto ">
      <Navbar />

      <PageHeading title="Donate" />

      <NavbarSidelinkForm
        text={" Akoka Study Centre is one of the hundreds of centers around the world inspired by the teachings of St.josemaria Escriva, the Founder of opus Dei - an institution of the Catholic Church that Promotes the universal call to holiness by teaching that professional work and study can be sanctified by doing it well, with love and for the glory. "}
        placeholders={placeholder}
        header={"Please fill in your contact Information"}
        button={"Submit"}
        type={type}
        name={name}
        templateId="template_xjjithj"
        account_number={"Account Number: 1010148311"}
        account_name={"Account Name: Akoka Study Center"}
        bank={" Bank: Zenith Bank"}  AirtableTableName={"Donate Form"}      />

      <div className="mt-[100px]">
        <Donates />
      </div>
      <Footer />
    </div>
  );
};

export default Donate;
