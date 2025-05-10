import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Leaf, UserCog, Zap, Brain, LineChart, Handshake, Shield } from 'lucide-react';

const uniqueValues = [
  {
    icon: <UserCog className="h-8 w-8 text-primary" />,
    title: 'Customized Solutions',
    description: 'We provide solutions specifically designed for each client\'s needs, taking into account their business privacy and strategic objectives.',
  },
  {
    icon: <Leaf className="h-8 w-8 text-green-500" />,
    title: 'Environmental Sustainability',
    description: 'We use environmentally friendly technologies that promote sustainability and reduce the environmental impact of technical operations.',
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-500" />,
    title: 'Ease of Use',
    description: 'We focus on simple and effective user experience, with easy-to-use and interactive interfaces.',
  },
  {
    icon: <Brain className="h-8 w-8 text-purple-500" />,
    title: 'Continuous Innovation',
    description: 'We continuously develop and improve our solutions, keeping up with the latest developments in artificial intelligence.',
  },
];

const keyFeatures = [
  {
    icon: <Brain className="h-8 w-8 text-primary" />,
    title: 'Advanced Artificial Intelligence',
    description: 'We use the latest artificial intelligence technologies to analyze data and make smart decisions.',
  },
  {
    icon: <LineChart className="h-8 w-8 text-primary" />,
    title: 'Efficiency Improvement',
    description: 'We increase operational efficiency by up to 40% through task automation and flow optimization.',
  },
  {
    icon: <Handshake className="h-8 w-8 text-primary" />,
    title: 'Strategic Partnerships',
    description: 'We work with trusted partners to provide comprehensive and integrated solutions for customer needs.',
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Security and Protection',
    description: 'We ensure the highest standards of security and data protection in all our solutions and services.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">About AdaptAI</h2>
          <p className="mt-4 text-lg text-muted-foreground">Driving innovation through adaptive intelligence.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Lightbulb className="h-10 w-10 text-primary" />
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We provide innovative solutions based on adaptive artificial intelligence, designed to improve the lives of individuals and small businesses by offering customized services for daily life management, education, health, and environment.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Leaf className="h-10 w-10 text-green-500" />
              <CardTitle className="text-2xl">Our Sustainability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We focus on sustainability and efficiency using advanced and environmentally friendly technologies, with a commitment to reducing carbon footprint and promoting sustainable practices in all our operations.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-foreground mb-8">Our Unique Value</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {uniqueValues.map((value) => (
              <Card key={value.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center">
                  {value.icon}
                  <CardTitle className="mt-2 text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-foreground mb-8">Key Features</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature) => (
              <Card key={feature.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center">
                  {feature.icon}
                  <CardTitle className="mt-2 text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
