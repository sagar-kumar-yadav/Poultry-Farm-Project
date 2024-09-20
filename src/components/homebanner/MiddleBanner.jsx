import React from "react";
import "../homebanner/middleBanner.css";
import { Link } from "react-router-dom";

const MiddleBanner = () => {
  return (
    <section
      id="about"
      className="about dark:bg-[#f7f7f7] dark:text-black w-[97%] flex justify-center items-center m-auto"
    >
      <div className="about_main_cont w-[75%] mt-24">
        <div className="about_heading_sec">
          <span className="aboutTitle max-sm:text-3xl">About Us</span>
          <span className="aboutDesc max-sm:p-0 max-sm:text-sm ">
            Established in year 2016, “Sainath Agro” is one of the leading
            manufacturers of Poultry Equipments,Poultry Feed,Poultry
            services,All Survey Services, Building Survey,Control Survey etc. We
            offer these at market leading rates.
          </span>
        </div>

        <div className="about_grid w-full flex flex-col lg:flex-row gap-10 2xl:gap-20 pt-4">
          <div className="about_grid_cont flex-grow-[0.7]">
            <h3 className="about_grid_heading max-sm:mb-2 max-sm:text-2xl">
              Get to know us!👀
            </h3>
            <div className="about_content_details">
              <p className="about_para">
                A place that offers the best quality poultry Equipments,poultry
                Cages,Nipple System,Drinking and Feeding System, Land Surveying
                work services. We are proud to introduce ourselves as a
                fast-paced service provider for Land Surveying Work in India.
                Our rich expertise and experience enables us to deliver
                competent consultancy services across real estate, construction,
                infrastructure and corporate sectors. Backed by a team of
                skilled professionals, we undertake a variety of survey services
                ranging from Engineering land survey, contour survey, layout
                plot demarcation, plot preparations and volume of excavation and
                filling of earthmoving works & many more. MANDLIK INFRA has
                various completed projects and current projects running in and
                around different states of India MANDLIK INFRA has expanded its
                operations from a well-equipped office In Sangamner (Nashik),
                Maharashtra. Being a survey partner, our focus is on reinforcing
                relationships with our clients by gaining in-depth understanding
                of their projects and meeting land survey challenges. MANDLIK
                INFRA promises of being professional, prompt, punctual and
                perfect in all its endeavors.
              </p>
            </div>
            <div className=" flex gap-10">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-45}
                duration={500}
                className="hire_me_btn text-lg text-white rounded-md py-3 px-5"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="about_skills pt-4 flex-grow-[0.3] flex flex-col">
            <h3 className="about_skills_header max-sm:text-2xl  max-sm:m-1">
              Manufacturer🎉
            </h3>
            <div className="skills pb-4">
              <div className="skill max-sm:m-1">Wholesaler</div>
              <div className="skill max-sm:m-1">CSS</div>
              <div className="skill max-sm:m-1">JavaScript</div>
              <div className="skill max-sm:m-1">React.js</div>
              <div className="skill max-sm:m-1">Next.js</div>
              <div className="skill max-sm:m-1">JAVA</div>
              <div className="skill max-sm:m-1">Python</div>
              <div className="skill max-sm:m-1">Node.js</div>
              <div className="skill max-sm:m-1">Express.js</div>
              <div className="skill max-sm:m-1">MongoDB</div>
              <div className="skill max-sm:m-1">MySql</div>
              <div className="skill max-sm:m-1">Git</div>
              <div className="skill max-sm:m-1">Bootstrap</div>
              <div className="skill max-sm:m-1">Tailwind</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiddleBanner;
