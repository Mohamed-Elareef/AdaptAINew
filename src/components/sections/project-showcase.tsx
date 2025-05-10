import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building, Cpu, CheckCircle, Lightbulb, Tag, Laptop, RefreshCw, LineChart, Coins, Smile, SearchCode } from 'lucide-react';
import Image from 'next/image';

const realEstateSolution = {
  challenge: "A real estate marketing company seeks to improve its operations and increase team efficiency using artificial intelligence. Challenges include data analysis, customer communication, and identifying client needs.",
  solutions: [
    { title: 'AI CRM System', description: 'Smart customer relationship management for better data analysis and client tracking.' },
    { title: 'Intelligent Chatbot', description: 'Instant responses to customer inquiries, available 24/7.' },
    { title: 'Needs Analysis System', description: 'Accurately identifies customer needs and preferences.' },
    { title: 'Property Recommendation Tool', description: 'Suggests suitable properties based on AI analysis.' },
  ],
  expectedResults: [
    { icon: <LineChart className="h-6 w-6 text-primary" />, title: 'Increased Operational Efficiency', description: 'Up to 40% increase through process automation.' },
    { icon: <Coins className="h-6 w-6 text-green-500" />, title: 'Cost Reduction', description: '25% reduction in operational costs.' },
    { icon: <Smile className="h-6 w-6 text-yellow-500" />, title: 'Improved Customer Experience', description: '35% improvement through faster, accurate interactions.' },
    { icon: <SearchCode className="h-6 w-6 text-purple-500" />, title: 'Increased Sales', description: '20% increase through improved interactions and data analysis.' },
  ],
};

const aiProducts = [
  {
    title: 'راديو الذكاء الاصطناعي الذكي',
    description: 'أخبار صوتية ومرئية مخصصة بناءً على اهتمامات المستخدم وموقعه.',
    icon: <Image src="https://picsum.photos/seed/smartairadio/100/100" alt="Smart AI Radio" width={60} height={60} className="rounded-md" data-ai-hint="radio wave" />
  },
  {
    title: 'قناة أخبار مرئية بالذكاء الاصطناعي',
    description: 'قناة إخبارية تقدم محتوى مرئيًا يتم إنشاؤه وتحليله بواسطة الذكاء الاصطناعي لتوفير تغطية إخبارية مبتكرة وشخصية.',
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
                  <Building className="h-7 w-7 text-primary" />
                  Real Estate Marketing Company Development
                </CardTitle>
                <CardDescription>{realEstateSolution.challenge}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Our Solutions:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {realEstateSolution.solutions.map(sol => (
                      <Card key={sol.title} className="bg-muted/50">
                        <CardHeader>
                          <CardTitle className="text-md">{sol.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{sol.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Expected Results:</h4>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {realEstateSolution.expectedResults.map(res => (
                       <div key={res.title} className="flex flex-col items-center text-center p-4 border rounded-lg bg-background">
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

