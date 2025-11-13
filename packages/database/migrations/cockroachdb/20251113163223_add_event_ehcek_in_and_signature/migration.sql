-- AlterTable
ALTER TABLE "coaches" ADD COLUMN     "signature" STRING;

-- AlterTable
ALTER TABLE "students" ADD COLUMN     "signature" STRING;

-- CreateTable
CREATE TABLE "events" (
    "id" UUID NOT NULL,
    "name" STRING NOT NULL,
    "starts_at" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_check_ins" (
    "studentId" UUID NOT NULL,
    "eventId" UUID NOT NULL,
    "cheked_in_at" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "event_check_ins_pkey" PRIMARY KEY ("studentId","eventId")
);

-- AddForeignKey
ALTER TABLE "event_check_ins" ADD CONSTRAINT "event_check_ins_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_check_ins" ADD CONSTRAINT "event_check_ins_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
