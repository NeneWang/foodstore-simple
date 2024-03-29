import SectionTitleOne from "../SectionTitle/SectionTitleOne";
import TestimonialSlider from "./Elements/TestimonialSlider";

export default function TestimonialOne({ data, style }) {
  return (
    <div className="testimonial" style={style}>
      <div className="container">
        <SectionTitleOne showSubTitle align="center" subTitle="Testimonios">
          Que dice la gente de nosotros?
        </SectionTitleOne>
        <TestimonialSlider data={data} showArrows />
      </div>
    </div>
  );
}
