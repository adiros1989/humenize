import { SiteHeader } from "@/components/site-header";
import { HumanizerInterface } from "@/components/humanizer-interface";
import { PricingTable } from "@/components/pricing-table";
import { SiteFooter } from "@/components/site-footer";
import { FeaturesSection } from "@/components/features-section";

export default function Home() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <SiteHeader />
            <div className="flex-1 flex flex-col items-center p-4 md:p-8 pt-10">
                <div className="text-center mb-10 space-y-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight lg:text-7xl">
                        Make AI Text <span className="text-primary">Human</span> Again.
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                        Bypass AI detectors and improve readability with our advanced rewording engine.
                    </p>
                </div>
                <HumanizerInterface />
            </div>
            <FeaturesSection />
            <PricingTable />
            <SiteFooter />
        </main>
    );
}
