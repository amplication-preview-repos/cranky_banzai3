export type ErrorNotification = {
  createdAt: Date;
  errorType: string | null;
  id: string;
  isResolved: boolean | null;
  message: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
