"use server";
import { currentUser } from "@clerk/nextjs"; // Fetch the current authenticated user
import { client } from "@/lib/db"; // Prisma client for database operations

export const onIntegrateDomain = async (domain: string, icon: string) => {
  const user = await currentUser();
  if (!user) return { status: 401, message: "Unauthorized" };

  try {
    // Fetch the user's subscription and count their current domains.
    const userSubscription = await client.subscription.findUnique({
      where: { userId: user.id },
    });

    if (!userSubscription) {
      return { status: 403, message: "No active subscription found" };
    }

    const userDomainsCount = await client.domain.count({
      where: { userId: user.id },
    });

    // Check if the domain already exists.
    const existingDomain = await client.domain.findUnique({
      where: { domain },
    });

    if (existingDomain) {
      return { status: 409, message: "Domain already integrated" };
    }

    // Check the subscription plan and enforce limits.
    const planLimits = {
      free: 1,
      pro: 5,
      enterprise: 10,
    };

    const allowedDomains = planLimits[userSubscription.plan];

    if (userDomainsCount >= allowedDomains) {
      return { status: 403, message: "Domain limit reached for your subscription plan" };
    }

    // Create a new domain entry and link it to the user.
    await client.domain.create({
      data: {
        domain,
        icon,
        userId: user.id,
      },
    });

    return { status: 200, message: "Domain successfully added" };
  } catch (error) {
    console.error(error);
    return { status: 500, message: "Internal Server Error" };
  }
};