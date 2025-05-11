import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Lightbulb, Tag, Laptop, RefreshCw, LineChart, Coins, Smile, SearchCode, Brain, Briefcase, Target, TrendingUp, Shuffle, Settings2, Users, BarChartBig } from 'lucide-react';
import Image from 'next/image';

const genericBusinessSolution = {
  title: "Custom AI-Powered Business Transformation",
  challenge: "AdaptAI partners with businesses across various sectors to identify growth opportunities, overcome operational challenges, and leverage the power of artificial intelligence for sustainable success. We analyze existing workflows, identify pain points, and design tailored AI strategies to drive efficiency and innovation.",
  approach: [
    { icon: <BarChartBig className="h-7 w-7 text-primary" />, title: 'In-depth Business Analysis', description: 'Comprehensive assessment of your current operations, market position, and strategic objectives to identify key areas for AI intervention.' },
    { icon: <Target className="h-7 w-7 text-primary" />, title: 'Custom AI Strategy Design', description: 'Developing a bespoke AI roadmap, outlining specific solutions, technologies, and implementation plans aligned with your unique business needs.' },
    { icon: <Settings2 className="h-7 w-7 text-primary" />, title: 'Solution Implementation & Integration', description: 'Building and seamlessly integrating custom AI tools, platforms, and systems into your existing infrastructure with minimal disruption.' },
    { icon: <TrendingUp className="h-7 w-7 text-primary" />, title: 'Performance Monitoring & Optimization', description: 'Continuously tracking the performance of implemented AI solutions, providing ongoing support, and making iterative improvements for optimal results.' },
  ],
  expectedResults: [
    { icon: <LineChart className="h-6 w-6 text-primary" />, title: 'Enhanced Operational Efficiency', description: 'Streamline processes and automate tasks to boost productivity.' },
    { icon: <Coins className="h-6 w-6 text-green-500" />, title: 'Reduced Operational Costs', description: 'Optimize resource allocation and minimize unnecessary expenditures.' },
    { icon: <Brain className="h-6 w-6 text-yellow-500" />, title: 'Improved Decision Making', description: 'Leverage data-driven insights for more informed strategic choices.' },
    { icon: <Users className="h-6 w-6 text-purple-500" />, title: 'Scalable Growth & Innovation', description: 'Future-proof your business with adaptable AI solutions that foster innovation.' },
  ],
};

const aiProducts = [
  {
    title: 'Smart AI Radio',
    description: 'Personalized audio and visual news based on user interests and location.',
    icon: <Image src="https://picsum.photos/seed/smartairadio/100/100" alt="Smart AI Radio" width={60} height={60} className="rounded-md" data-ai-hint="radio wave" />
  },
  {
    title: 'Visual AI News Channel',
    description: 'A news channel that provides visual content generated and analyzed by artificial intelligence to offer innovative and personalized news coverage.',
    icon: <Image src="https://picsum.photos/seed/visualainews/100/100" alt="Visual AI News Channel" width={60} height={60} className="rounded-md" data-ai-hint="news screen" />
  },
];

const productUniqueness = [
  { icon: <Lightbulb className="h-6 w-6 text-primary" />, title: 'True Innovation', description: 'We develop new and innovative ideas, not copies.' },
  { icon: <Tag className="h-6 w-6 text-green-500" />, title: 'Competitive Pricing', description: 'Advanced tech with reduced costs for competitive prices.' },
  { icon: <Laptop className="h-6 w-6 text-yellow-500" />, title: 'Attractive Design', description: 'Comfortable interfaces and excellent user experience.' },
  { icon: <RefreshCw className="h-6 w-6 text-purple-500" />, title: 'Continuous Updates', description: 'Products constantly improved based on user feedback.' },
];

export default function ProjectShowcaseSection() {
  return (
    <section id="projects" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Projects & Products</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Showcasing our expertise in transforming businesses and developing cutting-edge AI solutions.
          </p>
        </div>

        <Tabs defaultValue="business-solutions" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto mb-8">
            <TabsTrigger value="business-solutions">Business Solutions</TabsTrigger>
            <TabsTrigger value="ai-products">AI Products</TabsTrigger>
          </TabsList>

          <TabsContent value="business-solutions">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Briefcase className="h-7 w-7 text-primary" />
                  {genericBusinessSolution.title}
                </CardTitle>
                <CardDescription>{genericBusinessSolution.challenge}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-foreground">Our Approach:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {genericBusinessSolution.approach.map(step => (
                      <Card key={step.title} className="bg-muted/50">
                        <CardHeader className="flex flex-row items-start gap-3 space-y-0">
                          {step.icon}
                          <div className="flex-1">
                            <CardTitle className="text-md">{step.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground ml-10">{step.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-foreground">Expected Outcomes:</h4>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {genericBusinessSolution.expectedResults.map(res => (
                       <div key={res.title} className="flex flex-col items-center text-center p-4 border rounded-lg bg-background shadow-sm">
                        {res.icon}
                        <h5 className="font-semibold mt-2 text-sm">{res.title}</h5>
                        <p className="text-xs text-muted-foreground mt-1">{res.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai-products">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-center text-foreground mb-6">Planned Products</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  {aiProducts.map((product) => (
                    <Card key={product.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardHeader className="flex flex-row items-center gap-4">
                        {product.icon}
                        <CardTitle className="text-lg">{product.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{product.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-center text-foreground mb-6">What Makes Our Products Unique?</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {productUniqueness.map((item) => (
                    <Card key={item.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                       <CardHeader className="items-center">
                        {item.icon}
                        <CardTitle className="mt-2 text-md">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
