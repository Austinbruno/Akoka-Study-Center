import React from "react";

const Map = () => (
  <div className="border-solid border-[#667085] border-[2px] rounded-[8px]  xl:ml-[80px]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0566811385593!2d3.3806073793457023!3d6.514510300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8cf9ec006285%3A0x5a9dd51fdcd0534b!2sAkoka%20Study%20Centre!5e0!3m2!1sen!2sng!4v1685550737874!5m2!1sen!2sng"
      className="xl:w-[600px] md:w-full sm:w-[338px] xl:h-[450px] md:h-[421px] sm:h-[244px]"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
);

export default Map;
