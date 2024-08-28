import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Servidores en rack PowerEdge"
  >
    <VerticalFeatureRow
      title="Servidores de un conector"
      description="Los servidores en rack de un socket (una sola CPU) ofrecen un equilibrio rentable entre el rendimiento y la capacidad de almacenamiento para facilitar la TI. Están diseñados para crecer y evolucionar fácilmente a la par de su negocio."
      image="/assets/dellimages/dell04.png"
      imageAlt="SERVIDORES DE UN CONECTOR"
    />
    <VerticalFeatureRow
      title="Servidores de dos conector"
      description="Los servidores en rack de dos sockets (CPU doble) brindan una amplia variedad de funciones para admitir las cargas de trabajo más exigentes. Se ofrecen en configuraciones de precio y rendimiento que se adaptan a la mayoría de los ambientes."
      image="/assets/dellimages/dell05.png"
      imageAlt="SERVIDORES DE DOS CONECTORES"
      reverse
    />
    <VerticalFeatureRow
      title="Servidores de cuatro conector"
      description="Los servidores en rack de cuatro sockets (cuatro CPU) son los que lidian con el trabajo duro del centro de datos, ya que ofrecen el rendimiento más alto para las cargas de trabajo más exigentes, como la análisis de datos, la IA y la aceleración de la base de datos de GPU."
      image="/assets/dellimages/dell06.png"
      imageAlt="SERVIDORES DE CUATRO CONECTORES"
    />
  </Section>
);

export { VerticalFeatures };
