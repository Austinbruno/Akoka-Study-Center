import Donates from "@/component/molecules/donate";
import Footer from "@/component/layout/footer";
import Navbar from "@/component/layout/navbar";
import React from "react";
import PageHeading from "@/component/atom/pageHeading";
import NavbarSidelinkForm from "@/component/layout/navbarSidelinkForm";

const Library = () => {
  const placeholder = [
    "Surname",
    "Other name",
    "Phone Number",
    "Email Address",
  ];
  const type = ["text",  "text", "tel" ,  "email"];
  const name = ["user_surname",  "user_othername", "user_tel", "user_email", ];

  return (
    <div className="mx-auto ">
      <Navbar />
      <PageHeading title="Library" />
      <NavbarSidelinkForm
        text={"Akoka has a convenient study room stocked with books of several disciplines. It provides an atmosphere of serious work. If you want to get stuff done, come to Akoka library."}
        placeholders={placeholder}
        button={"Submit"} header={""} type={type} name={name} templateId="template_jdgnikw" account_number={""} account_name={""} bank={""} AirtableTableName={"Library Form"}      />
      <div className="mt-[100px]">
        <Donates />
      </div>
      <Footer />
    </div>
  );
};

export default Library;
