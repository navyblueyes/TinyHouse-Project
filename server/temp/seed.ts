require("dotenv").config();

import { connectDatabase } from "../src/database";
import { Listing } from "../src/lib/types";

const seed = async () => {
  try {
    console.log("[seed] : running...");
    const db = await connectDatabase();
    const listings: Listing[] = [
      {
        _id: "001",
        title: "Clean and fully furnished apartment. 5 min away from CN Tower",
        image: "https://media.publit.io/file/toronto-listing-1_exv0tf.jpg",
        address: "3210 Scotchmere Dr W, Toronto, ON, CA",
        price: 10000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5,
      },
      {
        _id: "002",
        title: "Luxurious home with private pool",
        image: "https://media.publit.io/file/los-angeles-listing-1_aikhx7.jpg",
        address: "100 Hollywood Hills Dr, Los Angeles, California",
        price: 15000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 1,
        rating: 4,
      },
      {
        _id: "003",
        title: "Single bedroom located in the heart of downtown San Fransisco",
        image:
          "https://media.publit.io/file/san-fransisco-listing-1_qzntl4.jpg",
        address: "200 Sunnyside Rd, San Fransisco, California",
        price: 25000,
        numOfGuests: 3,
        numOfBeds: 2,
        numOfBaths: 2,
        rating: 3,
      },
    ];
  } catch {
    throw new Error("failed to seed database");
  }
};

seed();
