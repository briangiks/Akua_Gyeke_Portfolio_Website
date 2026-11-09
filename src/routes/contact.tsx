import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Linkedin } from "lucide-react";
import { Footer, Nav } from "@/components/site";
import { Newsletter } from "@/components/newsletter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitToEmail } from "@/lib/form-submit";

const LINKEDIN_URL = "https://www.linkedin.com/in/akua-gyekye/";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Akua Gyekye" },
      { name: "description", content: "Get in touch with Akua Gyekye and join the Leadership Newsletter." },
      { property: "og:title", content: "Contact Akua Gyekye" },
      { property: "og:description", content: "Get in touch and join the Leadership Newsletter." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string) ?? "";
    const email = (data.get("email") as string) ?? "";
    const message = (data.get("message") as string) ?? "";
    setStatus("submitting");
    try {
      await submitToEmail(`New contact message from ${name}`, { name, email, message });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <main>
      <section className="bg-contact relative min-h-[80svh]">
        <Nav />
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-40 md:px-12">
          <h1 className="text-center font-script text-7xl text-lime">Let's talk</h1>
          <p className="mx-auto mt-6 max-w-2xl text-center font-serif text-xl italic text-cream/90">Speaking invitations, collaborations, or simply a leadership question — I'd love to hear from you.</p>
          <div className="mt-14 grid items-start gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <h2 className="font-display text-4xl text-cream">Contact me</h2>
            {status === "success" ? (
              <p className="mt-8 text-lg text-cream/90">Thank you! Your message has been sent successfully.</p>
            ) : (
              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-cream/90">Name</label>
                  <Input id="contact-name" name="name" autoComplete="name" required placeholder="Your name" className="h-12 px-4" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-cream/90">Email</label>
                  <Input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="Your email" className="h-12 px-4" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-cream/90">Message</label>
                  <Textarea id="contact-message" name="message" required placeholder="Your message" rows={6} className="resize-y px-4 py-3" />
                </div>
                <Button type="submit" disabled={status === "submitting"} className="h-auto min-h-12 w-full whitespace-normal rounded-full px-6 py-3 text-base">
                  {status === "submitting" ? "Sending…" : "Send message"}
                </Button>
                {status === "error" && (
                  <p className="text-sm text-red-300">Something went wrong — please try again in a moment.</p>
                )}
              </form>
            )}
            <p className="mt-8 text-sm uppercase tracking-widest text-cream/60">Social</p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Akua Gyekye on LinkedIn"
              className="mt-2 inline-flex items-center gap-2 text-cream/85 hover:text-lime"
            >
              <Linkedin className="size-5" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
          <Newsletter id="contact-newsletter" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
