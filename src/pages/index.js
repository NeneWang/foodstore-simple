
import LayoutFour from "../components/Layout/LayoutFour";
import SliderTwo from "../components/Sections/Slider/SliderTwo";
import sliderData from "../data/slider/sliderOne.json";
import IntroductionOne from "../components/Sections/Introduction/IntroductionOne";
import introductionOneData from "../data/introduction/introductionOne.json";

export default function homepage1() {
  return (
    <LayoutFour title="A Bin Distribuciones" data={sliderData} className="-style-1">
      <IntroductionOne data={introductionOneData} />
    </LayoutFour>
  );
}
