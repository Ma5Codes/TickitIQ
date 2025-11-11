

import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getUsersStripeConnectId = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .filter((q) => q.neq(q.field("stripeConnectId"), undefined))
      .first();
    return user?.stripeConnectId;
  },
});


export const updateOrCreateUserStripeConnectId = mutation({
  args: { userId: v.string(), stripeConnectId: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_user_id", (q) => q.eq("userId", args.userId))
      .first();

    if (!user) {
      throw new Error("User not found");
    }

    await ctx.db.patch(user._id, { stripeConnectId: args.stripeConnectId });
  },
});

export const updateUser = mutation({
    args: {
      userId: v.string(),
      name: v.string(),
      email: v.string(),
    },
    handler: async (ctx, { userId, name, email }) => {
      // Check if user exists
      const existingUser = await ctx.db
        .query("users")
        .withIndex("by_user_id", (q) => q.eq("userId", userId))
        .first();
  
      if (existingUser) {
        // Update existing user
        await ctx.db.patch(existingUser._id, {
          name,
          email,
        });
        return existingUser._id;
      }
  
      // Create new user
      const newUserId = await ctx.db.insert("users", {
        userId,
        name,
        email,
        stripeConnectId: undefined,
      });
  
      return newUserId;
    },
  });



export const getUserById = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_user_id", (q) => q.eq("userId", userId))
      .first();

    return user;
  },
});

export const getUserByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, { email }) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", email))
      .first();

    return user;
  },
});

export const createUser = mutation({
  args: {
    email: v.string(),
    name: v.string(),
    hashedPassword: v.string(),
  },
  handler: async (ctx, { email, name, hashedPassword }) => {
    // Check if user already exists
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", email))
      .first();

    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    // Generate a unique userId
    const userId = crypto.randomUUID();

    // Create new user
    const newUserId = await ctx.db.insert("users", {
      userId,
      name,
      email,
      hashedPassword,
      stripeConnectId: undefined,
    });

    return { userId, _id: newUserId };
  },
});

export const authenticateUser = query({
  args: {
    email: v.string(),
  },
  handler: async (ctx, { email }) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", email))
      .first();

    if (!user) {
      return null;
    }

    return {
      userId: user.userId,
      email: user.email,
      name: user.name,
      hashedPassword: user.hashedPassword,
    };
  },
});