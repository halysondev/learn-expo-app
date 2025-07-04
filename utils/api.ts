// API Configuration utility
// Centralized API configuration based on environment variables

const isDev = __DEV__;

// Base URLs from environment
const DEV_URL = process.env.EXPO_PUBLIC_API_URL_DEV || 'http://localhost:8081';
const PROD_URL = process.env.EXPO_PUBLIC_API_URL_PROD || 'https://learn-halydev.expo.app';
const API_PATH = process.env.EXPO_PUBLIC_API_BASE_URL || '/api';

// API Configuration
export const API_CONFIG = {
  baseUrl: isDev ? DEV_URL : PROD_URL,
  path: API_PATH,
  fullUrl: `${isDev ? DEV_URL : PROD_URL}${API_PATH}`,
  isDev,
  environment: isDev ? 'development' : 'production',
};

// Helper function to build API URLs
export function buildApiUrl(endpoint: string, params?: Record<string, string | number>): string {
  let url = `${API_CONFIG.fullUrl}${endpoint}`;
  
  if (params) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      searchParams.append(key, String(value));
    });
    url += `?${searchParams.toString()}`;
  }
  
  return url;
}

// API helper functions
export const api = {
  // GET request helper
  async get<T>(endpoint: string, params?: Record<string, string | number>): Promise<T> {
    const response = await fetch(buildApiUrl(endpoint, params));
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },

  // POST request helper
  async post<T>(endpoint: string, data?: any): Promise<T> {
    const response = await fetch(buildApiUrl(endpoint), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : undefined,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },

  // DELETE request helper
  async delete<T>(endpoint: string, params?: Record<string, string | number>): Promise<T> {
    const response = await fetch(buildApiUrl(endpoint, params), {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },
}; 