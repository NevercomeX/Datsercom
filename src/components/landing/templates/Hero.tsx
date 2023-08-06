import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import Nevercomex from "../../nevercomex/copyright"

const Hero = () => (
  <Background color="bg-gray-100 " >
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'DATSERCOM\n'}
            <span className="text-primary-500">🚧</span>
          </>
        }
        description="Innovación y Servicios Informáticos en Cualquier Lugar."
        button={
          <div className='flex justify-center'>
           <p> 
           </p>
            </div>

        }
      />
    </Section>
  </Background>
);

export { Hero };
