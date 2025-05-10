import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, CheckCircle, Cog, Settings, BarChart3, Brain, Zap, Leaf, LineChart } from 'lucide-react';

const businessModelServices = [
  {
    icon: <Building2 className="h-10 w-10 text-primary mb-4" />,
    title: 'Enterprise Business Development',
    description: 'We provide customized solutions for businesses using artificial intelligence to improve their operations and increase efficiency.',
    features: [
      'Business Model Analysis',
      'Custom Solution Design',
      'Implementation and Training',
      'Continuous Monitoring and Improvement',
    ],
  },
  {
    icon: <Cog className="h-10 w-10 text-primary mb-4" />,
    title: 'AI Products',
    description: 'We develop innovative products based on artificial intelligence for various sectors.',
    features: ['Smart Radio', 'Job Search Platform', 'Real Estate Marketing Applications', 'Custom Tools'],
  },
];

const howWeWorkSteps = [
  {
    icon: <BarChart3 className="h-8 w-8 text-accent" />,
    title: 'Business Model Analysis',
    description: 'We start with a precise understanding of the work system, processes, challenges, and strategic objectives of each company.',
  },
  {
    icon: <Brain className="h-8 w-8 text-accent" />,
    title: 'Custom Solution Design',
    description: 'We develop innovative tools such as professional websites, AI Chatbots, and internal applications to improve operational efficiency.',
  },
  {
    icon: <Settings className="h-8 w-8 text-accent" />,
    title: 'Implementation and Training',
    description: 'We implement solutions smoothly and provide comprehensive training for your team to ensure maximum benefit.',
  },
];

const differentiators = [
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: 'Complete Customization',
        description: 'We don\'t offer generic solutions, but design tools that fit each company\'s needs.'
    },
    {
        icon: <Leaf className="h-8 w-8 text-green-500" />,
        title: 'Sustainability',
        description: 'We use environmentally friendly technologies that reduce carbon footprint.'
    },
    {
        icon: <LineChart className="h-8 w-8 text-yellow-500" />,
        title: 'High Efficiency',
        description: 'We reduce operational costs and increase productivity by up to 40%.'
    }
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tailored AI solutions and innovative products to empower your business.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-foreground mb-8">Our Business Model</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {businessModelServices.map((service) => (
              <Card key={service.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="items-center text-center">
                  {service.icon}
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-foreground mb-8">How We Work</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {howWeWorkSteps.map((step, index) => (
              <Card key={step.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-accent">STEP {index + 1}</div>
                      <CardTitle className="text-xl mt-1">{step.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-foreground mb-8">Why Choose AdaptAI?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((item) => (
              <Card key={item.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center text-center">
                  {item.icon}
                  <CardTitle className="mt-2 text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
