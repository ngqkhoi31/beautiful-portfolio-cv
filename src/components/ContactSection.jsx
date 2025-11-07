import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Twitch,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setTimeout(() => {});
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {""}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              {/**div nay chua email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" /> {""}
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="quangkhoi:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    khoiquang00@gmail.com
                  </a>
                </div>
              </div>

              {/**div nay chua phan sdt */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" /> {""}
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+0964870815"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +84 0964870815
                  </a>
                </div>
              </div>

              {/**div nay chua dia chi */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" /> {""}
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Canh Nau, Ha Noi
                  </a>
                </div>
              </div>
            </div>

            {/**div nay chua cac icon */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.facebook.com/sky.mtptung.5201"
                  target="_blank"
                >
                  <Facebook />
                </a>
                <a href="https://www.instagram.com/_ngqk.03_/" target="_blank">
                  <Instagram />
                </a>
                <a href="https://x.com/" target="_blank">
                  <Twitter />
                </a>
              </div>
            </div>
          </div>

          {/**phan nay se la form input */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {""}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-mb border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Nguyen Quang Khoi..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {""} Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-mb border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="khoiquang00@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {""}
                  Your Email
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  className="w-full px-4 py-3 rounded-mb border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled
                className="cosmic-button w-full flex items-center justify-center gap-2"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
