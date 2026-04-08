import React from "react";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="min-h-screen bg-[#f3f3f3] flex flex-col items-center px-6 py-10">

      {/* Images en haut côte à côte */}
      <div className="flex justify-center items-center gap-6 mb-8">
        {/* Image du docteur */}
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-80 h-80 rounded-full object-cover shadow-lg"
        />

        {/* Logo */}
        <img
          src={doctor.logo}
          alt="logo"
          className="w-80 h-80 object-contain"
        />
      </div>

      {/* Infos du docteur alignées à gauche */}
      <div className="flex flex-col gap-5 w-full max-w-3xl">

        {/* Nom */}
        <h1 className="text-4xl font-bold italic text-black">
          {doctor.name}
        </h1>

        {/* Email */}
        <div className="flex items-center gap-4 text-xl">
          <a href={`mailto:${doctor.email}`}>
            <img src={doctor.icons.email} alt="email" className="w-8 h-8 object-contain cursor-pointer" />
          </a>
          <p>
            <span className="font-bold">EMAIL:</span>{" "}
            <a href={`mailto:${doctor.email}`} className="text-blue-700 underline">
              {doctor.email}
            </a>
          </p>
        </div>

        {/* Téléphone → WhatsApp */}
        <div className="flex items-center gap-4 text-xl">
          <a href={`https://wa.me/${doctor.phone1.replace(/\D/g,'')}`} target="_blank" rel="noreferrer">
            <img src={doctor.icons.phone} alt="phone" className="w-8 h-8 object-contain cursor-pointer" />
          </a>
          <p>
            <span className="font-bold">Phone:</span>{" "}
            <a href={`https://wa.me/${doctor.phone1.replace(/\D/g,'')}`} target="_blank" rel="noreferrer" className="underline text-blue-700">
              {doctor.phone1}
            </a>{" / "}
            <a href={`https://wa.me/${doctor.phone2.replace(/\D/g,'')}`} target="_blank" rel="noreferrer" className="underline text-blue-700">
              {doctor.phone2}
            </a>
          </p>
        </div>

        {/* Facebook */}
        <div className="flex items-center gap-4 text-xl">
          <a href={doctor.facebook} target="_blank" rel="noreferrer">
            <img src={doctor.icons.fb} alt="facebook" className="w-8 h-8 object-contain cursor-pointer" />
          </a>
          <p>
            <span className="font-bold">Facebook:</span>{" "}
            <a href={doctor.facebook} target="_blank" rel="noreferrer" className="text-black underline break-all">
              {doctor.facebook}
            </a>
          </p>
        </div>

        {/* Instagram */}
        <div className="flex items-center gap-4 text-xl">
          <a href={doctor.instagram} target="_blank" rel="noreferrer">
            <img src={doctor.icons.insta} alt="instagram" className="w-8 h-8 object-contain cursor-pointer" />
          </a>
          <p>
            <span className="font-bold">Instagram:</span>{" "}
            <a href={doctor.instagram} target="_blank" rel="noreferrer" className="text-blue-700 underline break-all">
              {doctor.instagram}
            </a>
          </p>
        </div>

        {/* Adresse → Google Maps */}
        <div className="flex items-start gap-4 text-xl">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(doctor.addressLine1 + " " + doctor.addressLine2)}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={doctor.icons.address} alt="address" className="w-8 h-8 object-contain mt-1 cursor-pointer" />
          </a>
          <div>
            <p>
              <span className="font-bold">Adresse :</span>{" "}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(doctor.addressLine1 + " " + doctor.addressLine2)}`}
                target="_blank"
                rel="noreferrer"
                className="underline text-purple-700"
              >
                {doctor.addressLine1}
              </a>
            </p>
            <p className="mt-2 underline text-red-600">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(doctor.addressLine2)}`}
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