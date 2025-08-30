# Part 1 - Install Next JS, Tailwind CSS & Create the first template

1. Runn the initial command.
```bash
npx create-next-app@latest
```
2. Name the app: budget-tracker-app.
3. Delete content in home page, go to `src/page.tsx`
```typescript
export default function Home() {

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple budget tracker application.</p>
    </div>
  );
}
```
4. Add application to GitHub repo.
# Part 2 - Install Neon & Prisma
## Create a database in neon  database
1. Create your project inside neon database
2. Connect database to app.
- Click on connect
- Copy the connection string.
- Add the string into an `.env` file.
```
DATABASE_URL=postgresql://neondb...
```
## Connect Prisma to the application
1. Go back to neon and click on integrations.
2. Look for Prisma and read the instructions.
3. Open your application folder.
4. Install prisma.
```bash
npm i -D prisma
```
4. Initialize prisma.
```bash
npx prisma init
```
5. Verify `prisma/schema.prisma` file was created.
```SQL
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```
6. Add User and expense record to the database.
```SQL
model User {
  id          String    @id @default(uuid())
  clerkUserId String    @unique
  email       String    @unique
  name        String?
  imageUrl    String?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  Records     Records[]
}

  

model Records {
  id        String   @id @default(uuid())
  text      String
  amount    Float
  category  String   @default("Other")
  date      DateTime @default(now())
  userId    String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  user User @relation(fields: [userId], references: [clerkUserId], onDelete: Cascade)

  @@index([userId])
}
```
7. Generate prisma model
```SQL
npx prisma generate
```
7. Deploy model to neon.
```bash
npx prisma migrate dev
```
8. Set the name to `budget-tracker-app`.
9. Verify the tables were created in your Neon database.
### Create a file to connect to the database & prevent reconnections if we are already connected.
1. Create a lib (`src/lib`) folder, create a `db.ts` file inside.
```typescript
import { PrismaClient } from "@prisma/client";

// Extend the global type definition to include a prisma instance
declare global {
  var prisma: PrismaClient | undefined;
}

// Use the existing global Prisma instance if it exists, 
// otherwise create a new one
export const db = global.prisma || new PrismaClient();

// In development, store the Prisma instance in the global scope
// This ensures hot reloading doesn't create multiple PrismaClient instances,
// which could otherwise exhaust the database connection limit
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
```
# Part 3 - Setup clerk authentication
