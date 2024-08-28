import Link from "next/link";

import { Button } from "../button/Button";
import { CTABanner } from "../cta/CTABanner";
import { Section } from "../layout/Section";

const Banner = () => (
  <Section>
    <CTABanner
      title="Acelere la transformación informática en cualquier lugar"
      subtitle=""
      button={
        <Link href="https://wa.me/18094805488">
          <Button>+1 (809) 480-5488</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
