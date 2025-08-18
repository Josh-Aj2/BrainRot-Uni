// Utility functions for displaying enhanced error messages

/**
 * Get a user-friendly error message from an error object
 * @param {Error} error - The error object from fetchData
 * @returns {string} User-friendly error message
 */
export const getErrorMessage = (error) => {
  if (error?.userMessage) {
    return error.userMessage;
  }

  if (error?.message) {
    return error.message;
  }

  return "An unexpected error occurred. Please try again.";
};

/**
 * Get error type for styling and handling
 * @param {Error} error - The error object from fetchData
 * @returns {string} Error type for categorization
 */
export const getErrorType = (error) => {
  if (error?.errorType) {
    return error.errorType;
  }

  if (error?.status) {
    if (error.status >= 400 && error.status < 500) {
      return "CLIENT_ERROR";
    } else if (error.status >= 500) {
      return "SERVER_ERROR";
    }
  }

  return "UNKNOWN";
};

/**
 * Get error severity level for UI styling
 * @param {Error} error - The error object from fetchData
 * @returns {string} Severity level (low, medium, high, critical)
 */
export const getErrorSeverity = (error) => {
  const errorType = getErrorType(error);

  switch (errorType) {
    case "NETWORK_ERROR":
    case "CANCELLED":
      return "medium";
    case "CLIENT_ERROR":
      return "low";
    case "SERVER_ERROR":
      return "high";
    case "RATE_LIMIT":
      return "medium";
    default:
      return "low";
  }
};

/**
 * Get suggested action for the user based on error type
 * @param {Error} error - The error object from fetchData
 * @returns {string} Suggested action for the user
 */
export const getSuggestedAction = (error) => {
  const errorType = getErrorType(error);

  switch (errorType) {
    case "NETWORK_ERROR":
      return "Check your internet connection and try again";
    case "RATE_LIMIT":
      return "Wait a few minutes before trying again";
    case "CLIENT_ERROR":
      return "Check your input and try again";
    case "SERVER_ERROR":
      return "Try again in a few minutes";
    case "CANCELLED":
      return "The request was cancelled";
    default:
      return "Please try again";
  }
};

/**
 * Check if error is retryable
 * @param {Error} error - The error object from fetchData
 * @returns {boolean} Whether the error can be retried
 */
export const isRetryable = (error) => {
  const errorType = getErrorType(error);

  // Don't retry client errors (4xx) except rate limits
  if (error?.status >= 400 && error?.status < 500 && error?.status !== 429) {
    return false;
  }

  // Don't retry cancelled requests
  if (errorType === "CANCELLED") {
    return false;
  }

  return true;
};

/**
 * Get error icon based on error type
 * @param {Error} error - The error object from fetchData
 * @returns {string} Icon name or emoji
 */
export const getErrorIcon = (error) => {
  const errorType = getErrorType(error);

  switch (errorType) {
    case "NETWORK_ERROR":
      return "🌐";
    case "RATE_LIMIT":
      return "⏰";
    case "CLIENT_ERROR":
      return "⚠️";
    case "SERVER_ERROR":
      return "🔧";
    case "CANCELLED":
      return "⏹️";
    default:
      return "❌";
  }
};

/**
 * Format error for logging/debugging
 * @param {Error} error - The error object from fetchData
 * @returns {Object} Formatted error object for debugging
 */
export const formatErrorForLogging = (error) => {
  return {
    message: getErrorMessage(error),
    type: getErrorType(error),
    severity: getErrorSeverity(error),
    status: error?.status,
    url: error?.url,
    timestamp: error?.timestamp,
    endpoint: error?.endpoint,
    technicalDetails: error?.technicalDetails,
    suggestedAction: getSuggestedAction(error),
    isRetryable: isRetryable(error),
  };
};
