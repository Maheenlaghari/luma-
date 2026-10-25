"use client";

import React, { useState } from "react";
import { Mail, Clock, MapPin, Check } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Ritual Question",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "Ritual Question", message: "" });
    }, 4000);
  };

  return (
    <div className="w-full bg-[#f8f6f0] min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6a7063]">
            Customer Care and Conversation
          </span>
          <h1 className="font-outfit font-light text-4xl sm:text-6xl text-[#222521]">
            We are always here to listen
          </h1>
          <p className="text-sm text-[#5d6356] leading-relaxed">
            Whether you have questions about ingredient origins, bespoke orders or order shipments, reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#efece4] p-8 rounded-3xl border border-[#e2dcd0] space-y-6">
              <h2 className="font-outfit font-light text-2xl text-[#222521]">
                Studio Details
              </h2>

              <div className="space-y-4 text-xs text-[#5d6356]">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#3e4a38] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-[#222521] block mb-0.5">
                      Direct Inquiries
                    </span>
                    <span>care@nuveessentials.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#3e4a38] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-[#222521] block mb-0.5">
                      Studio Hours
                    </span>
                    <span>Monday to Friday from 9 am to 5 pm CET</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#3e4a38] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-[#222521] block mb-0.5">
                      Design Studio
                    </span>
                    <span>NUVÉ Collective, Skeppargatan 24, Stockholm</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#efece4] p-8 rounded-3xl border border-[#e2dcd0] space-y-4">
              <h2 className="font-outfit font-light text-2xl text-[#222521]">
                Mindful Questions
              </h2>
              <div className="space-y-3 text-xs text-[#5d6356]">
                <div>
                  <h3 className="font-medium text-[#222521] mb-1">
                    What materials are used for shipping?
                  </h3>
                  <p>
                    All boxes, tape and protective padding are recycled unbleached kraft paper and completely home compostable.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#dfd8cb]">
                  <h3 className="font-medium text-[#222521] mb-1">
                    Can bamboo toothbrushes be composted?
                  </h3>
                  <p>
                    Yes. The carved bamboo handle decomposes naturally in garden soil or commercial compost within six months.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#efece4] p-8 sm:p-10 rounded-3xl border border-[#e2dcd0]">
              <h2 className="font-outfit font-light text-2xl sm:text-3xl text-[#222521] mb-6">
                Send a Message
              </h2>

              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#dbe4d4] text-[#34422e] mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-outfit font-light text-2xl text-[#222521]">
                    Message Sent in Peace
                  </h3>
                  <p className="text-xs text-[#666c5f]">
                    We will respond within one quiet business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#63695b] mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Freja Lindqvist"
                        className="w-full bg-[#f8f6f0] border border-[#d6d0c1] rounded-xl px-4 py-3 text-sm text-[#222521] focus:outline-none focus:border-[#2b3627]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#63695b] mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="freja@nordic.se"
                        className="w-full bg-[#f8f6f0] border border-[#d6d0c1] rounded-xl px-4 py-3 text-sm text-[#222521] focus:outline-none focus:border-[#2b3627]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#63695b] mb-1.5">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full bg-[#f8f6f0] border border-[#d6d0c1] rounded-xl px-4 py-3 text-sm text-[#222521] focus:outline-none focus:border-[#2b3627]"
                    >
                      <option value="Ritual Question">Ritual Question</option>
                      <option value="Shipping and Delivery">Shipping and Delivery</option>
                      <option value="Artisan Partnership">Artisan Partnership</option>
                      <option value="Wholesale Inquiry">Wholesale Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#63695b] mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Write your note here..."
                      className="w-full bg-[#f8f6f0] border border-[#d6d0c1] rounded-xl px-4 py-3 text-sm text-[#222521] focus:outline-none focus:border-[#2b3627]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 bg-[#2d352a] text-[#f7f5f0] text-xs uppercase tracking-[0.2em] font-medium rounded-full hover:bg-[#1a2018] transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
