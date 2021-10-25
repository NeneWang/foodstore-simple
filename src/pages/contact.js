import { useForm } from "react-hook-form";

import LayoutFour from "../components/Layout/LayoutFour";
import InstagramTwo from "../components/Sections/Instagram/InstagramTwo";
import { Breadcrumb, BreadcrumbItem } from "../components/Other/Breadcrumb";
import ContactInfoItem from "../components/Pages/Contact/ContactInfoItem";
import contactData from "../data/pages/contact.json";

export default function () {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <LayoutFour title="Contáctanos">
      <Breadcrumb title="Contáctanos">
        <BreadcrumbItem name="Home" />
        <BreadcrumbItem name="Contáctanos" current />
      </Breadcrumb>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3 className="contact-title">Contact info</h3>
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
            <div className="col-12 col-md-6">
              <h3 className="contact-title">Contáctanos</h3>
              <div className="contact-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="input-validator">
                    <input
                      type="text"
                      name="name"
                      placeholder="Nombre"
                      ref={register({ required: true })}
                    />
                    {errors.name && (
                      <span className="input-error">Please provide a name</span>
                    )}
                  </div>
                  <div className="input-validator">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      ref={register({ required: true })}
                    />
                    {errors.email && (
                      <span className="input-error">
                        Please provide an email
                      </span>
                    )}
                  </div>
                  <div className="input-validator">
                    <textarea
                      name="message"
                      id=""
                      cols="30"
                      rows="3"
                      placeholder="Mensaje"
                    />
                  </div>
                  <button className="btn -dark">Enviar Mensaje</button>
                </form>
              </div>
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
      <InstagramTwo />
    </LayoutFour>
  );
}
