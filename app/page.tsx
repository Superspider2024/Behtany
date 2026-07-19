"use client";

import Image from "next/image";
import { Calendar, MapPin, Mail, Phone, ArrowRight, Instagram, Facebook, CheckCircle } from "lucide-react";
import * as motion from "motion/react-client";
import { useState } from "react";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#2D2D2A] font-sans selection:bg-[#B3543A] selection:text-[#F5F5F0]">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#F5F5F0]/80 backdrop-blur-md border-b border-[#5A5A40]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-serif font-bold tracking-tight text-[#5A5A40]">BETHANY GARDENS</span>
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#8C8C70]">The Place for Memorable Events</span>
          </div>
          <div className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium uppercase tracking-wider text-[#5A5A40] items-center">
            <a href="#venue" className="hover:text-[#B3543A] transition-colors">The Venue</a>
            <a href="#events" className="hover:text-[#B3543A] transition-colors">Events</a>
            <a href="#book" className="hover:text-[#B3543A] transition-colors">How to Book</a>
            <a href="#contact" className="hover:text-[#B3543A] transition-colors">Contact</a>
            <div className="w-px h-4 bg-[#5A5A40]/20"></div>
            <a href="tel:+254740720857" className="flex items-center text-[#4A6B53] hover:text-[#2C3F30] font-bold tracking-normal">
              <Phone className="w-4 h-4 mr-2" />
              +254 740720857
            </a>
          </div>
          <a href="#book" className="hidden md:inline-flex items-center justify-center h-10 px-6 text-xs font-bold uppercase tracking-widest bg-[#B3543A] text-white rounded-full hover:bg-[#964630] transition-colors shadow-md">
            Reserve Your Date
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl relative z-10"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif italic leading-[1.1] mb-6 text-[#2D2D2A]">
              Where your most <br className="hidden md:block"/>
              beautiful memories <br className="hidden md:block"/>
              take root.
            </h1>
            <p className="text-lg md:text-xl text-[#4A4A4A] font-light mb-10 leading-relaxed max-w-lg">
              An exclusive, lushly manicured outdoor estate in the heart of Karen. 
              The perfect canvas for weddings, elegant gatherings, and milestones 
              that demand a breathtaking setting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#book" className="inline-flex items-center justify-center h-14 px-8 text-xs font-bold uppercase tracking-widest bg-[#B3543A] text-white rounded-full hover:bg-[#964630] transition-colors group shadow-md">
                Check Availability
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#venue" className="inline-flex items-center justify-center h-14 px-8 text-xs font-bold uppercase tracking-widest bg-transparent text-[#5A5A40] border border-[#5A5A40]/30 rounded-full hover:bg-[#E8E8D0] transition-colors">
                Explore the Grounds
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative h-[500px] lg:h-[700px] w-full rounded-[2rem] overflow-hidden shadow-xl"
          >
            <Image
              src="/images/20201205_103413-scaled.jpg"
              alt="Lush green garden venue with elegant tent setup"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem]"></div>
          </motion.div>
        </div>
      </section>

      {/* The Venue & Vibe */}
      <section id="venue" className="py-24 px-6 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/5] rounded-[2rem] order-2 md:order-1"
            >
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-lg">
                <Image
                  src="/images/20201205_102528-scaled.jpg"
                  alt="Immaculately maintained lawns and mature trees at Bethany Gardens"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F5F5F0] hidden sm:block z-10">
                <Image
                  src="/images/GglePic4-300x300.jpg"
                  alt="Bethany Gardens Gate Welcome Sign"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-[#5A5A40] mb-4 inline-block px-3 py-1 bg-[#E8E8D0] rounded-sm">The Atmosphere</h2>
              <h3 className="text-4xl md:text-5xl font-serif italic text-[#2D2D2A] mb-6">A private sanctuary of natural elegance.</h3>
              <p className="text-lg text-[#4A4A4A] font-light leading-relaxed mb-8">
                Tucked away on Muteero Rise in the prestigious neighborhood of Karen, Bethany Gardens offers an escape into pristine natural beauty. Our grounds are meticulously maintained year-round, featuring expansive, velvety green lawns framed by mature, sweeping indigenous trees.
              </p>
              <p className="text-lg text-[#4A4A4A] font-light leading-relaxed">
                Whether bathed in the brilliant afternoon sun or illuminated by ambient evening string lights, the venue provides a profoundly serene, exclusive atmosphere. It is a space designed not just to host events, but to elevate them with an undeniable sense of prestige and tranquility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services / Event Types */}
      <section id="events" className="py-24 px-6 bg-[#E8E8D0]/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-serif italic text-[#2D2D2A] mb-4">Crafted for your milestones.</h2>
            <p className="text-lg text-[#4A4A4A] font-light">Our versatile, expansive grounds adapt beautifully to your vision, providing a premium backdrop for every type of celebration.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Weddings */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group relative h-[400px] rounded-[2rem] overflow-hidden bg-[#2D2D2A] shadow-md md:col-span-2 lg:col-span-1"
            >
              <Image
                src="/images/images (10).jpg"
                alt="Outdoor Wedding Setup"
                fill
                className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <h3 className="text-3xl font-serif italic text-white mb-3">Weddings & Celebrations</h3>
                <p className="text-white/90 text-lg font-light leading-relaxed max-w-md">
                  Exchange vows beneath towering trees. Our vast, level lawns are perfect for grand marquees and elegant, open-air receptions that feel truly magical.
                </p>
              </div>
            </motion.div>

            {/* Family Gatherings */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative h-[400px] rounded-[2rem] overflow-hidden bg-[#2D2D2A] shadow-md"
            >
              <Image
                src="/images/images (9).jpg"
                alt="Family Gathering Outdoor Dining"
                fill
                className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <h3 className="text-3xl font-serif italic text-white mb-3">Family Gatherings</h3>
                <p className="text-white/90 text-lg font-light leading-relaxed max-w-md">
                  Generous space for multiple generations to connect. Enjoy a sophisticated garden party atmosphere with absolute privacy and tranquility.
                </p>
              </div>
            </motion.div>

            {/* Corporate */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group relative h-[400px] rounded-[2rem] overflow-hidden bg-[#4A6B53] shadow-md flex items-end p-8"
            >
              <div className="relative z-10 w-full">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6 text-white backdrop-blur-sm">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-serif italic text-white mb-3">Corporate & Custom</h3>
                <p className="text-white/90 text-lg font-light leading-relaxed max-w-md">
                  Impress clients or reward your team with an upscale retreat. Ideal for executive luncheons, elegant product launches, or sophisticated end-of-year galas.
                </p>
              </div>
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#E8E8D0] rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section id="book" className="py-24 px-6 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif italic text-[#2D2D2A] mb-4">Securing your date is simple.</h2>
            <p className="text-lg text-[#4A4A4A] font-light max-w-2xl mx-auto">
              We know planning an event can be demanding. Our booking process is designed to be transparent, responsive, and completely stress-free.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 relative max-w-5xl mx-auto mb-20">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-[#5A5A40]/20"></div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative flex flex-col items-center z-10"
            >
              <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-sm border border-[#5A5A40] bg-[#F5F5F0] text-[#5A5A40]">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif italic text-[#5A5A40] mb-3">1. Check Availability</h3>
              <p className="text-[#4A4A4A] font-light leading-relaxed text-center">
                Browse available Saturdays chronologically using our calendar system below, or reach out directly for weekday reservations.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex flex-col items-center z-10"
            >
              <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-sm border border-[#5A5A40] bg-[#F5F5F0] text-[#5A5A40]">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif italic text-[#5A5A40] mb-3">2. Schedule a Viewing</h3>
              <p className="text-[#4A4A4A] font-light leading-relaxed text-center">
                Experience the manicured grounds firsthand. Our venue manager will walk you through the space and discuss your layout vision.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex flex-col items-center z-10"
            >
              <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-sm border border-[#5A5A40] bg-[#F5F5F0] text-[#5A5A40]">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif italic text-[#5A5A40] mb-3">3. Confirm Reservation</h3>
              <p className="text-[#4A4A4A] font-light leading-relaxed text-center">
                Sign your digital agreement and place your deposit. Your premium event date is now fully secured at Bethany Gardens.
              </p>
            </motion.div>
          </div>

          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#5A5A40]/10 max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-serif italic text-[#2D2D2A] mb-8 text-center">Request a Reservation</h3>
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#E8E8D0] rounded-full flex items-center justify-center mx-auto mb-4 text-[#5A5A40]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-serif text-[#2D2D2A] mb-2">Request Received</h4>
                <p className="text-[#4A4A4A] font-light">Thank you! Our event strategists will be in touch shortly to confirm availability.</p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#5A5A40]">Full Name</label>
                  <input required type="text" className="w-full bg-[#F5F5F0] border border-[#5A5A40]/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#B3543A] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#5A5A40]">Email Address</label>
                  <input required type="email" className="w-full bg-[#F5F5F0] border border-[#5A5A40]/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#B3543A] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#5A5A40]">Phone Number</label>
                  <input required type="tel" className="w-full bg-[#F5F5F0] border border-[#5A5A40]/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#B3543A] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#5A5A40]">Event Date</label>
                  <input required type="date" className="w-full bg-[#F5F5F0] border border-[#5A5A40]/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#B3543A] transition-colors text-[#4A4A4A]" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#5A5A40]">Event Type & Details</label>
                  <textarea required rows={4} className="w-full bg-[#F5F5F0] border border-[#5A5A40]/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#B3543A] transition-colors"></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button type="submit" disabled={isSubmitting} className="w-full h-14 bg-[#B3543A] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#964630] transition-colors disabled:opacity-70 shadow-md">
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-24 px-6 bg-[#E8E8D0]/30 border-t border-[#5A5A40]/10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-serif italic text-[#2D2D2A] mb-4">Policies & Guidelines</h2>
            <p className="text-[#4A4A4A] font-light">Please review our reservation and cancellation terms.</p>
          </motion.div>

          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-[#5A5A40]/10"
            >
              <h3 className="text-xl font-serif italic text-[#5A5A40] mb-6">Rules for Payment of Balance</h3>
              
              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#2D2D2A] mb-2">For Reservations Made 30 Days or More Prior to Event</h4>
                <p className="text-[#4A4A4A] font-light leading-relaxed text-sm">
                  If balance of payment is not made 30 days before the event date, 50% funds will be returned and the reservation cancelled. 50% of the reservation payment is non-refundable because (1) There are admin costs associated with processing reservations and (2) The event date will have been unavailable to others resulting in likely loss of an event date.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#2D2D2A] mb-2">For Reservations Made Within 30 Days of Event Date</h4>
                <p className="text-[#4A4A4A] font-light leading-relaxed text-sm">
                  The balance of payment must be made within 48 hours of deposit payment or the reservation will be cancelled and 80% funds returned. 20% of the reservation payment is non-refundable because there are admin costs associated with processing reservations.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-[#5A5A40]/10"
            >
              <h3 className="text-xl font-serif italic text-[#5A5A40] mb-6">Cancellations and Refunds</h3>
              
              <ul className="space-y-4 mb-8 text-[#4A4A4A] font-light text-sm">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B3543A] mt-2 mr-3 shrink-0"></div>
                  <span>Cancellations made <strong>more than 90 days</strong> before an event will be refunded in full.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B3543A] mt-2 mr-3 shrink-0"></div>
                  <span>Cancellations made <strong>more than 60 days</strong> before an event but less than 90 days will be refunded at 75%.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B3543A] mt-2 mr-3 shrink-0"></div>
                  <span>Cancellations made <strong>more than 30 days</strong> before an event but less than 60 days will be refunded at 60%.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B3543A] mt-2 mr-3 shrink-0"></div>
                  <span>Cancellations made <strong>less than 30 days</strong> before the reserved date will be refunded at 50%.</span>
                </li>
              </ul>

              <div className="pt-6 border-t border-[#5A5A40]/10">
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#2D2D2A] mb-2">Refund Process</h4>
                <p className="text-[#4A4A4A] font-light leading-relaxed text-sm mb-4">
                  Once informed regarding your refund, it will be processed within 3 business days and refunded through the same channel that payment was made. Please call if you wish to make alternate refund arrangements.
                </p>
                <p className="text-[#5A5A40] font-medium text-sm">
                  Need help? Contact us at <a href="mailto:info@bethanygardens.co.ke" className="text-[#B3543A] hover:underline font-bold">info@bethanygardens.co.ke</a> for questions related to refunds and returns.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#2C3F30] text-[#F5F5F0] pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-serif font-bold tracking-tight mb-6 text-[#E8E8D0]">Bethany Gardens.</h2>
              <p className="text-[#F5F5F0]/70 font-light leading-relaxed max-w-sm mb-8">
                The Place for Memorable Events. A beautifully landscaped outdoor estate providing an exclusive backdrop for life's most important celebrations.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[#F5F5F0]/10 flex items-center justify-center hover:bg-[#B3543A] transition-colors text-[#F5F5F0]">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#F5F5F0]/10 flex items-center justify-center hover:bg-[#B3543A] transition-colors text-[#F5F5F0]">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-widest opacity-50 mb-6 font-semibold">Contact & Location</h4>
              <ul className="space-y-4 text-[#F5F5F0]/70 font-light text-sm">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-0.5 shrink-0 text-[#B3543A]" />
                  <span>Muteero Rise, off Kerarapon Road<br/>(past Muteero Church)<br/>Karen, Nairobi, Kenya</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 shrink-0 text-[#B3543A]" />
                  <a href="mailto:info@bethanygardens.co.ke" className="hover:text-white transition-colors">info@bethanygardens.co.ke</a>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 shrink-0 text-[#B3543A]" />
                  <a href="tel:+254740720857" className="hover:text-white transition-colors">+254 740720857</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-widest opacity-50 mb-6 font-semibold">Working Hours</h4>
              <ul className="space-y-4 text-[#F5F5F0]/70 font-light mb-8 text-sm">
                <li className="flex items-center justify-between">
                  <span>Weekdays</span>
                  <span className="text-white font-medium">9:00 AM – 4:00 PM</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Event Days</span>
                  <span className="text-white font-medium">8:00 AM – 6:00 PM</span>
                </li>
              </ul>
              
              <form className="mt-6" action="#">
                <label htmlFor="email-newsletter" className="sr-only">Sign up for updates</label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    id="email-newsletter"
                    placeholder="Enter your email" 
                    className="w-full bg-[#F5F5F0]/5 border border-[#F5F5F0]/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B3543A] text-white placeholder:text-[#F5F5F0]/50 transition-colors"
                  />
                  <button type="submit" className="bg-[#B3543A] text-white px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-[#964630] transition-colors whitespace-nowrap">
                    Submit
                  </button>
                </div>
                <p className="text-[10px] text-[#F5F5F0]/40 mt-2">Enter your email to receive an information package.</p>
              </form>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#F5F5F0]/10 flex flex-col md:flex-row justify-between items-center text-sm text-[#F5F5F0]/50 font-light">
            <p>&copy; {new Date().getFullYear()} Bethany Gardens. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
