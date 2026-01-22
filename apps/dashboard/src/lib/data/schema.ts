import z from "zod";
export type SchoolSearch = {
    schoolId: string;
    schoolName: string;
    competitionInfo: string;
}
export type TeamSearch = {
    teamId: string;
    additionalInfo: string;
}