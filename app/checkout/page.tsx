"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, ShieldCheck, Lock, CreditCard } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState("");

  const [formData, setFormData] = useState({
    firstName: "Elena",
    lastName: "Vance",
    email: "elena.vance@example.com",
    address: "42 Willow Brook Lane",
    apartment: "Apt 3B",
    city: "Stockholm",
    postalCode: "112 14",
    country: "Sweden",
    paymentMethod: "card"
  });

  const shippingCost = subtotal > 40 || items.length === 0 ? 0 : 4.5;
  const orderTotal = subtotal + shippingCost;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const generatedId = "LUM" + Math.floor(100000 + Math.random() * 900000);
      setOrderId(generatedId);
      setIsSubmitting(false);
      setOrderComplete(true);
      clearCart();
    }, 1200);
  };

  if (orderComplete) {
    return (
      <div className="w-full bg-[#f8f6f0] min-h-screen py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-6 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#e3e8dc] text-[#34402f] mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="text-xs uppercase tracking-[0.25em] text-[#6d7266] font-semibold block">
            Thank you for your order
          </span>

          <h1 className="font-outfit font-light text-4xl sm:text-5xl text-[#222521]">
            Order Confirmed
          </h1>

          <p className="text-sm text-[#5d6356] leading-relaxed max-w-md mx-auto">
            We are preparing your parcel using plastic free packaging. A confirmation receipt has been sent to{" "}
            <span className="font-medium text-[#222521]">{formData.email}</span>.
          </p>

          <div className="p-6 rounded-2xl bg-[#efece4] border border-[#e3ded2] text-left text-xs space-y-3">
            <div className="flex justify-between pb-2 border-b border-[#dfd9cc]">
              <span className="text-[#6b7164]">Reference Number</span>
              <span className="font-mono font-medium text-[#222521]">
                {orderId}
              </span>
            </div>
            <div className="flex justify-between pb-2 border-b border-[#dfd9cc]">
              <span className="text-[#6b7164]">Delivery Destination</span>
              <span className="text-[#222521]">
                {formData.address}, {formData.city}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6b7164]">Estimated Dispatch</span>
              <span className="text-[#222521]">Within 24 Hours</span>
            </div>
          </div>

          <div className="pt-4">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#2d352a] text-[#f7f5f0] text-xs uppercase tracking-widest rounded-full hover:bg-[#1b2118] transition-colors"
            >
              Continue Exploring
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="w-full bg-[#f8f6f0] min-h-screen py-24 text-center px-6">
        <h1 className="font-outfit font-light text-3xl sm:text-4xl text-[#222521] mb-4">
          Your basket is empty
        </h1>
        <p className="text-xs sm:text-sm text-[#6c7265] mb-8">
          Add items to your basket before proceeding to checkout.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center px-8 py-3.5 bg-[#2d352a] text-[#f7f5f0] text-xs uppercase tracking-widest rounded-full hover:bg-[#1b2118] transition-colors"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#f8f6f0] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-8">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#6c7265] hover:text-[#222521] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Catalog</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <form onSubmit={handlePlaceOrder} className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-outfit font-light text-2xl sm:text-3xl text-[#222521]">
                  Contact Information
                </h2>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#63695b] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#f1eeea] border border-[#dcd6c8] rounded-xl px-4 py-3 text-sm text-[#222521] focus:outline-none focus:border-[#2b3627]"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#e8e4da]">
                <h2 className="font-outfit font-light text-2xl sm:text-3xl text-[#222521]">
                  Shipping Address
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#63695b] mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-[#f1eeea] border border-[#dcd6c8] rounded-xl px-4 py-3 text-sm text-[#222521] focus:outline-none focus:border-[#2b3627]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#63695b] mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-[#f1eeea] border border-[#dcd6c8] rounded-xl px-4 py-3 text-sm text-[#222521] focus:outline-none focus:border-[#2b3627]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#63695b] mb-1.5">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full bg-[#f1eeea] border border-[#dcd6c8] rounded-xl px-4 py-3 text-sm text-[#222521] focus:outline-none focus:border-[#2b3627]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#63695b] mb-1.5">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full bg-[#f1eeea] border border-[#dcd6c8] rounded-xl px-4 py-3 text-sm text-[#222521] focus:outline-none focus:border-[#2b3627]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#63695b] mb-1.5">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      required
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="w-full bg-[#f1eeea] border border-[#dcd6c8] rounded-xl px-4 py-3 text-sm text-[#222521] focus:outline-none focus:border-[#2b3627]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#63695b] mb-1.5">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full bg-[#f1eeea] border border-[#dcd6c8] rounded-xl px-4 py-3 text-sm text-[#222521] focus:outline-none focus:border-[#2b3627]"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#e8e4da]">
                <h2 className="font-outfit font-light text-2xl sm:text-3xl text-[#222521]">
                  Payment Method
                </h2>
                <div className="space-y-3">
                  <label className="flex items-center justify-between p-4 rounded-xl border border-[#2b3627] bg-[#efece4] cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === "card"}
                        onChange={handleChange}
                        className="text-[#2b3627]"
                      />
                      <CreditCard className="w-4 h-4 text-[#2b3627]" />
                      <span className="text-sm font-medium text-[#222521]">
                        Credit or Debit Card
                      </span>
                    </div>
                    <span className="text-xs text-[#73786c]">Encrypted</span>
                  </label>

                  <label className="flex items-center justify-between p-4 rounded-xl border border-[#ded8cb] bg-[#f5f2ec] cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="transfer"
                        checked={formData.paymentMethod === "transfer"}
                        onChange={handleChange}
                        className="text-[#2b3627]"
                      />
                      <ShieldCheck className="w-4 h-4 text-[#2b3627]" />
                      <span className="text-sm font-medium text-[#222521]">
                        Direct Bank Wire Transfer
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#2d352a] text-[#f7f5f0] text-xs uppercase tracking-[0.2em] font-medium rounded-full hover:bg-[#1b2118] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>
                    {isSubmitting
                      ? "Processing Ritual..."
                      : `Complete Order • €${orderTotal.toFixed(2)}`}
                  </span>
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-[#efece4] p-6 sm:p-8 rounded-3xl border border-[#e2dcd0] space-y-6">
              <h3 className="font-outfit font-light text-2xl text-[#222521]">
                Order Summary
              </h3>

              <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center gap-4 py-2 border-b border-[#e2dcd0]"
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-[#e6e1d6] shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        quality={95}
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-[#222521] truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-[#74796d]">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-[#222521]">
                      €{(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-2 text-xs text-[#63685c]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-[#222521] font-medium">
                    €{subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-[#222521] font-medium">
                    {shippingCost === 0 ? "Complimentary" : `€${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-outfit font-medium text-[#222521] pt-3 border-t border-[#ded8cb]">
                  <span>Total Amount</span>
                  <span>€{orderTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="text-[11px] text-[#787e71] leading-relaxed pt-2">
                All packages leave our studio in certified unbleached compostable mailers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
