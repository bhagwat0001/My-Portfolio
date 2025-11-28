import { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const HireMe = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate message (at least 3 words)
    const wordCount = form.message.trim().split(/\s+/).length;
    if (wordCount < 3) {
      setError("Message must contain at least 3 words.");
      return;
    }

    setError("");

    // Simulating form submission
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  return (
    <section id="hireme" className="py-20 px-6 flex justify-center">
      <div className="max-w-xl w-full">

        {!submitted ? (
          <Card className="shadow-xl border-border bg-card-gradient">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">
                Hire Me
              </CardTitle>
              <p className="text-center text-muted-foreground">
                Let’s work together! Fill the form and I’ll get back to you soon.
              </p>
            </CardHeader>

            <CardContent>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="text-sm font-medium" htmlFor="name">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium" htmlFor="email">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium" htmlFor="message">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                  {error && (
                    <p className="text-red-500 text-sm mt-1">{error}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full text-lg"
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card className="shadow-xl border-border p-10 bg-card-gradient">
            <h2 className="text-3xl font-bold text-center mb-3">
              🎉 Thank You!
            </h2>
            <p className="text-center text-muted-foreground text-lg">
              Your form has been submitted successfully.
              <br />
              I will contact you soon.
            </p>

            <div className="flex justify-center mt-6">
              <Button
                variant="portfolio"
                size="lg"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Response
              </Button>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
};

export default HireMe;
