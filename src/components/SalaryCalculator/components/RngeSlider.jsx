import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";

function RngeSlider({ member, setter }) {
  const { name, brutto, netto } = member;

  return (
    <div className="m-2">
      <Slider onChange={(val) => setter({ ...member, brutto: Number(val) })} focusThumbOnChange={false} value={brutto} min={0} max={3000000} step={10}>
        <SliderTrack bg="red.100">
          <SliderFilledTrack bg="azure" />
        </SliderTrack>
        <SliderThumb boxSize={5} />
      </Slider>
    </div>
  );
}

export default RngeSlider;
