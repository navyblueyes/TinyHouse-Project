import { IResolvers } from "apollo-server-express";
import { ObjectId } from "mongodb";
import { Database, Listing } from "../lib/types";

export const resolvers: IResolvers = {
  Listing: {
    id: (listing: Listing) => listing._id.toString(),
  },
  Query: {
    listings: async (
      _root: undefined,
      _args: {},
      { db }: { db: Database }
    ): Promise<Listing[]> => {
      return await db.listings.find({}).toArray();
    },
  },
  Mutation: {
    deleteListing: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: Database }
    ): Promise<Listing> => {
      const deleteResults = await db.listings.findOneAndDelete({
        _id: new ObjectId(id),
      });

      if (!deleteResults.value) {
        throw new Error("delete failed");
      }

      return deleteResults.value;
    },
  },
};
