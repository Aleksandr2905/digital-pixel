import { Audience } from '@/sections/audience';
import { Career } from '@/sections/career';
import { Community } from '@/sections/community';
import { Contact } from '@/sections/contact';
import { Hero } from '@/sections/hero';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Audience />
        <Career />
        <Community />
        <div id="portfolio" className="h-[500px]">
          Portfolio
        </div>
        <div id="pages" className="h-[500px]">
          Pages
        </div>
        <Contact />
      </main>
    </>
  );
}
