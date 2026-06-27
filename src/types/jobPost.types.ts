export interface GetJobPostDto {
    id: string;
    title: string | null;
    viewCount: number;
    isActive: boolean;
    lastDate: string | null;
    companyId: string;
    companyName: string;
    categoryId: string;
    categoryName: string;
    vacationTypeId: string;
    vacationTypeName: string;
}

export interface GetJobPostSkillDto {
    id: string;
    name: string | null;
}

export interface GetJobPostDetailsDto {
    id: string;
    createdAt: string;
    createdBy: string | null;
    updatedAt: string | null;
    updatedBy: string | null;
    title: string | null;
    description: string | null;
    requirements: string | null;
    isActive: boolean;
    lastDate: string | null;
    viewCount: number;
    companyId: string;
    companyName: string;
    categoryId: string;
    categoryName: string;
    vacationTypeId: string;
    vacationTypeName: string;
    requiredSkills: GetJobPostSkillDto[] | null;
}

export interface CreateJobPostRequest {
    title: string | null;
    description: string | null;
    requirements: string | null;
    isActive: boolean;
    lastDate: string | null;
    companyId: string;
    categoryId: string;
    vacationTypeId: string;
}

export interface CreateJobPostResponse {
    id: string;
    title: string | null;
    viewCount: number;
    isActive: boolean;
    lastDate: string | null;
    companyId: string;
    companyName: string;
    categoryId: string;
    categoryName: string;
    vacationTypeId: string;
    vacationTypeName: string;
}

export interface UpdateJobPostRequest {
    id: string;
    title: string | null;
    description: string | null;
    requirements: string | null;
    isActive: boolean;
    lastDate: string | null;
    companyId: string;
    categoryId: string;
    vacationTypeId: string;
}

export interface UpdateJobPostResponse {
    id: string;
    title: string | null;
    viewCount: number;
    isActive: boolean;
    lastDate: string | null;
    companyId: string;
    companyName: string;
    categoryId: string;
    categoryName: string;
    vacationTypeId: string;
    vacationTypeName: string;
}
