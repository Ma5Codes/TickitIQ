# 🎟️ **TickitIQ — Real-Time Event Ticketing Platform**

TickitIQ is a modern, real-time event ticketing platform built with **Next.js 15**, **Convex**, **Clerk**, and **Stripe Connect**.
It features a smart queue system, real-time updates, and secure, seamless payments for both buyers and event organizers.

---

## 🚀 **Features**

### 🎫 **For Event Attendees**

* Real-time ticket availability tracking
* Smart queueing system with live position updates
* Time-limited ticket offers
* Mobile-friendly ticket wallet
* Secure payments via Stripe
* Digital tickets with QR codes
* Automatic refunds for cancelled events

### 🧑‍💼 **For Event Organizers**

* Direct payouts via Stripe Connect
* Real-time sales monitoring
* Automated queue management
* Event analytics dashboard
* Automatic ticket recycling
* Customizable ticket limits
* One-click event cancellation
* Bulk refund processing

### 🛠️ **Technical Features**

* Real-time backend powered by Convex
* Authentication with Clerk
* Payment processing with Stripe Connect
* SSR + CSR hybrid architecture
* UI built with Tailwind CSS + shadcn/ui
* Fully responsive
* Rate limiting on ticket actions
* Built-in fraud prevention
* Toast notifications for feedback

### 🎨 **UI / UX Features**

* Instant feedback with toasts
* Complete design system using shadcn/ui
* Full accessibility
* Page transitions and animations
* Mobile-first responsive design
* Smooth loading states
* Micro-interactions for engagement

---

## 🧰 **Getting Started**

### **Prerequisites**

* Node.js 18+
* npm or yarn
* Stripe Account
* Clerk Account
* Convex Account

---

## 🔐 **Environment Variables**

Create a file named **`.env.local`**:

```bash
NEXT_PUBLIC_CONVEX_URL=your_convex_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_WEBHOOK_SECRET=your_webhook_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 📦 **Installation**

```bash
# Clone your repository
git clone https://github.com/Ma5Codes/TickitIQ

# Install dependencies
npm install

# Start development server
npm run dev

# Start Convex (in a separate terminal)
npx convex dev
```

---

## 🔑 **Setting up Clerk**

1. Create a Clerk app
2. Configure OAuth providers
3. Add redirect URLs
4. Add your Clerk keys to `.env.local`

---

## ⚡ **Setting up Convex**

1. Create a Convex project

2. Install Convex

   ```bash
   npm install convex
   ```

3. Initialize Convex

   ```bash
   npx convex init
   ```

4. Add your Convex deployment URL

   ```bash
   NEXT_PUBLIC_CONVEX_URL=your_convex_url
   ```

5. Start the Convex dev server

   ```bash
   npx convex dev
   ```

---

## 💳 **Setting up Stripe**

1. Create a Stripe account
2. Enable Stripe Connect
3. Add payout settings
4. Configure webhook endpoint

---

## 🪝 **Stripe Webhooks (Local Development)**

1. Install Stripe CLI

2. Login:

   ```bash
   stripe login
   ```

3. Start forwarding webhooks:

   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```

4. Add your webhook secret to `.env.local`:

   ```bash
   STRIPE_WEBHOOK_SECRET=whsec_xxxxx
   ```

Keep Stripe CLI running while testing payments.

---

## 🎨 **Setting up UI Components (shadcn/ui)**

```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add toast
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add toaster
```

---

## 🏛️ **Architecture**

### **Database Schema**

* Events
* Tickets
* Waiting List
* Users

### **Core Systems**

* Real-time queue engine
* Rate-limiting
* Automated offer expiration
* Stripe payment + payout system
* User session sync

---

## 🎯 **Usage**

### **Creating an Event**

1. Sign up as an organizer
2. Complete Stripe Connect onboarding
3. Create an event
4. Publish tickets

### **Buying Tickets**

1. Browse events
2. Join queue
3. Receive offer
4. Complete purchase within timer
5. Access digital ticket (QR code)

---

## 🔄 **Refunds & Cancellations**

1. Organizers can cancel events
2. System automatically issues refunds
3. Users can track refund status

---

## ⭐ **User Experience**

### Real-time Feedback:

* Queue position
* Ticket availability
* Payment success/failure
* Offer timers
* Notifications

### Visual Enhancements:

* Animated cards & buttons
* Skeleton loaders
* Smooth transitions
* Progress indicators

---

## ❤️ Built with passion for modern ticketing.

