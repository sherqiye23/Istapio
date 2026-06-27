export interface GetSettingDto {
    id: string;
    key: string | null;
    value: string | null;
    createdAt: string;
    createdBy: string | null;
    updatedAt: string | null;
    updatedBy: string | null;
}

export interface CreateSettingRequest {
    key: string | null;
    value: string | null;
}

export interface CreateSettingResponse {
    id: string;
    key: string | null;
    value: string | null;
    createdAt: string;
    createdBy: string | null;
    updatedAt: string | null;
    updatedBy: string | null;
}

export interface CreateSettingValueRequest {
    value: string | null;
}

export interface UpdateSettingRequest {
    id: string;
    key: string | null;
    value: string | null;
}

export interface UpdateSettingResponse {
    id: string;
    key: string | null;
    value: string | null;
    createdAt: string;
    createdBy: string | null;
    updatedAt: string | null;
    updatedBy: string | null;
}
