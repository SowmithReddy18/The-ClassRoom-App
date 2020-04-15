class Course {
    "id": string;
    "name": string;
    "section": string;
    "descriptionHeading": string;
    "description": string;
    "room": string;
    "ownerId": string;
    "creationTime": string;
    "updateTime": string;
    "enrollmentCode": string;
    "courseState": CourseState;
    "alternateLink": string;
    "teacherGroupEmail": string;
    "courseGroupEmail": string;
    "teacherFolder": DriveFolder;
    "guardiansEnabled": boolean;
    "calendarId": string;
}

enum CourseState {
    COURSE_STATE_UNSPECIFIED,
    ACTIVE,
    ARCHIVED,
    PROVISIONED,
    DECLINED,
    SUSPENDED
}

class DriveFolder {
    "id": string;
    "title": string;
    "alternateLink": string;
}

class Announcement {
    "courseId": string;
    "id": string;
    "text": string;
    "state": AnnouncementState;
    "alternateLink": string;
    "creationTime": string;
    "updateTime": string;
    "scheduledTime": string;
    "assigneeMode": AssigneeMode;
    "individualStudentsOptions": IndividualStudentsOptions;
    "creatorUserId": string;
}

enum AnnouncementState {
    ANNOUNCEMENT_STATE_UNSPECIFIED,
    PUBLISHED,
    DRAFT,
    DELETED
}

enum AssigneeMode {
    ASSIGNEE_MODE_UNSPECIFIED,
    ALL_STUDENTS,
    INDIVIDUAL_STUDENTS
}

class IndividualStudentsOptions {
    "studentIds": [string]
}