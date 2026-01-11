import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <span className="font-bold inline-block text-xl">
                        Humanize<span className="text-primary">AI</span>
                    </span>
                </Link>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <nav className="flex items-center space-x-4">
                        <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
                            Pricing
                        </Link>
                        <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
                            Blog
                        </Link>
                    </nav>
                    <div className="flex items-center space-x-2 ml-4">
                        <Link href="/dashboard">
                            <Button variant="ghost" size="sm">Log in</Button>
                        </Link>
                        <Link href="/dashboard">
                            <Button size="sm">Get Started</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
