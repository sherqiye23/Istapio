export interface GetSkillDto {
    id: string;
    name: string | null;
}

export interface GetSkillJobPostDto {
    id: string;
    jobPostTitle: string | null;
}

export interface GetSkillUserDto {
    id: string;
    userName: string | null;
}

export interface GetSkillDetailsDto {
    id: string;
    name: string | null;
    jobPosts: GetSkillJobPostDto[] | null;
    users: GetSkillUserDto[] | null;
}

export interface CreateSkillRequest {
    name: string | null;
}

export interface CreateSkillResponse {
    id: string;
    name: string | null;
}

export interface UpdateSkillRequest {
    id: string;
    name: string | null;
}

export interface UpdateSkillResponse {
    id: string;
    name: string | null;
}
