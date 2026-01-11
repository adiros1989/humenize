import Link from "next/link";
import { Sparkles } from "lucide-react";

export function SiteFooter() {
    return (
        <footer className="border-t bg-secondary/10">
            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 max-w-screen-2xl">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <Sparkles className="h-6 w-6 text-primary" />
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built by <span className="font-medium underline underline-offset-4">HumanizeAI</span>.
                        The source code is available on <span className="font-medium underline underline-offset-4">GitHub</span>.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">Terms</Link>
                    <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">Privacy</Link>
                    <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">Contact</Link>
                </div>
            </div>
        </footer>
    );
}
