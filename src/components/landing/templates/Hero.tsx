import { Background } from "../background/Background";
import { HeroOneButton } from "../hero/HeroOneButton";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";
import { CentralImagen } from "../feature/CentralImage";
import { ContactMe } from "../hero/ContactMe";

const Hero = () => (
  <Background color="bg-gray-100 ">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />} children={<> </>}></NavbarTwoColumns>
    </Section>

    <Section yPadding="">
      <HeroOneButton
        title={
          <>
            {"DATSERCOM\n"}
            <span className="text-primary-500"></span>
          </>
        }
        description="Innovación y Servicios Informáticos en Cualquier Lugar."
        button={
          <div className="flex justify-center">
            <p></p>
          </div>
        }
      />
      <div className="flex-col lg:flex lg:flex-row ">
        {" "}
        <CentralImagen image="/assets/dellimages/datsercom1.jpg"></CentralImagen>
        <CentralImagen image="/assets/dellimages/datsercom2.jpg"></CentralImagen>
      </div>
      <div className="flex-col lg:flex lg:flex-row justify-center ">
        <ContactMe />
      </div>
    </Section>
  </Background>
);

export { Hero };
