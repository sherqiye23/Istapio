export interface GetCompanyDto {
    id: string;
    name: string | null;
    logoUrl: string | null;
    userId: string | null;
    userName: string | null;
}

export interface GetCompanyJobPostDto {
    id: string;
    title: string | null;
    categoryId: string;
    categoryName: string | null;
    vacationTypeId: string;
    vacationTypeName: string | null;
    isActive: boolean;
    viewCount: number
}

export interface GetCategoryDetailsDto {
    id: string;
    createdAt: string;
    createdBy: string | null;
    updatedAt: string | null;
    updatedBy: string | null;
    name: string | null;
    description: string | null;
    logoUrl: string | null;
    userId: string | null;
    userName: string | null;
    jobPosts: GetCompanyJobPostDto[] | null;
}

export interface CreateCompanyRequest {
    name: string | null;
    description: string | null;
    logoUrl: string | null;
    userId: string | null;
}

export interface CreateCompanyResponse {
    id: string;
    name: string;
    logoUrl: string | null;
    userId: string | null;
    userName: string | null;
}

export interface UpdateCompanyRequest {
    id: string;
    name: string | null;
    description: string | null;
    logoUrl: string | null;
}

export interface UpdateCompanyResponse {
    id: string;
    name: string | null;
    logoUrl: string | null;
    userId: string | null;
    userName: string | null;
}

