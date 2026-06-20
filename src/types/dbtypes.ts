export interface BaseEntity {
    id: string;
    createdAt: string;
    createdBy?: string;
    updatedAt?: string;
    updatedBy?: string;
    isDeleted: boolean;
    deletedAt?: string;
    deletedBy?: string;
}

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    created: string;
    lastLoginIp: string;
}

export interface Company extends BaseEntity {
    name: string;
    description: string;
    logoUrl: string;
    userId: string;
}

export interface JobPost extends BaseEntity {
    title: string;
    description: string;
    requirements: string;
    isActive: boolean;
    viewCount: number;
    lastDate: string;
    companyId: string;
    categoryId: string;
    vacationTypeId: string;
}

export interface Category {
    id: string;
    name: string;
    parentId?: string;
}

export interface VacationType {
    id: string;
    name: string;
}

export interface Skill {
    id: string;
    name: string;
}

// Stats response wrapper for the dashboard counters
export interface DashboardStats {
    totalUsers: number;
    totalCompanies: number;
    totalJobPosts: number;
    totalViews: number;
}