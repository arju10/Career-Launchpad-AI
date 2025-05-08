"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

// This function updates the user profile and creates an industry insight if it doesn't exist 
export async function updateUser(data) {
    // Check if the user is authenticated and get their userId 
  const { userId } = await auth(); // This will throw an error if the user is not authenticated
  if (!userId) throw new Error("Unauthorized"); // Handle the case where userId is not available

//   Check if the user exists in the database
  const user = await db.user.findUnique({
    where: { clerkUserId: userId }, // This is the userId from Clerk 
  });

  if (!user) throw new Error("User not found"); // Handle the case where user is not found 

  // Validate the input data 
  try {
    //Step 1:  Find if the industry exists in the database

    //Step 2: If it doesn't exist, create it with default values - will replace this with AI later

    // Step 3: Update the user with the new industry and other details


    // Start a transaction to handle both operations 
    const result = await db.$transaction(
      async (tx) => {
        // First check if industry exists 
        let industryInsight = await tx.industryInsight.findUnique({
          where: {
            industry: data.industry,
          },
        }); // This will return null if the industry doesn't exist 

        // If industry doesn't exist, create it with default values
        if (!industryInsight) {
          industryInsight = await db.industryInsight.create({
            data: {
                industry: data.industry,
                salaryRanges: [], // Default empty value 
                growthRate: 0, // Default value
                demandLevel: "MEDIUM", // Default value
                topSkills: [], // Default empty value
                marketOutlook: "NEUTRAL", // Default value
                keyTrends: [], // Default empty value
                recommendedSkills: [], // Default empty value
                nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), //One week from now
            },
          });
        }

        // Now update the user
        const updatedUser = await tx.user.update({
          where: {
            id: user.id,
          },
          data: {
            industry: data.industry,
            experience: data.experience,
            bio: data.bio,
            skills: data.skills,
          },
        });

        return { updatedUser, industryInsight };
      },
      {
        timeout: 10000, // default: 5000
      }
    );

    revalidatePath("/");
    return {success:true, ...result};
  } catch (error) {
    console.error("Error updating user and industry:", error.message);
    throw new Error("Failed to update profile" + error.message);
  }
}

// This function checks if the user is onboarded by checking if they have an industry set
export async function getUserOnboardingStatus() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
      select: {
        industry: true,
      },
    });

    return {
      isOnboarded: !!user?.industry,
    };
  } catch (error) {
    console.error("Error checking onboarding status:", error);
    throw new Error("Failed to check onboarding status");
  }
}