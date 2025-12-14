"use client";

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-background">
            <div className="container-width text-center">
                <h2 className="text-3xl font-bold text-foreground mb-8">Get In Touch</h2>
                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I'm forever in quest of exciting opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <a
                    href="mailto:kondetipadmasahithi@gmail.com"
                    className="inline-block px-8 py-4 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
                >
                    Say Hello
                </a>
            </div>
        </section>
    );
};

export default Contact;
