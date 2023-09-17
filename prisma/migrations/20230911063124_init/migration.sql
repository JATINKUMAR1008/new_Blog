/*
  Warnings:

  - Added the required column `author` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Blog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "date" TEXT NOT NULL
);
INSERT INTO "new_Blog" ("content", "description", "id", "img", "title") SELECT "content", "description", "id", "img", "title" FROM "Blog";
DROP TABLE "Blog";
ALTER TABLE "new_Blog" RENAME TO "Blog";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
