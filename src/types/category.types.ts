export interface GetCategoryDto {
    id: string;
    name: string | null;
    parentId: string | null;
    subCategories: GetCategoryDto[] | null;
}

export interface GetCategoryJobPostDto {
    id: string;
    title: string | null;
    companyId: string;
    companyName: string | null;
    vacationTypeId: string;
    vacationTypeName: string | null;
    isActive: boolean;
    viewCount: number
}

export interface GetCategoryDetailsDto {
    id: string;
    name: string | null;
    jobPostsCount: number;
    parentId: string | null;
    subCategories: GetCategoryDto[] | null;
    jobPosts: GetCategoryJobPostDto[] | null;
}

export interface CreateCategoryRequest {
    name: string;
    parentId?: string;
}

export interface CreateCategoryResponse {
    id: string;
    name: string;
    parentId?: string;
    subCategories: GetCategoryDto[] | null;
}

export interface UpdateCategoryRequest {
    id: string;
    name: string | null;
    parentId: string | null;
}

export interface UpdateCategoryResponse {
    id: string;
    name: string | null;
    parentId: string | null;
    subCategories: GetCategoryDto[] | null;
}

