import { Audience } from '@/sections/audience';
import { Hero } from '@/sections/hero';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Audience />
        <div id="services" className="h-[500px]">
          Services
        </div>
        <div id="portfolio" className="h-[500px]">
          Portfolio
        </div>
        <div id="blog" className="h-[500px]">
          Blog
        </div>
        <div id="pages" className="h-[500px]">
          Pages
        </div>
        <div id="contact" className="h-[500px]">
          Contact us
        </div>
      </main>
    </>
  );
}
