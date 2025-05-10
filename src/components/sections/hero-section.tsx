import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-20 md:pt-32 pb-12 md:pb-20">
       <div className="absolute inset-0 opacity-5 overflow-hidden">
        {/* Decorative background elements, could be SVGs or images */}
      </div>
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
          Adaptive AI Solutions for <span className="text-primary">Business Transformation</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          We provide innovative solutions based on adaptive artificial intelligence, designed to improve the lives of individuals and small businesses by offering customized services for daily life management, education, health, and environment.
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-md md:text-lg text-muted-foreground">
          We focus on sustainability and efficiency using advanced and environmentally friendly technologies.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
            <Link href="#services">Discover Our Solutions</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-lg transition-transform hover:scale-105">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
         <div className="mt-16 relative aspect-video max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden">
            <Image 
              src="https://picsum.photos/seed/aihero/1200/675" 
              alt="AI Technology in action" 
              layout="fill"
              objectFit="cover"
              priority
              data-ai-hint="abstract technology"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
      </div>
    </section>
  );
}
