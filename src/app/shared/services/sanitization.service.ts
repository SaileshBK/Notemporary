import { Injectable } from '@angular/core';
import * as DOMPurify from 'dompurify';

@Injectable({
  providedIn: 'root'
})
export class SanitizationService {

  sanitize(data: string): string {
    // Set up a flag to detect sanitization
    // Initialize a flag to detect any sanitization
    let wasSanitized = false;

    // Function to set the flag
    const onSanitize = () => {
      wasSanitized = true;
    };

    // Add hooks for different sanitization actions
    DOMPurify.addHook('uponSanitizeElement', onSanitize);
    DOMPurify.addHook('uponSanitizeAttribute', onSanitize);
    // You can add more hooks here for other sanitization checks

    // Sanitize the input
    const sanitizedInput = DOMPurify.sanitize(data);

    // Check if the input was sanitized
    if (wasSanitized) {
      console.log("Some parts of input were not safe and have been removed.");
      return '';
    }

    DOMPurify.removeAllHooks();
    return data;
  }
}
