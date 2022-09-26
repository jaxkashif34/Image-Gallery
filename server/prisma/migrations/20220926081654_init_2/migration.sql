-- CreateTable
CREATE TABLE "Image" (
    "asset_id" TEXT NOT NULL,
    "width" INTEGER DEFAULT 600,
    "height" INTEGER DEFAULT 600,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "bytes" INTEGER,
    "secure_url" TEXT,
    "name" TEXT,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("asset_id")
);
