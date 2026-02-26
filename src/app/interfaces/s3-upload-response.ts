interface UploadFields {
    key: string;
    "x-amz-storage-class": string;
    success_action_status: string;
    AWSAccessKeyId: string;
    "x-amz-security-token": string;
    policy: string;
    signature: string;
}

interface Upload {
    url: string;
    fields: UploadFields;
}

interface S3UploadResponse {
    objectKey: string;
    bucket: string;
    storageClass: string;
    expiresInSeconds: number;
    maxUploadBytes: number;
    upload: Upload;
    generatedAt: string; // ISO timestamp
}