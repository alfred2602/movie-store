import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react"
import { useState } from 'react'

function AgeSlider() {
    const [age, setAge] = useState(25)

    return (
        <Slider defaultValue={age} onChange={setAge}>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={6}>
                {age}
            </SliderThumb>
        </Slider>
    )
}

export default AgeSlider