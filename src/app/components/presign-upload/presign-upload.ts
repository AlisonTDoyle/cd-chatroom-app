import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-presign-upload',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './presign-upload.html',
  styleUrl: './presign-upload.css',
})
export class PresignUpload {
  presignRaw: string = '';
  selectedFile: File | null = null;
  uploading = false;
  uploadResult = '';

  constructor(private http: HttpClient) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] || null;
  }

  upload() {
    if (!this.selectedFile || !this.presignRaw) {
      return;
    }

    let presign;
    try {
      presign = JSON.parse(this.presignRaw);
    } catch (e) {
      this.uploadResult = 'Invalid JSON';
      return;
    }

    const formData = new FormData();

    // Append S3 fields
    Object.entries(presign.upload.fields).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    // Append file last
    formData.append('file', this.selectedFile);

    this.uploading = true;
    this.uploadResult = '';

    this.http.post(presign.upload.url, formData, {
      observe: 'response'
    }).subscribe({
      next: (res) => {
        console.log('Upload response:', res);
        this.uploading = false;
        this.uploadResult = `Upload successful: ${res.status}`;
      },
      error: (err) => {
        this.uploading = false;
        this.uploadResult = `Upload failed: ${err.status}`;
      }
    });
  }
}
