import React from 'react'
interface FormsProps {
  text: String
  placeholders: string[]
  header: string
  button: string
}

const NavbarSidelinkForm = (props:FormsProps) => {
  const {text, placeholders, header, button} = props
  return (
    <div className="items-center justify-center lg:mx-auto sm:mx-[13px]">
        <p className="lg:ml-[90px] mb-[36px] font-[400] text-[18px] lg:w-[955px] sm:w-[353px] leading-[27px] text-[#667085]">
          {text}
        </p>
        <h1 className="font-Inter font-[500] text-[20px] leading-[24px] text-[#344054] mb-[12px] lg:ml-[90px]">
        {header}
        </h1>
        
        <form className="lg:grid grid-cols-2 lg:gap-[12px] lg:ml-[90px]  lg:w-[433px] sm:flex flex-col sm:gap-[12px]">
          {placeholders.map((placeholder, index) => {
            return (
              <input
                key={index}
                type="text"
                placeholder={placeholder}
                className=" border-[solid] border-[#667085] border-[1px] rounded-[8px] font-[400] text-[16px] leading-[24px] text-[#667085]"
              />
            );
          })}
          <button className="px-[50px] py-[10px] bg-[#515C9E]  rounded-[8px] font-Inter font-[700] leading-[24px] text-[16px] text-[#fff]">
            {button}
          </button>
        </form>
      </div>
  )
}

export default NavbarSidelinkForm
