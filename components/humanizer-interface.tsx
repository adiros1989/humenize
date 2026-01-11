"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Loader2, Sparkles, Copy, Check } from "lucide-react";

export function HumanizerInterface() {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");
    const [loading, setLoading] = useState(false);
    const [tone, setTone] = useState("standard");
    const [copied, setCopied] = useState(false);

    const handleHumanize = async () => {
        if (!inputText) return;

        setLoading(true);
        try {
            const response = await fetch("/api/humanize", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: inputText, tone }),
            });

            const data = await response.json();
            if (data.text) {
                setOutputText(data.text);
            } else if (data.error) {
                alert("Error: " + data.error);
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(outputText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto p-4">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center bg-card p-4 rounded-lg border shadow-sm gap-4">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Mode:</span>
                    <div className="flex bg-muted p-1 rounded-md">
                        {["standard", "casual", "academic"].map((t) => (
                            <button
                                key={t}
                                onClick={() => setTone(t)}
                                className={`px-3 py-1.5 text-sm rounded-sm transition-all capitalize ${tone === t ? "bg-background shadow text-foreground" : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                <Button
                    onClick={handleHumanize}
                    disabled={loading || !inputText}
                    size="lg"
                    className="w-full sm:w-auto font-bold bg-primary hover:bg-primary/90"
                >
                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                    {loading ? "Humanizing..." : "Humanize Text"}
                </Button>
            </div>

            {/* Main Split Interface */}
            <div className="grid md:grid-cols-2 gap-4 h-[500px]">
                {/* Input */}
                <Card className="flex flex-col p-4 h-full">
                    <label className="text-sm font-medium mb-2 text-muted-foreground">Original AI Content</label>
                    <Textarea
                        placeholder="Paste your AI-generated text here..."
                        className="flex-1 resize-none border-none focus-visible:ring-0 p-0 text-base leading-relaxed"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                </Card>

                {/* Output */}
                <Card className={`flex flex-col p-4 h-full transition-colors ${outputText ? "bg-primary/5 border-primary/20" : ""}`}>
                    <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-medium text-primary">Humanized Output</label>
                        {outputText && (
                            <Button variant="ghost" size="sm" onClick={copyToClipboard} className="h-8 w-8 p-0">
                                {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                            </Button>
                        )}
                    </div>

                    {loading ? (
                        <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground animate-pulse">
                            <Sparkles className="h-8 w-8 mb-4 opacity-50" />
                            <p>Polishing your content...</p>
                        </div>
                    ) : (
                        <Textarea
                            readOnly
                            placeholder="Humanized result will appear here..."
                            className="flex-1 resize-none border-none focus-visible:ring-0 p-0 text-base leading-relaxed bg-transparent"
                            value={outputText}
                        />
                    )}
                </Card>
            </div>
        </div>
    );
}
