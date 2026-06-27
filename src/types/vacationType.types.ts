export interface GetVacationTypeDto {
    id: string;
    name: string | null;
}

export interface GetVacationTypeJobPostDto {
    id: string;
    title: string | null;
    companyId: string;
    companyName: string | null;
    categoryId: string;
    categoryName: string | null;
    isActive: boolean;
    viewCount: number;
}

export interface GetVacationTypeDetailsDto {
    id: string;
    name: string | null;
    jobPosts: GetVacationTypeJobPostDto[] | null;
}

export interface CreateVacationTypeRequest {
    name: string | null;
}

export interface CreateVacationTypeResponse {
    id: string;
    name: string | null;
}

export interface UpdateVacationTypeRequest {
    id: string;
    name: string | null;
}

export interface UpdateVacationTypeResponse {
    id: string;
    name: string | null;
}
