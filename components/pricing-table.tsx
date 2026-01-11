import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function PricingTable() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
            <div className="container px-4 md:px-6 max-w-5xl mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Start for free, upgrade for power. cancel anytime.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3 md:gap-8">
                    {/* Free Tier */}
                    <Card className="flex flex-col justify-between">
                        <CardHeader>
                            <CardTitle>Free Starter</CardTitle>
                            <CardDescription>For casual users testing the waters.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold">$0<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                            <ul className="mt-4 space-y-2 text-sm">
                                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> 500 words / day</li>
                                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Standard Mode Only</li>
                                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Basic Support</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant="outline">Try for Free</Button>
                        </CardFooter>
                    </Card>

                    {/* Pro Tier */}
                    <Card className="flex flex-col justify-between border-primary relative shadow-lg scale-105">
                        <div className="absolute -top-4 left-0 right-0 flex justify-center">
                            <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</span>
                        </div>
                        <CardHeader>
                            <CardTitle>Pro Creator</CardTitle>
                            <CardDescription>For professionals and content creators.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold">$19<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                            <ul className="mt-4 space-y-2 text-sm">
                                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Unlimited words</li>
                                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> All 4 Humanizer Modes</li>
                                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Faster processing speed</li>
                                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Priority Support</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Get Started</Button>
                        </CardFooter>
                    </Card>

                    {/* Agency Tier */}
                    <Card className="flex flex-col justify-between">
                        <CardHeader>
                            <CardTitle>Agency</CardTitle>
                            <CardDescription>For teams and high volume needs.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold">$99<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                            <ul className="mt-4 space-y-2 text-sm">
                                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> API Access</li>
                                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Team Management</li>
                                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Custom Tone Models</li>
                                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> 24/7 Dedicated Support</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant="outline">Contact Sales</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
}
