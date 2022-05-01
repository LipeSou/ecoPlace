import React, { useState } from "react";
import ImagemPrimeiroSlide from '../../../assets/img/imgPrimeiroSlide.png'
import HouseIcon from '../../../assets/img/houseIcon.png'
import ButtonLeftNormal from '../../../assets/img/buttonLeftNormal.png'
import ButtonRightNormal from '../../../assets/img/buttonRightNormal.png'
import { 
  Arrow, 
  ArrowImage, 
  Container, 
  Desc, 
  DescInfo, 
  Image, 
  ImgContainer, 
  ImgInfo, 
  InfoContainer, 
  Slide, 
  SliderContainer, 
  Title, 
  Wrapper 
} from "./styled";


export const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  const sliderItems = [
    {
      id: 1,
      img: ImagemPrimeiroSlide,
      title: "Construa, não destrua!",
      desc: "Os melhores materiais certificados com selo de sustentabilidade, para o seu projeto decolar com qualidade e responsabilidade ambiental.",
      bg: "0F2105",
    },
    {
      id: 2,
      img: ImagemPrimeiroSlide,
      title: "Construa, não destrua!",
      desc: "Os melhores materiais certificados com selo de sustentabilidade, para o seu projeto decolar com qualidade e responsabilidade ambiental.",
      bg: "0F2105",
    },
    {
      id: 3,
      img: ImagemPrimeiroSlide,
      title: "Construa, não destrua!",
      desc: "Os melhores materiais certificados com selo de sustentabilidade, para o seu projeto decolar com qualidade e responsabilidade ambiental.",
      bg: "0F2105",
    },
  ];

    return (
        <Container>
            <SliderContainer>
                <Arrow direction="left" onClick={() => handleClick("left")}>
                    <ArrowImage src={ButtonLeftNormal} />
                </Arrow>
                <Wrapper slideIndex={slideIndex}>
                    {sliderItems.map((item) => (
                        <Slide bg={item.bg} key={item.id}>
                            <ImgContainer>
                                <Image src={item.img} />
                            </ImgContainer>
                            <InfoContainer>
                                <ImgInfo>
                                    <Image src={HouseIcon} style={{width: 80, height: 80}} />
                                </ImgInfo>
                                <Title>{item.title}</Title>
                                <DescInfo>
                                    <Desc>{item.desc}</Desc>                                
                                </DescInfo>
                            </InfoContainer>
                        </Slide>
                    ))}
                </Wrapper>
                <Arrow direction="right" onClick={() => handleClick("right")}>
                    <ArrowImage src={ButtonRightNormal} />
                </Arrow>
            </SliderContainer>
        </Container>
    )
}

export default Slider;