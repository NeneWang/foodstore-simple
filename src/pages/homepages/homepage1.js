import LayoutOne from "../../components/Layout/LayoutOne";
import SliderTwo from "../../components/Sections/Slider/SliderTwo";
import sliderData from "../../data/slider/sliderOne.json";
import IntroductionOne from "../../components/Sections/Introduction/IntroductionOne";
import introductionOneData from "../../data/introduction/introductionOne.json";
import IntroductionTwo from "../../components/Sections/Introduction/IntroductionTwo";
import introductionTwoData from "../../data/introduction/introductionTwo.json";


export default function homepage1() {
  return (
    <LayoutOne title="Homepage 1" data={sliderData} className="-style-1">
      <SliderTwo data={sliderData} className="-style-1" showDots />
      <IntroductionOne data={introductionOneData} />
      <IntroductionTwo data={introductionTwoData} />
    </LayoutOne>
  );
}
