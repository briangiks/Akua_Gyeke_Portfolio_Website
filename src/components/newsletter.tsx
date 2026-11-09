import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submitToEmail } from "@/lib/form-submit";

export function Newsletter({ id = "newsletter", compact = false }: { id?: string; compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = (new FormData(form).get("email") as string) ?? "";
    setStatus("submitting");
    try {
      await submitToEmail("New Leadership Newsletter signup", { email });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div>
        <h2 className={`font-display text-cream ${compact ? "text-2xl" : "text-4xl"}`}>Join the Leadership Newsletter</h2>
        <p className="mt-3 text-cream/80">Thanks for subscribing — you're on the list!</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className={`font-display text-cream ${compact ? "text-2xl" : "text-4xl"}`}>Join the Leadership Newsletter</h2>
      <p className="mt-3 text-cream/80">Honest leadership nuggets, straight to your inbox.</p>
      <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
        <label htmlFor={`${id}-email`} className="text-sm text-cream/85">Email</label>
        <Input id={`${id}-email`} name="email" type="email" autoComplete="email" required placeholder="Your email" className="h-12 rounded-full px-5 text-cream placeholder:text-cream/50" />
        <Button type="submit" disabled={status === "submitting"} className="h-auto min-h-12 whitespace-normal rounded-full px-6 py-3 text-base">
          {status === "submitting" ? "Subscribing…" : "Subscribe"}
        </Button>
        {status === "error" && (
          <p className="text-sm text-red-300">Something went wrong — please try again in a moment.</p>
        )}
      </form>
    </div>
  );
}
