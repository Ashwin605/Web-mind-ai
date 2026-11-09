// ============================================================
// ENROLLMENT CONFIGURATION
// Update these URLs once your Google Forms are created.
// ============================================================

export const enrollmentConfig = {
  websiteCourseFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdwSt6n4SN38ecLQIoJOQq4YWHhEEu0IPPoJRjvAQjaMpswPQ/viewform",
  appCourseFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdwSt6n4SN38ecLQIoJOQq4YWHhEEu0IPPoJRjvAQjaMpswPQ/viewform",
};

export function getEnrollmentUrl(course: "website" | "app"): string | null {
  if (course === "website") {
    return enrollmentConfig.websiteCourseFormUrl || null;
  }
  return enrollmentConfig.appCourseFormUrl || null;
}
