// src/types/data.ts
export interface Task {
    taskId: string;
    subject: string;
    teacher: string;
    schoolYear: string;
    title: string;
    instructions: string;
    startDate: string; // Use ISO 8601 format strings (e.g., "2024-09-12T23:59:59Z")
    endDate: string;   // Use ISO 8601 format strings
    // priority?: number; // Optional: if needed later
  }
  
// Optionally define Subject type if needed elsewhere
export interface Subject {
    id: string; // e.g., "RES3"
    name: string; // e.g., "Research 3"
    teacher: string;
    schoolYear: string;
}

// src/types/data.ts (or local file)
export interface SubjectInfo {
  id: string; // e.g., "RES3"
  teacher: string;
  schoolYear: string;
  // Add taskCount if needed later
}