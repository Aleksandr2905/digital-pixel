import { Audience } from '@/sections/audience';
import { Career } from '@/sections/career';
import { Cases } from '@/sections/cases';
import { Community } from '@/sections/community';
import { Contact } from '@/sections/contact';
import { Education } from '@/sections/education';
import { Hero } from '@/sections/hero';
import { Programme } from '@/sections/programme';
import { Reviews } from '@/sections/reviews';
import { Speakers } from '@/sections/speakers';
import { Pricing } from '@/sections/pricing';

export default function Home() {
  return (
    <main className="overflow-hidden w-[393px] xl:w-[1280px] mx-auto">
      <Hero />
      <Audience />
      <Speakers />
      <Education />
      <Cases />
      <Career />
      <Programme />
      <Community />
      <Pricing />
      <Reviews />
      <Contact />
    </main>
  );
}
