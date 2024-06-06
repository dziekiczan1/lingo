import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(), // serial auto-increments the id - can use uuid as well
  title: text("title").notNull(),
  imageSrc: text("image_src").notNull(),
});
