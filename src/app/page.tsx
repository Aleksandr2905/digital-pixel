import { Hero } from '@/sections/hero';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <div id="about" className="h-[500px]">
          About us
        </div>
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
