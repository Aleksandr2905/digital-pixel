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
import { Tariffs } from '@/sections/tariffs';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Audience />
        <Speakers />
        <Education />
        <Cases />
        <Career />
        <Programme />
        <Community />
        <Tariffs />
        <Reviews />
        <Contact />
      </main>
    </>
  );
}
