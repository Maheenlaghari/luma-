"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, subtotal, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-[#1c1e1b]/40 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#f8f6f0] shadow-2xl flex flex-col justify-between border-l border-[#e4e0d5]">
          <div className="p-6 border-b border-[#e4e0d5] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="font-outfit font-light text-2xl tracking-tight text-[#222521]">
                Shopping Cart
              </h2>
              <span className="text-xs text-[#71756d]">({totalItems})</span>
            </div>
            <button
              onClick={closeCart}
              aria-label="Close cart drawer"
              className="p-2 text-[#555a50] hover:text-[#1c1e1b] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#ece8dd] flex items-center justify-center text-[#6e7269]">
                  <ArrowRight className="w-6 h-6 rotate-45" />
                </div>
                <h3 className="font-outfit font-light text-2xl text-[#222521]">
                  Your basket is quiet
                </h3>
                <p className="text-sm text-[#73776e] max-w-xs">
                  Begin your conscious routine by selecting thoughtful everyday essentials.
                </p>
                <button
                  onClick={closeCart}
                  className="mt-4 px-6 py-3 bg-[#2d352a] text-[#f7f5f0] text-xs uppercase tracking-widest hover:bg-[#1f251d] transition-colors rounded-full"
                >
                  Explore Catalog
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-4 rounded-xl bg-[#f0ece3] border border-[#e4ded2]"
                >
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-[#e6e1d6] shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      quality={95}
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-sm font-medium text-[#222521] leading-snug">
                          {item.product.name}
                        </h4>
                        <p className="text-xs text-[#73776e] capitalize mt-0.5">
                          {item.product.category}
                        </p>
                      </div>
                      <span className="text-sm font-medium text-[#222521]">
                        {item.product.currency}
                        {(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#dfdad0]">
                      <div className="flex items-center border border-[#cfc9bc] rounded-md bg-[#f8f6f0]">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          aria-label="Decrease quantity"
                          className="p-1 hover:text-[#1c1e1b] text-[#5c6157]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-medium text-[#222521]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          aria-label="Increase quantity"
                          className="p-1 hover:text-[#1c1e1b] text-[#5c6157]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        aria-label="Remove item"
                        className="text-xs text-[#8d9285] hover:text-[#a13b3b] transition-colors p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="p-6 border-t border-[#e4e0d5] bg-[#f4f0e7] space-y-4">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-[#5c6157]">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#222521]">
                    €{subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-[#5c6157] text-xs">
                  <span>Shipping</span>
                  <span className="text-[#3b5e34]">Calculated at checkout</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#2d352a] text-[#f7f5f0] text-xs uppercase tracking-widest font-medium rounded-full hover:bg-[#1c221a] transition-all shadow-sm"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <p className="text-[11px] text-center text-[#7d8277]">
                Plastic free packaging on all sustainable orders
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
