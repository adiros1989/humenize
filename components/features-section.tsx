import { Zap, Shield, Wand2, Smartphone } from "lucide-react";

const features = [
    {
        icon: <Shield className="h-10 w-10 text-primary" />,
        title: "100% Undetectable",
        description: "Our advanced algorithms rewrite content to bypass all major AI detectors including GPTZero and Turnitin.",
    },
    {
        icon: <Zap className="h-10 w-10 text-primary" />,
        title: "Lightning Fast",
        description: "Get human-quality text in seconds. No more waiting for manual edits or slow processing times.",
    },
    {
        icon: <Wand2 className="h-10 w-10 text-primary" />,
        title: "Context Aware",
        description: "We don't just swap synonyms. We understand the context to preserve the original meaning perfectly.",
    },
    {
        icon: <Smartphone className="h-10 w-10 text-primary" />,
        title: "Mobile Optimized",
        description: "Humanize content on the go. Our fully responsive design works perfectly on phones and tablets.",
    },
];

export function FeaturesSection() {
    return (
        <section className="container py-12 md:py-24 lg:py-32 max-w-5xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Why Choose HumanizeAI?</h2>
                <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
                    We combine cutting-edge LLMs with proprietary natural language processing to deliver the best results.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                        <div className="mb-4 p-3 bg-primary/10 rounded-full">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
