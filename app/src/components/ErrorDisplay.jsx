import React from "react";
import {
  getErrorMessage,
  getErrorType,
  getErrorSeverity,
  getSuggestedAction,
  getErrorIcon,
  isRetryable,
} from "../utils/errorDisplay.js";

const ErrorDisplay = ({
  error,
  onRetry,
  onDismiss,
  showDetails = false,
  className = "",
  variant = "default", // 'default', 'inline', 'toast'
}) => {
  if (!error) return null;

  const errorMessage = getErrorMessage(error);
  const errorType = getErrorType(error);
  const severity = getErrorSeverity(error);
  const suggestedAction = getSuggestedAction(error);
  const errorIcon = getErrorIcon(error);
  const canRetry = isRetryable(error);

  // Get styling based on severity and variant
  const getContainerClasses = () => {
    const baseClasses = "rounded-lg p-4 border-l-4";

    switch (severity) {
      case "low":
        return `${baseClasses} bg-blue-50 border-blue-400 text-blue-800`;
      case "medium":
        return `${baseClasses} bg-yellow-50 border-yellow-400 text-yellow-800`;
      case "high":
        return `${baseClasses} bg-red-50 border-red-400 text-red-800`;
      case "critical":
        return `${baseClasses} bg-red-100 border-red-600 text-red-900`;
      default:
        return `${baseClasses} bg-gray-50 border-gray-400 text-gray-800`;
    }
  };

  const getIconClasses = () => {
    const baseClasses = "text-lg mr-2";
    switch (severity) {
      case "low":
        return `${baseClasses} text-blue-500`;
      case "medium":
        return `${baseClasses} text-yellow-500`;
      case "high":
        return `${baseClasses} text-red-500`;
      case "critical":
        return `${baseClasses} text-red-600`;
      default:
        return `${baseClasses} text-gray-500`;
    }
  };

  // Inline variant for small spaces
  if (variant === "inline") {
    return (
      <div className={`text-sm ${getContainerClasses()} ${className}`}>
        <span className="flex items-center">
          <span className={getIconClasses()}>{errorIcon}</span>
          {errorMessage}
        </span>
      </div>
    );
  }

  // Toast variant for notifications
  if (variant === "toast") {
    return (
      <div
        className={`fixed top-4 right-4 max-w-sm shadow-lg ${getContainerClasses()} ${className}`}
      >
        <div className="flex items-start">
          <span className={getIconClasses()}>{errorIcon}</span>
          <div className="flex-1">
            <p className="font-medium">{errorMessage}</p>
            {suggestedAction && (
              <p className="text-sm opacity-75 mt-1">{suggestedAction}</p>
            )}
          </div>
          {onDismiss && (
            <button
              onClick={onDismiss}
              className="ml-2 text-sm opacity-60 hover:opacity-100"
            >
              ×
            </button>
          )}
        </div>
      </div>
    );
  }

  // Default variant (full error display)
  return (
    <div className={`${getContainerClasses()} ${className}`}>
      <div className="flex items-start">
        <span className={getIconClasses()}>{errorIcon}</span>
        <div className="flex-1">
          <h3 className="font-medium mb-2">
            {errorType === "RATE_LIMIT"
              ? "Rate Limit Exceeded"
              : "Error Occurred"}
          </h3>
          <p className="mb-2">{errorMessage}</p>

          {suggestedAction && (
            <p className="text-sm opacity-75 mb-3">💡 {suggestedAction}</p>
          )}

          {/* Action buttons */}
          <div className="flex gap-2">
            {canRetry && onRetry && (
              <button
                onClick={onRetry}
                className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors"
              >
                Try Again
              </button>
            )}

            {onDismiss && (
              <button
                onClick={onDismiss}
                className="px-3 py-1 bg-gray-300 text-gray-700 rounded text-sm hover:bg-gray-400 transition-colors"
              >
                Dismiss
              </button>
            )}
          </div>

          {/* Technical details for debugging */}
          {showDetails && (
            <details className="mt-3 text-xs opacity-60">
              <summary className="cursor-pointer hover:opacity-100">
                Technical Details
              </summary>
              <div className="mt-2 p-2 bg-black bg-opacity-10 rounded">
                <p>
                  <strong>Type:</strong> {errorType}
                </p>
                <p>
                  <strong>Severity:</strong> {severity}
                </p>
                {error.status && (
                  <p>
                    <strong>Status:</strong> {error.status}
                  </p>
                )}
                {error.url && (
                  <p>
                    <strong>URL:</strong> {error.url}
                  </p>
                )}
                {error.timestamp && (
                  <p>
                    <strong>Time:</strong> {error.timestamp}
                  </p>
                )}
                {error.endpoint && (
                  <p>
                    <strong>Endpoint:</strong> {error.endpoint}
                  </p>
                )}
                {error.technicalDetails && (
                  <p>
                    <strong>Details:</strong> {error.technicalDetails}
                  </p>
                )}
              </div>
            </details>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorDisplay;
