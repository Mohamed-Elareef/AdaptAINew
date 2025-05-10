import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "AdaptAI transformed our business operations with their custom AI solutions. We've seen a significant boost in efficiency and productivity.",
    name: 'John Doe',
    title: 'CEO, Tech Solutions Inc.',
    avatarSrc: 'https://picsum.photos/seed/avatar1/100/100',
    avatarFallback: 'JD',
    rating: 5,
    aiHint: "professional portrait"
  },
  {
    quote: "The AI-powered Smart Radio product is truly innovative. It has changed the way I consume news, making it personalized and engaging.",
    name: 'Jane Smith',
    title: 'Marketing Manager, Innovate Ltd.',
    avatarSrc: 'https://picsum.photos/seed/avatar2/100/100',
    avatarFallback: 'JS',
    rating: 5,
    aiHint: "business headshot"
  },
  {
    quote: "Working with AdaptAI has been a game-changer. Their team is knowledgeable, professional, and dedicated to delivering results.",
    name: 'Robert Brown',
    title: 'Founder, Startup Hub',
    avatarSrc: 'https://picsum.photos/seed/avatar3/100/100',
    avatarFallback: 'RB',
    rating: 4,
    aiHint: "creative individual"
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real stories from satisfied partners and customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardContent className="pt-6 flex-grow flex flex-col">
                <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/50'}`} />
                    ))}
                </div>
                <p className="text-muted-foreground italic mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center mt-auto">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                    <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
