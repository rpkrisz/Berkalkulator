import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";

function RngeSlider({ brutto, setter }) {

  return (
    <div>
      <Slider onChange={(val) => setter(Number(val))} focusThumbOnChange={false} value={brutto} min={0} max={3000000} step={10}>
        <SliderTrack bg="red.100">
          <SliderFilledTrack bg="azure" />
        </SliderTrack>
        <SliderThumb boxSize={5} />
      </Slider>
    </div>
  );
}

export default RngeSlider;
