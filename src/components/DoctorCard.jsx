import React from "react";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="min-h-screen w-full bg-[#f3f3f3] flex flex-col items-center px-4 sm:px-6 py-10">

      {/* Images en haut côte à côte */}
      <div className="flex justify-center items-center gap-4 sm:gap-6 mb-8">
        {/* Image du docteur */}
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
        />

        {/* Logo */}
        <img
          src={doctor.logo}
          alt="logo"
          className="w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain"
        />
      </div>

      {/* Infos du docteur alignées à gauche */}
      <div className="flex flex-col gap-4 sm:gap-5 w-full max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold italic text-black">
          {doctor.name}
        </h1>

        {/* Email */}
        <div className="flex items-center gap-3 sm:gap-4 text-base sm:text-xl">
          <img src={doctor.icons.email} alt="email" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
          <p>
            <span className="font-bold">EMAIL:</span>{" "}
            <a href={`mailto:${doctor.email}`} className="text-blue-700 underline">
              {doctor.email}
            </a>
          </p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3 sm:gap-4 text-base sm:text-xl">
          <img src={doctor.icons.phone} alt="phone" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
          <p>
            <span className="font-bold">Phone:</span>{" "}
            <a
              href={`https://wa.me/${doctor.phone1.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="text-green-700 underline"
            >
              {doctor.phone1}
            </a>{" / "}{doctor.phone2}
          </p>
        </div>

        {/* Facebook */}
        <div className="flex items-center gap-3 sm:gap-4 text-base sm:text-xl">
          <img src={doctor.icons.fb} alt="facebook" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
          <p>
            <span className="font-bold">Facebook:</span>{" "}
            <a
              href={doctor.facebook}
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 underline break-words sm:break-normal"
            >
              {doctor.facebook}
            </a>
          </p>
        </div>

        {/* Instagram */}
        <div className="flex items-center gap-3 sm:gap-4 text-base sm:text-xl">
          <img src={doctor.icons.insta} alt="instagram" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
          <p>
            <span className="font-bold">Instagram:</span>{" "}
            <a
              href={doctor.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-pink-600 underline break-words sm:break-normal"
            >
              {doctor.instagram}
            </a>
          </p>
        </div>

        {/* Adresse */}
        <div className="flex items-start gap-3 sm:gap-4 text-base sm:text-xl">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Dr amel ben brahim orthodontiste, 39 Av. Habib Bourguiba, Nabeul 8000")}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={doctor.icons.address} alt="address" className="w-6 h-6 sm:w-8 sm:h-8 object-contain mt-1 cursor-pointer" />
          </a>
          <div>
            <p>
              <span className="font-bold">Adresse :</span>{" "}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Dr amel ben brahim orthodontiste, 39 Av. Habib Bourguiba, Nabeul 8000")}`}
                target="_blank"
                rel="noreferrer"
                className="underline text-purple-700"
              >
                {doctor.addressLine1}
              </a>
            </p>
            <p className="mt-1 underline text-red-600">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Dr amel ben brahim orthodontiste, 39 Av. Habib Bourguiba, Nabeul 8000")}`}
                target="_blank"
                rel="noreferrer"
              >
                {doctor.addressLine2}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;