import { useForm } from "react-hook-form";
import LayoutFour from "../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../components/Other/Breadcrumb";
import ContactInfoItem from "../components/Pages/Contact/ContactInfoItem";
import contactData from "../data/pages/contact.json";

export default function () {
  
  return (
    <LayoutFour title="Contáctanos">
      <Breadcrumb title="Contáctanos">
        <BreadcrumbItem name="Contáctanos" current />
      </Breadcrumb>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3 className="contact-title">Informacion de contacto</h3>
              {contactData &&
                contactData.map((item, index) => (
                  <ContactInfoItem
                    key={index}
                    iconClass={item.iconClass}
                    title={item.title}
                    detail={item.detail}
                  />
                ))}
            </div>
            {/* Put the qr here */}
            <div className="col-12 col-md-6">
                  <img src="/assets/images/qr.png" alt="" />
            </div>

            <div className="col-12">
              
            <h4>Donde Servimos?</h4>
            <p>Servimos a toda la ciudad de Buenos Aires</p>
              <iframe
                className="contact-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.44379372183!2d-58.503509643395816!3d-34.61566236068864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sus!4v1635124808178!5m2!1sen!2sus"
                width="100%"
                height="450"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
      {/* <InstagramTwo /> */}
    </LayoutFour>
  );
}
