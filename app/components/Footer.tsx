"use client";

const Footer = () => {
    return (
        <footer className="py-8 bg-card border-t border-border">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="text-sm text-muted-foreground text-center">
                    © {new Date().getFullYear()} Made with ❤️ by Padmasahithi Kondeti. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
