CREATE TABLE `Coach` (
	`id` text PRIMARY KEY NOT NULL,
	`userId` text NOT NULL,
	`externalId` text,
	`schoolId` text NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`schoolId`) REFERENCES `School`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `Coach_userId_unique` ON `Coach` (`userId`);--> statement-breakpoint
CREATE UNIQUE INDEX `Coach_externalId_unique` ON `Coach` (`externalId`);--> statement-breakpoint
CREATE TABLE `School` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`city` text,
	`state` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `School_name_unique` ON `School` (`name`);--> statement-breakpoint
CREATE TABLE `Student` (
	`id` text PRIMARY KEY NOT NULL,
	`userId` text NOT NULL,
	`externalId` text NOT NULL,
	`username` text NOT NULL,
	`division` text NOT NULL,
	`loginId` text,
	`pin` text,
	`teamId` text NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`teamId`) REFERENCES `Team`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `Student_userId_unique` ON `Student` (`userId`);--> statement-breakpoint
CREATE UNIQUE INDEX `Student_externalId_unique` ON `Student` (`externalId`);--> statement-breakpoint
CREATE UNIQUE INDEX `Student_username_unique` ON `Student` (`username`);--> statement-breakpoint
CREATE UNIQUE INDEX `Student_loginId_unique` ON `Student` (`loginId`);--> statement-breakpoint
CREATE TABLE `Team` (
	`id` text PRIMARY KEY NOT NULL,
	`domain` text NOT NULL,
	`coachId` text NOT NULL,
	FOREIGN KEY (`coachId`) REFERENCES `Coach`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `Team_domain_unique` ON `Team` (`domain`);--> statement-breakpoint
CREATE TABLE `User` (
	`id` text PRIMARY KEY NOT NULL,
	`firstName` text NOT NULL,
	`lastName` text NOT NULL,
	`role` text NOT NULL
);
